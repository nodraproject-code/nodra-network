const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NODRA Token", function () {
  let nodraToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const NodraToken = await ethers.getContractFactory("NodraToken");
    nodraToken = await NodraToken.deploy();
  });

  describe("Deployment", function () {
    it("Should have the correct name", async function () {
      expect(await nodraToken.name()).to.equal("NODRA Network");
    });

    it("Should have the correct symbol", async function () {
      expect(await nodraToken.symbol()).to.equal("NODRA");
    });

    it("Should have 18 decimals", async function () {
      expect(await nodraToken.decimals()).to.equal(18);
    });

    it("Should have correct total supply (1 billion)", async function () {
      const totalSupply = await nodraToken.totalSupply();
      const expectedSupply = ethers.parseUnits("1000000000", 18);
      expect(totalSupply).to.equal(expectedSupply);
    });

    it("Should assign all initial tokens to deployer", async function () {
      const ownerBalance = await nodraToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(await nodraToken.totalSupply());
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const transferAmount = ethers.parseUnits("100", 18);

      // Transfer from owner to addr1
      await nodraToken.transfer(addr1.address, transferAmount);
      expect(await nodraToken.balanceOf(addr1.address)).to.equal(transferAmount);

      // Transfer from addr1 to addr2
      await nodraToken.connect(addr1).transfer(addr2.address, transferAmount);
      expect(await nodraToken.balanceOf(addr2.address)).to.equal(transferAmount);
      expect(await nodraToken.balanceOf(addr1.address)).to.equal(0);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const transferAmount = ethers.parseUnits("1000000001", 18);

      // addr1 has no tokens, should fail
      await expect(
        nodraToken.connect(addr1).transfer(owner.address, transferAmount)
      ).to.be.revertedWithCustomError(nodraToken, "ERC20InsufficientBalance");
    });
  });

  describe("Allowance and Approve", function () {
    it("Should set and get allowance correctly", async function () {
      const approveAmount = ethers.parseUnits("500", 18);

      await nodraToken.approve(addr1.address, approveAmount);
      expect(await nodraToken.allowance(owner.address, addr1.address)).to.equal(
        approveAmount
      );
    });

    it("Should transfer tokens using transferFrom", async function () {
      const transferAmount = ethers.parseUnits("100", 18);

      // Owner approves addr1 to spend 100 tokens
      await nodraToken.approve(addr1.address, transferAmount);

      // addr1 transfers 100 tokens from owner to addr2
      await nodraToken
        .connect(addr1)
        .transferFrom(owner.address, addr2.address, transferAmount);

      expect(await nodraToken.balanceOf(addr2.address)).to.equal(transferAmount);
      expect(await nodraToken.allowance(owner.address, addr1.address)).to.equal(0);
    });
  });

  describe("Token Properties", function () {
    it("Should NOT have a public mint function", async function () {
      expect(nodraToken.mint).to.be.undefined;
    });

    it("Should NOT have a public burn function", async function () {
      expect(nodraToken.burn).to.be.undefined;
    });

    it("Should be a standard ERC20 token", async function () {
      // Verify basic ERC20 functions exist
      expect(typeof nodraToken.transfer).to.equal("function");
      expect(typeof nodraToken.transferFrom).to.equal("function");
      expect(typeof nodraToken.approve).to.equal("function");
      expect(typeof nodraToken.balanceOf).to.equal("function");
      expect(typeof nodraToken.allowance).to.equal("function");
    });
  });
});
