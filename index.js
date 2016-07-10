const fetch = require("node-fetch");
const TelegramBot = require('node-telegram-bot-api');

const request_url = process.env.BITMINTER_URL;
const api_key = process.env.BITMINTER_KEY;
const telegram_id = process.env.TELEGRAM_ID;
const telegram_key = process.env.TELEGRAM_BOT_KEY;

const bot = new TelegramBot(telegram_key);

const options = {
  headers: {
    'User-Agent': 'app',
    'Authorization': `key=${api_key}`,
  },
  timeout: 5000
};

const formatHash = (hash_rate) => {
  const str = String(Number(hash_rate) / 1000);
  return `${str} ghps`;
};

exports.handler = (event, context, callback) => {

  fetch(request_url, options)
    .then(response => response.json())
    .then(data => data.hash_rate)
    .then((hash_rate) => {
      if (Number(hash_rate) === 0) {
        bot.sendMessage(telegram_id, formatHash(hash_rate))
          .then(() => { callback(null, hash_rate) })
          .catch(error => callback(error))
        ;
      } else {
        callback(null, hash_rate);
      }
    })
    .catch(error => callback(error))
  ;
}
