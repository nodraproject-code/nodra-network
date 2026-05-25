require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.20",
    networks: {
        hardhat: {
            // Local network configuration
            chainId: 31337,
        },
        bscTestnet: {
            url: process.env.BSC_TESTNET_RPC_URL || "",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            chainId: 97,
        },
        bscMainnet: {
            url: process.env.BSC_MAINNET_RPC_URL || "",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            chainId: 56,
            verify: {
                etherscan: {
                    apiKey: process.env.BSCSCAN_API_KEY,
                },
            },
        },
    },
    etherscan: {
        apiKey: process.env.BSCSCAN_API_KEY || "",
        customChains: [{
                network: "bscMainnet",
                chainId: 56,
                urls: {
                    apiURL: "https://api.bscscan.com/api",
                    browserURL: "https://bscscan.com"
                }
            },
            {
                network: "bscTestnet",
                chainId: 97,
                urls: {
                    apiURL: "https://api-testnet.bscscan.com/api",
                    browserURL: "https://testnet.bscscan.com"
                }
            }
        ]
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
};
