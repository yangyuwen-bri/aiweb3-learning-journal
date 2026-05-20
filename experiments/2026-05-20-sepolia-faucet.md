# Sepolia Faucet Practice

Date: 2026-05-20
Network: Ethereum Sepolia testnet
Status: completed

## Goal

Use a testnet wallet to complete the first low-risk Web3 transaction practice:

```text
request testnet ETH
-> receive testnet ETH in wallet
-> verify transaction on a block explorer
-> record what should be checked before future signatures or transactions
```

This experiment uses testnet funds only. No mainnet funds were used.

## Result

- Action: received 0.05 Sepolia ETH from Google Cloud Web3 faucet
- Status: success
- Transaction hash: `0x925b5e996c8989e82c0758cc7590430d0938bb433b07be9f7db473cd2583d2a7`
- Explorer: https://sepolia.etherscan.io/tx/0x925b5e996c8989e82c0758cc7590430d0938bb433b07be9f7db473cd2583d2a7
- Value: 0.05 Sepolia ETH
- Block: `10886196`
- Transaction fee: `0.000022025038833 ETH`
- Gas price: `1.048811373 Gwei`

## What I Practiced

- Created / used a MetaMask wallet account.
- Requested testnet ETH from a faucet.
- Checked transaction status on a block explorer.
- Compared wallet display with explorer transaction details.
- Recorded transaction hash, status, block height, transaction fee, and gas price.
- Confirmed the difference between testnet value and real mainnet funds.

## Task Fit

This completed:

- switch / use Ethereum Sepolia testnet
- receive testnet ETH from a faucet
- find the transaction result in a block explorer
- record transaction hash, status, gas, and block height

Still to do if the course task requires an outgoing transaction from my wallet:

- completed in `experiments/2026-05-20-sepolia-transfer.md`

## Safety Notes

- Never publish seed phrase, private key, or recovery phrase.
- A public wallet address and transaction hash are not private secrets, but publishing them can link this wallet to my public identity.
- For a public learning repo, avoid uploading raw screenshots that show browser tabs, personal account UI, or unnecessary wallet context.
- For check-in proof, a transaction hash or explorer link is enough.

## Learning Takeaway

This practice connects today's Web3 runtime model with a real transaction flow:

```text
wallet account
-> faucet sends testnet ETH
-> transaction is included in a block
-> explorer confirms status, value, fee, block, sender, and recipient
```

The most important habit is not just completing a transaction, but learning to verify what happened without exposing sensitive wallet information.
