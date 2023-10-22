# DApp setup

A simple react-vite and hardhat project. This project is our reference at thuleen on how to combine hardhat and react-vite project.

## Prerequisites

It is assumed you have the followings:

- access to the internet
- access to geth RPC endpoint.
- access to server with NGINX web server, preferrably running (min) Ubuntu 20.04.

## Install

1. Run install in both parent and frontend directories.

   `cd dapp-setup && npm install`

   `cd frontend && npm install`

2. Compile the smart contract(s). Change into the parent directory and run:

   `npx hardhat compile`

3. Deploy smart contract and take note of the smart contract address.

   `npx hardhat run --network localhost scripts/deploy.ts`

4. Create an `.env` in the frontend directory with the following contents:

   ```
   VITE_APP_RPC_URL=http://127.0.0.1:8545
   VITE_APP_ADDR_COUNTER=0x5FbDB23...180aa3
   VITE_APP_USER_PRIVATE_KEY=0xac09x...7bf4f2ff80
   ```

   To get `VITE_APP_USER_PRIVATE_KEY` you can use Metamask wallet.

5. Build the frontend app. Change into frontend directory and build:

   ```
   cd frontend
   npm run build
   ```

6. Copy or move the `dist` directory to the web server html directory. Then restart NGINX.
