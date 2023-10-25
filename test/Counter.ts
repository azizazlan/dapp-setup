import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

const GIVER_ROLE: string = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("GIVER_ROLE")
);

describe("Counter", function () {
  async function deployCounter() {
    // Contracts are deployed using the first signer/account by default
    const [admin, user, hantu] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(admin.address);
    return { counter, admin, user, hantu };
  }

  // describe("Deployment", function () {
  //   it("Should increase by one", async function () {
  //     const { counter, user } = await loadFixture(deployCounter);
  //     let countCheck = 0;
  //     await counter.increase();
  //     countCheck++;
  //     expect(await counter.currentCount()).equals(countCheck);

  //     // Let's increase again!
  //     await counter.increase();
  //     countCheck++;
  //     expect(await counter.currentCount()).equals(countCheck);
  //   });
  //   it("Should emit event Increment", async function () {
  //     const { counter, user } = await loadFixture(deployCounter);
  //     await counter.increase();
  //     const filter = await counter.filters.Increment(null);
  //     const filteredEvents = await counter.queryFilter(filter);
  //     expect(filteredEvents[0].args.count).equals(1);
  //   });
  //   it("Should decrease by one", async function () {
  //     const { counter, user } = await loadFixture(deployCounter);
  //     // increase by one
  //     await counter.increase(); // cuurentCount = 1
  //     // decrease
  //     await counter.decrease();
  //     // await expect(counter.decrease()).revertedWith("Already zero!");
  //     expect((await counter.currentCount()).toNumber()).equals(0);
  //   });
  // });
  // describe("Role", function () {
  //   it("Should fail to increase for user who has no GIVER role", async function () {
  //     const { counter, user } = await loadFixture(deployCounter);
  //     // await expect(counter.connect(user).increase()).revertedWith("Ko sape!");
  //     await expect(counter.connect(user).increase()).reverted;
  //   });
  //   it("should able to increase once GIVER is granted", async function () {
  //     const { counter, admin, user, hantu } = await loadFixture(deployCounter);

  //     await counter.connect(admin).grantRole(GIVER_ROLE, user.address);
  //     await counter.connect(hantu).increase();
  //   });
  // });
});
