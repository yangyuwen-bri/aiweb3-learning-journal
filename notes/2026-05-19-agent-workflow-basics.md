# AI Agent / Hermes 入门：Prompt、Workflow 与 Agent

日期：2026-05-19  
状态：学习笔记草稿，等待课程后补充

## 1. 今天先建立的三个概念

### Prompt

Prompt 是给 AI 的一次性输入或指令。它可以让 AI 回答问题、生成文本、写代码、整理资料。

Prompt 的特点：

- 通常是单轮或短上下文
- 依赖输入质量
- 适合完成明确的小任务

例子：

- “帮我解释什么是 Gas。”
- “帮我把这段打卡内容改得更清楚。”
- “帮我生成一个 README 模板。”

### Workflow

Workflow 是一套可重复执行的流程。它不只是问 AI 一个问题，而是包含步骤、检查点、产出和人工确认。

例子：

1. 读取课程资料
2. 提炼知识点
3. 生成笔记草稿
4. 人工确认
5. 写入 repo
6. 生成打卡草稿
7. 人工提交

Workflow 的重点是：流程可以重复，产出可以追踪。

### Agent

Agent 是能围绕目标持续执行 workflow 的 AI 协作者。它不只是回答，还可以使用工具、读取文件、维护上下文、更新仓库、生成下一步计划。

在我的学习场景中，Agent 可以帮助：

- 拆解每日任务
- 维护学习仓库
- 生成 daily note
- 整理课程资料
- 输出打卡草稿
- 汇总 proof-of-work
- 记录 Handbook feedback

但 Agent 不能代替我学习，也不能跳过人工确认。

## 2. 我的 Learning Agent 工作流

当前学习工作流可以设计成：

```text
课程资料 / Handbook / WCB 日程
-> Agent 提炼今日任务
-> 我确认学习路径
-> Agent 生成 notes / daily / checklist
-> 我学习、修改、补充
-> Agent 整理打卡草稿
-> 我手动提交 WCB
-> 提交结果写回 repo
```

## 3. 必须人工确认的边界

在 AI x Web3 学习里，下面这些操作必须由我确认：

- GitHub commit / push
- WCB 打卡或任务提交
- 钱包连接
- 消息签名
- token 转账
- token approval
- 合约部署
- 合约写入
- 任何 API key、私钥、助记词、密码相关操作

原因是：Agent 可以帮助生成和解释操作，但不能替我承担账户、资产和公开提交的责任。

## 4. 和 Web3 学习的关系

AI Agent 进入 Web3 场景后，最重要的问题不是“能不能自动执行”，而是：

- 能不能解释要执行什么？
- 能不能识别高风险动作？
- 能不能在关键节点暂停？
- 能不能留下可验证记录？
- 能不能让人类最终确认？

所以 Week 1 的核心链路是：

```text
AI 输出 -> 人工复核 -> 钱包确认 -> 链上执行 -> 区块浏览器验证
```

## 5. 今天要补充的内容

听完 / 回看 Hermes Agent 课程后补充：

- Hermes Agent 的核心功能：
- Hermes 和普通 ChatGPT / Codex 的区别：
- 它适合管理哪些学习任务：
- 哪些内容不应该交给 Agent：
- 我可以如何改进自己的 Learning Agent 配置：

