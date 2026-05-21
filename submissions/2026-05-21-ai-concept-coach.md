# Week 1 AI Interactive Learning Artifact Submission Draft

Task: Week 1｜AI 向任务｜完成 AI 可交互学习产物
Task ID: `cmp3jyqgx07san301erpv124n`
Status: draft, not submitted

## Demo

Local demo path:

`demos/ai-concept-coach/`

Local run URL:

`http://localhost:8787`

GitHub repo:

https://github.com/yangyuwen-bri/aiweb3-learning-journal

## What It Solves

AI Concept Coach 面向 AI 入门学习者，解决的问题是：听过 Prompt、Workflow、Agent、LLM、Tool use、Human-in-the-loop 等概念，但还不能用自己的话稳定复述，也不知道自己到底哪里理解错了。

它不是一个通用聊天机器人，而是一个固定学习流程：

```text
输入一个 AI 概念困惑
-> glm-5.1 生成结构化解释
-> 学习者写下自己的复述
-> glm-5.1 反馈复述是否准确
-> 生成可放入学习笔记的总结
```

## User Interaction

1. 用户输入一个 AI 概念问题，例如：

```text
Prompt、Workflow 和 Agent 有什么区别？
```

2. 工具调用本地 Node 后端，后端调用阿里云百炼 OpenAI-compatible API 的 `glm-5.1`。

3. 页面输出：

- 一句话解释
- 不是什么
- 新手类比
- 相邻概念区别
- 学习场景
- 常见误区
- 自测问题
- 复述练习
- 学习笔记草稿
- 人工验证点

4. 用户再用自己的话复述概念。

5. 工具再次调用模型，对复述给出评分、指出准确部分和不清楚部分，并生成更准确的复述版本。

## Example Input / Output

Input:

```text
Prompt、Workflow 和 Agent 有什么区别？
```

Example output summary:

```text
Prompt 是你给 AI 的单次指令，Workflow 是你为 AI 设计的固定执行流程，Agent 是赋予 AI 自主决策能力去完成目标的智能体。
```

Example self-check questions:

```text
如果任务步骤 100% 固定且不会遇到意外情况，该用 Workflow 还是 Agent？
如果只告诉 AI 一个最终目标而不给具体步骤，AI 需要具备什么能力才能完成？
```

Example learner restatement:

```text
Prompt 是一次给模型的指令，workflow 是多个步骤组成的流程，agent 是可以根据目标使用工具并调整步骤的系统。
```

Example review:

```text
Score: 4.5 / 5
Verdict: 核心逻辑准确，但可以补充具体对比维度和例子。
```

## AI / Human Split

AI generated:

- concept explanation
- analogy
- adjacent concept comparison
- self-check questions
- review feedback
- improved restatement
- note draft

Human designed / verified:

- product direction: from generic concept explainer to concept restatement coach
- learning flow: input -> explanation -> learner restatement -> feedback -> note draft
- safety boundary: API key stays in local `.env` / `private/`, not in frontend or public repo
- concept scope: limited to Week 1 AI learning concepts instead of generic chat
- output quality: checked with real example prompts and manually reviewed whether the result helps learning

## Limitations

- It currently runs locally, not as a hosted public website.
- It depends on a local `DASHSCOPE_API_KEY`.
- The model output is a learning draft, not an authoritative definition.
- The learner still needs to verify definitions against course material.
- It does not yet save practice history into the repo automatically.

## Next Improvements

- Add export to Markdown for `notes/`.
- Add a small practice history panel.
- Add preset Week 1 concept cards as starting prompts.
- Add a comparison mode for pairs like `Prompt vs Workflow`, `Workflow vs Agent`, `LLM vs Agent`.

## Submission Text

我做了一个 AI Concept Coach（AI 概念复述训练器），用于帮助 AI 入门学习者理解并复述 Prompt、Workflow、Agent、LLM、Tool use、Human-in-the-loop 等 Week 1 概念。

它不是通用聊天机器人，而是一个固定学习流程：用户先输入一个概念困惑，工具调用 `glm-5.1` 生成结构化解释、自测问题和学习笔记草稿；然后用户必须用自己的话复述概念，工具再对复述进行反馈，指出说对的部分、不清楚的部分，并生成更准确的复述版本。

示例输入：`Prompt、Workflow 和 Agent 有什么区别？`

示例输出会包含一句话解释、概念区别、新手类比、学习场景、常见误区、自测问题、复述练习和笔记草稿。复述检查阶段会给出评分、反馈和修正版表述。

AI 生成的部分包括解释、自测题、反馈和笔记草稿；我人工设计并验证了学习流程、概念范围、安全边界和示例输出。API key 只保存在本地 `.env` / `private/`，不会写入前端或公开仓库。

Demo 代码在 GitHub repo 的 `demos/ai-concept-coach/` 目录：

https://github.com/yangyuwen-bri/aiweb3-learning-journal
