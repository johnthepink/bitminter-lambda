# bitminter-lambda

Uses the Bitminter API to check the hash rate of a user. Then, it posts that data to a Telegram bot.

```
./node_modules/.bin/node-lambda run
```

## Usage

There are 3 available commands.

```
./node_modules/.bin/node-lambda setup
./node_modules/.bin/node-lambda run
./node_modules/.bin/node-lambda deploy
```

## Install

```
git clone https://github.com/johnthepink/bitminter-lambda.git
cd bitminter-lambda
npm install
```

## Variables

```
BITMINTER_URL
BITMINTER_KEY
TELEGRAM_ID
TELEGRAM_BOT_KEY
```
