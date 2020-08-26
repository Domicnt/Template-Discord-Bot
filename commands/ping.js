module.exports = {
    name: 'ping',
    description: 'Pings the bot.',
    cooldown: 5,
    guildOnly: false,
    
	execute(message, args) {
		message.channel.send('Pong!');
	},
};