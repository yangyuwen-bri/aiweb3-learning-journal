# Week 1 Tool Setup Submission Draft

Task: Week 1｜前置准备｜完成课程工具准备
Task ID: `cmp3jypmh07s0n301e51hp6r3`
Status: submitted via WCB Agent API after human confirmation
Submission ID: `cmpf8mw4241scmu01c4hb4d97`
Submitted at: `2026-05-21T08:37:46.131Z`
Platform status after submit: `SUBMITTED`

## Proof Link

Main repo:

https://github.com/yangyuwen-bri/aiweb3-learning-journal

## Tool Setup Record

### 1. Collaboration / Course Tools

- WCB learning platform
  - Used to view course tasks, check-in requirements, learning schedule, and task status.
  - Current use: track Week 1 tasks and submit proof-of-work.
- Zoom / live session screenshots
  - Used for attending live sessions and keeping private participation evidence.
  - Screenshot evidence is stored locally under `private/` and is not uploaded to the public repo.
- GitHub
  - Used as the public learning workspace for notes, logs, demos, prompts, experiments, and submissions.
  - Repo structure includes `daily/`, `notes/`, `experiments/`, `demos/`, `prompts/`, `templates/`, and `submissions/`.

### 2. AI / Agent Tools

- Codex / Learning Agent
  - Used to initialize and maintain the learning repo.
  - Used to turn course materials into Chinese notes, daily check-in drafts, interactive HTML learning artifacts, and task submission drafts.
  - Used with human confirmation for high-impact actions such as GitHub push, WCB submission, wallet-related operations, and API mutations.
- GitHub CLI / Git
  - Used to create commits and push public learning records to GitHub.
  - Current repo is already connected to GitHub and has multiple Week 1 commits.
- WCB Agent API
  - Used only after storing the key locally in `private/`.
  - Explored read-only permissions first.
  - Later used to submit the Sepolia testnet transaction task only after explicit human confirmation.
  - API keys and `.env` files are not committed to the public repo.

### 3. Web3 Tools

- MetaMask
  - Used as the test wallet for Week 1 Web3 practice.
  - Used on Ethereum Sepolia testnet only.
- Google Cloud Web3 Faucet
  - Used to receive 0.05 Sepolia ETH.
- Sepolia Etherscan
  - Used to verify faucet and outgoing transfer transactions.
  - Recorded transaction hash, status, block height, transaction fee, gas price, and value.
- Transaction review checklist
  - Local template: `templates/transaction-review.md`
  - Used to separate AI-assisted explanation from human-confirmed wallet actions.

## Week 1 Usage

These tools have already supported the following Week 1 work:

- Created public learning repo:
  - https://github.com/yangyuwen-bri/aiweb3-learning-journal
- Recorded AI Agent / workflow learning notes:
  - `notes/2026-05-19-agent-workflow-basics.md`
- Recorded Web3 runtime notes:
  - `notes/2026-05-20-web3-runtime-basics.md`
- Completed Sepolia testnet transaction practice:
  - `experiments/2026-05-20-sepolia-faucet.md`
  - `experiments/2026-05-20-sepolia-transfer.md`
- Built an interactive learning artifact:
  - `demos/foundations-map/index.html`

## Still Pending / Next Tool Setup

- Try Remix for a minimal smart contract read/write or deployment task.
- Optionally explore Hardhat or Foundry later, after the basic Remix path is clear.
- Continue learning Z.AI / GLM API when the related session starts.
- Keep all API keys, wallet recovery phrases, private keys, screenshots with personal context, and `.env` files out of the public repo.

## Submission Text

我已经完成 Week 1 的基础工具准备，并把学习工作区整理到 GitHub repo：

https://github.com/yangyuwen-bri/aiweb3-learning-journal

协作 / 课程工具方面，我使用 WCB learning platform 查看课程任务、日程和提交状态，使用 Zoom 参加直播课程并把截图证据保存在本地 private 目录，不上传到公开仓库。GitHub 用作统一学习工作区，记录 daily notes、课程笔记、实验记录、prompt、demo 和提交草稿。

AI 工具方面，我主要使用 Codex / Learning Agent 协助初始化 repo、整理课程 PPT 和直播笔记、生成每日打卡草稿、制作交互式 HTML 学习工具、检查任务状态和准备提交材料。对于 GitHub push、WCB 提交、钱包签名、转账、授权和 API mutation，我保留人工确认步骤。

Web3 工具方面，我已经准备并使用 MetaMask、Ethereum Sepolia testnet、Google Cloud Web3 Faucet 和 Sepolia Etherscan。已完成一次 faucet 入账和一次主动发送 Sepolia 测试交易，并在区块浏览器记录交易哈希、状态、Gas、区块高度和费用信息。

下一步工具准备是学习 Remix，用于完成最小智能合约的读取 / 写入或部署任务；之后再根据需要了解 Hardhat / Foundry。全程不会提交 API Key、私钥、助记词、token、`.env` 文件或其他敏感信息。
