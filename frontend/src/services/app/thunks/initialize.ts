import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import counterJson from "../../../assets/artifacts/contracts/Counter.sol/Counter.json";

const RPC_URL = import.meta.env.VITE_APP_RPC_URL;
const COUNTER_CONTRACT_ADDR = import.meta.env.VITE_APP_ADDR_COUNTER;

const initialize = createAsyncThunk("app_initialize", async () => {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  console.log(`Counter address ${COUNTER_CONTRACT_ADDR}`);

  const counter = new ethers.Contract(
    COUNTER_CONTRACT_ADDR,
    counterJson.abi,
    provider
  );
  const bnCurrentCount = await counter.currentCount(); // BigNumber
  const currentCount = bnCurrentCount.toNumber();

  return {
    currentCount,
    message: "Successfully initialized",
  };
});
export default initialize;
