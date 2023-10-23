import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers, Wallet } from "ethers";
import counterJson from "../../../assets/artifacts/contracts/Counter.sol/Counter.json";

const RPC_URL = import.meta.env.VITE_APP_RPC_URL;
const COUNTER_CONTRACT_ADDR = import.meta.env.VITE_APP_ADDR_COUNTER;
const USER_PRIVATE_KEY = import.meta.env.VITE_APP_USER_PRIVATE_KEY;

const decrease = createAsyncThunk("app_decrease", async () => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const userWallet = new Wallet(USER_PRIVATE_KEY, provider);

  const counter = new ethers.Contract(
    COUNTER_CONTRACT_ADDR,
    counterJson.abi,
    provider
  );
  await counter.connect(userWallet).decrease();

  // simulate delay just for fun!
  await new Promise((resolve) => setTimeout(resolve, 300)); //300 milisecs

  const bnCurrentCount = await counter.currentCount(); // BigNumber
  const currentCount = bnCurrentCount.toNumber();

  return {
    currentCount,
    message: "Successfully decrease",
  };
});
export default decrease;
