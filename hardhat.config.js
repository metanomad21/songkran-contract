require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-deploy");
require('hardhat-contract-sizer');
const dotenv = require("dotenv");
dotenv.config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [{
      version: "0.8.9",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    }]
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      timeout: 200000000,
      gasPrice: 5100000000,
      gas: 5100000
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      gas: 5000000, 
      gasPrice: 28000009000,
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT,
      },
      deploy: ["./deploy/testnet/"]
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/f26707a0f6e74a44beacf8715eb7ba10",
      gas: 5000000, 
      gasPrice: 1000000060,
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT,
      },
      deploy: ["./deploy/testnet/"]
    },    
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 5,
      gas: 5000000, 
      gasPrice: 2000000600,
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT,
      },
      deploy: ["./deploy/testnet/"]
    },
    opgoerli: {
      // url: "https://goerli.optimism.io",
      url: "https://optimism-goerli.blastapi.io/58212e43-01d6-4a8b-a9ca-7620cefd5974",
      chainId: 420,
      gas: 5000000, 
      gasPrice: 1000000001,
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT,
      },
      deploy: ["./deploy/testnet/"]
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s2.binance.org:8545/",
      chainId: 97,
      gas: 'auto',
      gasPrice: 20000000000,
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT
      },
      deploy: ["./deploy/testnet/"]
    },
    spidextesthk: {
      url: "http://8.210.174.88:8545/",
      chainId: 9333,
      gas: 'auto',
      gasPrice: 1000000001,
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT
      },
      deploy: ["./deploy/testnet/"]
    }
    
  },
  namedAccounts: {
    deployer: {
      3: 0,
      5: 0,
      420: 0,
      80001: 0,
      31337: 0,
      9333: 0
    }
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    // only: [':ERC20$'],
  }
};

