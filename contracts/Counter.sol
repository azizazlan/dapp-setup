// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract Counter is AccessControl {
    bytes32 public constant GIVER_ROLE = keccak256("GIVER_ROLE");
    bytes32 public constant TAKER_ROLE = keccak256("TAKER_ROLE");

    uint public currentCount;

    event Increment(uint count);

    constructor() {
        currentCount = 0;
    }

    function increase() public {
        // require(hasRole(GIVER_ROLE, msg.sender), "Ko sape!");
        currentCount++; // Increment currentCount by one
        emit Increment(currentCount); // Emit the updated count
    }

    function decrease() public {
        require(currentCount > 0, "Already zero!");
        currentCount--;
    }
}
