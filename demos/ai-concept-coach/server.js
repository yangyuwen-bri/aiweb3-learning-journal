import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname);
const envPaths = [
  join(root, ".env"),
  resolve(root, "../../private/ai-concept-coach.env")
];

loadEnvFiles(envPaths);

const port = Number(process.env.PORT || 8787);
const apiKey = process.env.DASHSCOPE_API_KEY;
const model = process.env.AI_CONCEPT_COACH_MODEL || "glm-5.1";
const dashscopeURL = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png"
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/health") {
      return sendJSON(res, 200, {
        ok: true,
        model,
        hasKey: Boolean(apiKey)
      });
    }

    if (req.method === "POST" && url.pathname === "/api/coach") {
      return handleCoach(req, res);
    }

    if (req.method !== "GET") {
      return sendJSON(res, 405, { ok: false, error: "Method not allowed" });
    }

    return serveStatic(url.pathname, res);
  } catch (error) {
    console.error(error);
    return sendJSON(res, 500, { ok: false, error: "Internal server error" });
  }
}).listen(port, () => {
  console.log(`AI Concept Coach running at http://localhost:${port}`);
});

async function handleCoach(req, res) {
  if (!apiKey) {
    return sendJSON(res, 500, {
      ok: false,
      error: "Missing DASHSCOPE_API_KEY. Configure it in .env or private/ai-concept-coach.env."
    });
  }

  const body = await readBody(req);
  const payload = parseJSON(body);
  if (!payload) return sendJSON(res, 400, { ok: false, error: "Invalid JSON body" });

  const action = String(payload.action || "coach");
  const concept = sanitizeText(payload.concept || "", 800);
  const learnerAnswer = sanitizeText(payload.learnerAnswer || "", 1200);
  const context = sanitizeText(payload.context || "", 800);

  if (!concept) {
    return sendJSON(res, 400, { ok: false, error: "Please provide a concept or learning question." });
  }

  const messages = buildMessages({ action, concept, learnerAnswer, context });
  const startedAt = Date.now();
  const completion = await callModel(messages);
  const content = completion?.choices?.[0]?.message?.content || "";
  const parsed = extractJSON(content);

  return sendJSON(res, 200, {
    ok: true,
    action,
    model,
    latencyMs: Date.now() - startedAt,
    usage: completion?.usage || null,
    result: parsed || {
      title: "模型返回了非 JSON 内容",
      raw: content
    }
  });
}

function buildMessages({ action, concept, learnerAnswer, context }) {
  const system = [
    "你是 AI x Web3 School 的 AI 概念复述训练教练。",
    "你的目标不是泛泛回答问题，而是帮助入门学习者把 AI 概念训练到能复述、能举例、能写进学习笔记。",
    "只围绕 Week 1 常见概念：LLM、Prompt、Context、Workflow、Agent、Tool use、Human-in-the-loop、Guardrails、AI coding、AI-assisted learning。",
    "不要要求或处理 API key、token、私钥、助记词、密码或个人敏感信息。",
    "输出必须是严格 JSON，不要 Markdown 代码块，不要额外解释。"
  ].join("\n");

  if (action === "review") {
    return [
      { role: "system", content: system },
      {
        role: "user",
        content: JSON.stringify({
          task: "review_learner_restatement",
          concept,
          courseContext: context,
          learnerRestatement: learnerAnswer,
          outputSchema: {
            title: "string",
            score: "number 0-5",
            verdict: "string",
            correctParts: ["string"],
            unclearParts: ["string"],
            improvedRestatement: "string",
            nextPractice: ["string"],
            noteDraft: "string"
          }
        })
      }
    ];
  }

  return [
    { role: "system", content: system },
    {
      role: "user",
      content: JSON.stringify({
        task: "coach_ai_concept",
        learnerQuestion: concept,
        courseContext: context,
        outputSchema: {
          title: "string",
          oneSentence: "string",
          notThis: "string",
          analogy: "string",
          adjacentConcepts: [
            { name: "string", difference: "string" }
          ],
          learningScenario: "string",
          commonMistakes: ["string"],
          selfCheckQuestions: ["string"],
          restatementPrompt: "string",
          noteDraft: "string",
          humanVerification: ["string"]
        }
      })
    }
  ];
}

async function callModel(messages) {
  const response = await fetch(dashscopeURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.35,
      max_tokens: 1400,
      enable_thinking: false
    })
  });

  const text = await response.text();
  const data = parseJSON(text) || { raw: text };
  if (!response.ok) {
    const message = data?.error?.message || data?.message || `DashScope request failed: ${response.status}`;
    throw new Error(message);
  }
  return data;
}

async function serveStatic(pathname, res) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const safePath = normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const filePath = resolve(root, `.${safePath}`);

  if (!filePath.startsWith(root)) {
    return sendJSON(res, 403, { ok: false, error: "Forbidden" });
  }

  try {
    const data = await readFile(filePath);
    const type = mimeTypes[extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  } catch {
    sendJSON(res, 404, { ok: false, error: "Not found" });
  }
}

function readBody(req) {
  return new Promise((resolveBody, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 20_000) {
        req.destroy();
        reject(new Error("Request too large"));
      }
    });
    req.on("end", () => resolveBody(body));
    req.on("error", reject);
  });
}

function sendJSON(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data, null, 2));
}

function parseJSON(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function extractJSON(text) {
  const direct = parseJSON(text);
  if (direct) return direct;
  const match = text.match(/\{[\s\S]*\}/);
  return match ? parseJSON(match[0]) : null;
}

function sanitizeText(value, maxLength) {
  return String(value)
    .replace(/\b(sk|pk|w3cb_sk)_[A-Za-z0-9_-]+/g, "[REDACTED_SECRET]")
    .replace(/-----BEGIN [^-]+-----[\s\S]*?-----END [^-]+-----/g, "[REDACTED_KEY_BLOCK]")
    .slice(0, maxLength)
    .trim();
}

function loadEnvFiles(paths) {
  for (const path of paths) {
    if (!existsSync(path)) continue;
    const lines = readFileSync(path, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const index = trimmed.indexOf("=");
      if (index === -1) continue;
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
      if (key && process.env[key] === undefined) process.env[key] = value;
    }
  }
}
