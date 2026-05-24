const hre = require("hardhat");

async function main() {
    console.log("╔════════════════════════════════════════╗");
    console.log("║     NODRA TOKEN DEPLOYMENT SCRIPT      ║");
    console.log("╚════════════════════════════════════════╝\n");

    // Get deployer account
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contract with account: ${deployer.address}`);

    // Get network info
    const network = await hre.ethers.provider.getNetwork();
    console.log(`Network: ${network.name} (ChainID: ${network.chainId})\n`);

    // Deploy NodraToken
    console.log("Deploying NodraToken...");
    const NodraToken = await hre.ethers.getContractFactory("NodraToken");
    const nodraToken = await NodraToken.deploy();

    // Wait for deployment confirmation
    await nodraToken.waitForDeployment();
    const contractAddress = await nodraToken.getAddress();

    console.log("✓ NodraToken deployed successfully!\n");

    // Get token info
    const name = await nodraToken.name();
    const symbol = await nodraToken.symbol();
    const decimals = await nodraToken.decimals();
    const totalSupply = await nodraToken.totalSupply();
    const balance = await nodraToken.balanceOf(deployer.address);

    console.log("╔════════════════════════════════════════╗");
    console.log("║        DEPLOYMENT INFORMATION          ║");
    console.log("╚════════════════════════════════════════╝");
    console.log(`Contract Address:  ${contractAddress}`);
    console.log(`Deployer Address:  ${deployer.address}`);
    console.log(`Token Name:        ${name}`);
    console.log(`Token Symbol:      ${symbol}`);
    console.log(`Decimals:          ${decimals}`);
    console.log(`Total Supply:      ${hre.ethers.formatUnits(totalSupply, decimals)} ${symbol}`);
    console.log(`Deployer Balance:  ${hre.ethers.formatUnits(balance, decimals)} ${symbol}`);
    console.log(`Network:           ${network.name} (ChainID: ${network.chainId})`);
    console.log("\n✓ Deployment complete!");
    console.log("⚠ WARNING: This deployment is on a test/local network.");
    console.log("   Testnet tokens have NO market value.\n");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });