# AI Concept Coach

AI Concept Coach 是一个面向 AI 入门学习者的概念复述训练器。

它不是通用聊天窗口，而是一个固定学习流程：

```text
输入一个 AI 概念困惑
-> AI 生成结构化解释
-> 学习者用自己的话复述
-> AI 反馈复述是否准确
-> 生成可放入学习笔记的总结
```

## What It Helps With

适合用来练习这些 Week 1 概念：

- LLM
- Prompt
- Context
- Workflow
- Agent
- Tool use
- Human-in-the-loop
- Guardrails
- AI coding

## Run Locally

This demo uses Alibaba Cloud Model Studio / DashScope OpenAI-compatible API with `glm-5.1`.

1. Copy the environment file:

```bash
cp .env.example .env
```

2. Set your local key:

```bash
DASHSCOPE_API_KEY=...
```

3. Start the local server:

```bash
npm start
```

4. Open:

```text
http://localhost:8787
```

## Safety

- Do not put API keys in `index.html`.
- Do not commit `.env`.
- Do not input private keys, wallet seed phrases, API keys, tokens, or private personal data.
- The model output should be treated as a learning draft. The learner still needs to verify definitions and examples against course material.

## AI / Human Split

AI generates:

- concept explanation
- beginner analogy
- adjacent concept comparison
- self-check questions
- review feedback
- note draft

Human verifies:

- whether the explanation matches the course context
- whether examples are accurate
- whether the final note is written in the learner's own words
- whether any sensitive information should be removed before publishing
