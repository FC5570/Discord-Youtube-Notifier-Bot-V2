const { Client } = require('discord.js');
const client = new Client();
const YoutubeNotifier = require('youtube-notification');
const config = require('./config.json');
const app = require('express')();

client.on('ready', () => {
	console.log(
		`Logged in as ${client.user.tag}\nWatching ${config.youtubeChannels.length} Youtube Channels.`
	);
});

const notifier = new YoutubeNotifier({
	hubCallback: config.hubURI,
	secret: 'can by anything',
});

notifier.on('notified', (data) => {
	console.log(`A new video has been uploaded: ${data.video.link}`);
	client.channels.cache
		.get(config.discordChannel)
		.send(
			`A new video has been uploaded by ${data.channel.name}\n${data.video.link}`
		);
});

notifier.subscribe(config.youtubeChannels);
app.use('/', notifier.listener());

const listener = app.listen(config.port, () => {
	console.log(
		`Youtube Notifier is listening on port ${listener.address().port}`
	);
});

client.login(config.token);
