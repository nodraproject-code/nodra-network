// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title NODRA Network Token
 * @dev NODRA Token - ERC20 implementation for NODRA Network
 *
 * Total Supply: 1,000,000,000 NODRA tokens
 * Decimals: 18
 *
 * This is a simple ERC20 token with no additional features.
 * No minting, no burning, no taxes, no blacklist, no pauses.
 * All tokens are minted to deployer at contract creation.
 */
contract NodraToken is ERC20 {
    /**
     * @dev Constructor that creates NODRA tokens
     * Mints 1,000,000,000 NODRA tokens to the deployer wallet
     */
    constructor() ERC20("NODRA Network", "NODRA") {
        _mint(msg.sender, 1_000_000_000 * 10 ** decimals());
    }
}
