# Sepolia Outgoing Transfer Practice

Date: 2026-05-20
Network: Ethereum Sepolia testnet
Status: completed and verified on block explorer
WCB task status: submitted via Agent API after human confirmation

## Goal

Complete the course-style Web3 practice task:

```text
switch to testnet
-> receive testnet ETH
-> send a small test transaction
-> verify the result
-> record transaction hash, status, gas, and block height
```

## Result From MetaMask

- Action: sent a small Sepolia ETH transaction from `Account 1` to `testTWO`
- Status: confirmed
- Amount: `0.005 SepoliaETH`
- Nonce: `12`
- Gas limit: `31500`
- Gas used: `21000`
- Base fee: `1.00079671 GWEI`
- Priority fee: `1.5 GWEI`
- Total gas fee shown in MetaMask: `0.000053 SepoliaETH`
- Total cost: `0.00505252 SepoliaETH`
- Transaction hash: `0xa9974b63b7bc3299545cfdd60e3282aff0deaa37e1a0cd7fac2c62ce6576655a`
- Block height: `10886306`
- Explorer link: https://sepolia.etherscan.io/tx/0xa9974b63b7bc3299545cfdd60e3282aff0deaa37e1a0cd7fac2c62ce6576655a

## Result From Block Explorer

- Transaction action: transfer 0.005 ETH
- Status: success
- Block: `10886306`
- Timestamp: `May-20-2026 03:06:12 PM +UTC`
- From: `0xA078C157CEb875420ADf39ad479f24BB97432943`
- To: `0x5688DEd84f318bB3C7BEF051915db30c55dFeBfE`
- Value: `0.005 ETH`
- Transaction fee: `0.00005251673091 ETH`
- Gas price: `2.50079671 Gwei`

## What This Confirms

This transaction completes the missing outgoing-transfer step after receiving faucet ETH.

The full testnet practice flow is now:

```text
MetaMask account
-> Ethereum Sepolia testnet
-> receive 0.05 Sepolia ETH from faucet
-> send 0.005 Sepolia ETH to another test account
-> confirm transaction in wallet
-> verify transaction details on block explorer
```

## Safety Notes

- This is a Sepolia testnet transaction only.
- No mainnet funds were used.
- Screenshot evidence is kept privately because it contains wallet UI context.
- Public proof should use the transaction hash / explorer link rather than raw screenshots.

## WCB Submission

- Task: Week 1｜Web3 向任务｜完成一笔测试网交易
- Task ID: `cmp3jyqxo07sen301c3ljomc5`
- Submission ID: `cmpe8tyup28n2mu01f8tmj415`
- Submitted at: `2026-05-20T15:55:30.097Z`
- Status after submit: `SUBMITTED`
