// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint public currentCount;

    event Increment(uint count);

    constructor() {
        currentCount = 0;
    }

    function increase() public {
        currentCount++; // Increment currentCount by one
        emit Increment(currentCount); // Emit the updated count
    }

    function decrease() public {
        require(currentCount > 0, "Already zero!");
        currentCount--;
    }
}
