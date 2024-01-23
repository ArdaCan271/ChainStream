const ChainStreamContract = artifacts.require("ChainStreamContract.sol");

module.exports = function(deployer) {
  deployer.deploy(ChainStreamContract);
}