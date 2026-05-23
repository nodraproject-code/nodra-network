# NODRA Token Smart Contracts

**Purpose:** Reserve and secure the NODRA token nomenclature with an official ERC20 contract.

**Status:** Phase 1 — Testnet Only  
**Network:** BNB Smart Chain (BSC)

---

## Overview

The NODRA Token is a standard ERC20 contract deployed to secure the token name and symbol for the NODRA Network project. This contract contains:

- ✅ **1 billion NODRA tokens** (1,000,000,000)
- ✅ **Fixed supply** - no minting function
- ✅ **Standard ERC20** - from OpenZeppelin
- ❌ **NO hidden features** - no taxes, no blacklist, no pauses
- ❌ **NO backend integration** - token is standalone
- ❌ **NO liquidity** - testnet reserve only
- ❌ **NO exchanges** - testnet only

---

## Project Structure

```
contracts/
├── contracts/
│   └── NodraToken.sol           # ERC20 token contract
├── scripts/
│   └── deploy.js                # Deployment script
├── test/
│   └── NodraToken.test.js       # Contract tests
├── hardhat.config.js            # Hardhat configuration
├── package.json                 # Dependencies
├── .env.example                 # Environment variables template
└── README.md                    # This file
```

---

## Quick Start

### 1. Install Dependencies

```bash
cd contracts
npm install
```

### 2. Compile Contract

```bash
npm run compile
```

Expected output:
```
Compiling 1 file with 0.8.20
Compilation successful
✓ Artifact written to artifacts/contracts/NodraToken.sol/NodraToken.json
```

### 3. Run Tests

```bash
npm run test
```

Expected tests:
- ✓ Token name is "NODRA Network"
- ✓ Token symbol is "NODRA"
- ✓ Decimals are 18
- ✓ Total supply is 1,000,000,000 NODRA
- ✓ All tokens assigned to deployer
- ✓ Transfers work correctly
- ✓ Approvals work correctly
- ✓ No hidden mint/burn functions

---

## Deployment

### Local Testing (Hardhat)

```bash
npm run deploy:local
```

### BSC Testnet Deployment

**IMPORTANT:** Only testnet is supported at this time.

1. **Set up .env file:**
   ```bash
   cp .env.example .env
   ```

2. **Fill in your wallet private key and RPC URL:**
   ```
   PRIVATE_KEY=your_private_key_here
   BSC_TESTNET_RPC_URL=https://data-seed-prebsc-...
   ```

3. **Get testnet funds:**
   - Visit https://testnet.binance.org/faucet
   - Send yourself some tBNB

4. **Deploy to testnet:**
   ```bash
   npm run deploy:testnet
   ```

5. **Verify on BSCScan testnet:**
   - Contract address will be shown in console
   - Go to https://testnet.bscscan.com/
   - Search for contract address
   - View tokens at: `https://testnet.bscscan.com/token/{CONTRACT_ADDRESS}`

---

## Contract Details

### Token Information

| Property | Value |
|----------|-------|
| Name | NODRA Network |
| Symbol | NODRA |
| Decimals | 18 |
| Total Supply | 1,000,000,000 |
| Type | Standard ERC20 |
| Standard | ERC-20 (OpenZeppelin) |

### Initial Distribution

- **100% → Deployer wallet**
- No presale
- No airdrop
- No DEX liquidity
- No market exchange

### Security Features

- ✅ Standard OpenZeppelin ERC20
- ✅ Audited contract base
- ✅ No custom logic (reduces risk)
- ✅ Fixed supply (no mint function)
- ✅ No pause mechanism (no control)
- ✅ No blacklist (fully transparent)
- ✅ No taxes or fees

### NOT Included

- ❌ Mint function
- ❌ Burn function
- ❌ Pause function
- ❌ Blacklist function
- ❌ Tax mechanism
- ❌ Hidden owner controls
- ❌ Backend integration

---

## Testing

### Run All Tests

```bash
npm run test
```

### Individual Test Suites

```bash
# Deployment tests
npx hardhat test --grep "Deployment"

# Transfer tests
npx hardhat test --grep "Transfers"

# Allowance tests
npx hardhat test --grep "Allowance"

# Token properties tests
npx hardhat test --grep "Token Properties"
```

### Test Coverage

The test suite covers:

1. **Deployment**
   - Name verification
   - Symbol verification
   - Decimals verification
   - Supply verification
   - Owner balance verification

2. **Transfers**
   - Basic transfer functionality
   - Insufficient balance handling

3. **Allowance**
   - Approve functionality
   - TransferFrom functionality

4. **Token Properties**
   - No public mint function
   - No public burn function
   - Standard ERC20 functions exist

---

## Network Information

### BSC Testnet

| Property | Value |
|----------|-------|
| Chain ID | 97 |
| RPC | https://data-seed-prebsc-1-e05a9c41c88f10b3393149fb8c4430341f12d9359:8545 |
| Block Explorer | https://testnet.bscscan.com |
| Faucet | https://testnet.binance.org/faucet |
| Status | ✅ ACTIVE |

### BSC Mainnet

| Property | Value |
|----------|-------|
| Chain ID | 56 |
| RPC | https://bsc-dataseed1.binance.org:443 |
| Block Explorer | https://bscscan.com |
| Status | ⚠ NOT YET DEPLOYED |

**WARNING:** Mainnet deployment requires explicit approval from NODRA Network leadership.

---

## Important Notes

### Testnet vs Mainnet

- **Testnet tokens have NO market value**
- **Testnet is for testing only**
- **Testnet state resets periodically**
- **Mainnet deployment deferred**

### Private Key Security

- ⚠ **NEVER** commit .env to git
- ⚠ **NEVER** push your private key to GitHub
- ⚠ **NEVER** use mainnet keys for testing
- ✅ Use separate wallet for each network
- ✅ Rotate keys after testnet testing

### Mainnet Deployment

- NOT YET APPROVED
- Requires NODRA Network leadership decision
- Will use separate secure procedures
- Will include community communication

---

## Development

### Prerequisites

- Node.js 18+
- npm 9+
- Hardhat 2.22+

### Install Dev Dependencies

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts
npm install --save-dev dotenv
```

### Build

```bash
npm run compile
```

### Clean

```bash
rm -rf artifacts cache
npm run compile
```

---

## Support

### Links

- **NODRA Network:** https://nodranetwork.com
- **GitHub:** https://github.com/nodra-network
- **Discord:** https://discord.gg/pPj2G3D5Z
- **X/Twitter:** https://x.com/NODRAnetwork
- **Telegram:** https://t.me/nodranetwors

### Resources

- [Hardhat Docs](https://hardhat.org/docs)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
- [ERC20 Standard](https://eips.ethereum.org/EIPS/eip-20)
- [BSC Documentation](https://docs.bnbchain.org/)

---

## License

MIT

---

## Status

| Component | Status | Notes |
|-----------|--------|-------|
| Contract | ✅ Ready | Audited OpenZeppelin base |
| Tests | ✅ Ready | Full coverage |
| Testnet Deploy | ✅ Ready | Use provided script |
| Mainnet Deploy | ⏳ Pending | Approval required |
| Liquidity | ❌ None | Not added |
| Exchange | ❌ None | Not listed |
| Wallet Integration | ❌ Not Yet | Future phase |

---

*Last Updated: May 23, 2026*  
*Framework: Hardhat 2.22.0*  
*Contract: Solidity 0.8.20*  
*Base: OpenZeppelin ERC20*
