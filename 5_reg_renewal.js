var reg_renewal = artifacts.require("reg_renewal");

module.exports = function(deployer) {
  deployer.deploy(reg_renewal);
};