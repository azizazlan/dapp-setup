import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {
  async function deployCounter() {
    // Contracts are deployed using the first signer/account by default
    const [user] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    return { counter, user };
  }

  describe("Deployment", function () {
    it("Should increase by one", async function () {
      const { counter, user } = await loadFixture(deployCounter);
      let countCheck = 0;
      await counter.increase();
      countCheck++;
      expect(await counter.currentCount()).equals(countCheck);

      // Let's increase again!
      await counter.increase();
      countCheck++;
      expect(await counter.currentCount()).equals(countCheck);
    });
    it("Should emit event Increment", async function () {
      const { counter, user } = await loadFixture(deployCounter);
      await counter.increase();
      const filter = await counter.filters.Increment(null);
      const filteredEvents = await counter.queryFilter(filter);
      expect(filteredEvents[0].args.count).equals(1);
    });
    it("Should decrease by one", async function () {
      const { counter, user } = await loadFixture(deployCounter);
      // increase by one
      await counter.increase(); // cuurentCount = 1
      // decrease
      await counter.decrease();
      // await expect(counter.decrease()).revertedWith("Already zero!");
      expect((await counter.currentCount()).toNumber()).equals(0);
    });
  });
});
