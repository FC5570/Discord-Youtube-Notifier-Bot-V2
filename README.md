# Discord-Youtube-Notifier-Bot-V2

A bot which notifies your server when a mentioned channel uploads a video. Much faster than the previous bot. Please make sure to star the repo if it helped you.

## Setup

1. Fill all the necessary details in the `config.json` file. Read below for more info about the config.

2. Install all the dependencies using `npm i` or `npm install`.

3. Start the bot using `node index.js`

## Configuration

1. `token`: The discord bot token. Can be found [here](https://discord.com/developers)

2. `youtubeChannels`: An array of youtube channels to listen to for new videos. Any new videos uploaded on these channels will be posted in the Discord Channel.

3. `discordChannel`: The Discord Channel ID to send notifications to.

4. `hubURI`: Your ip/domain name that will be used as a callback URL by Pubsubhubbub. It must be in a URL format, example: 'https://example.com/'. If you don't have a domain, you can use `http://ip:port`` as the hubURI.

5. `port`: The port the pubsubhubbub server will listen on.

### If you need any help, please contact me on Discord: FC#5104.
