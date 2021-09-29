module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  plugins: ["truffle-contract-size"],

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.7', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.8.0" you've installed locally with docker (default: false)
      settings: { // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
