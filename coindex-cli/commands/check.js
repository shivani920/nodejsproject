const KeyManager = require("../lib/KeyManager").default;
const CryptoAPI = require("../lib/CryptoAPI");

const check = {
  async price(cmd) {
    try {
      KeyManager = new KeyManager();
      const key = KeyManager.getKey();

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = check;
