/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

// API raktas ir pinigines raktas paimamas is .env failo, kuris yra idetas i .gitignore, jog nebutu viesas
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  // solidity versija
  solidity: "0.7.3",
  // Tinklo pavadinimas (testavimui naudoju test network rinkeby)
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      // Per sia vieta komunikuojame su blockchainu
      url: API_URL,
      // Si vieta pasako kas as esu blockchaine
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
