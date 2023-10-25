import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  paths: {
    artifacts: "./frontend/src/assets/artifacts",
  },
  networks: {
    kesidang: {
      url: "https://kesidang.melaka.gov.my", // Replace with the URL of your custom network
      httpHeaders: { Origin: "https://kesidang.melaka.gov.my" }, // Optional
    },
  },
};

export default config;
