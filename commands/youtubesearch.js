const yts = require('yt-search');

module.exports = {
    name: 'youtubesearch',
    aliases: ['yt', 'search', 'youtube'],
    cooldown: 3,
    description: "Search on YouTube",
    async execute(message, args, cmd, client, Discord) {
        if (!args.length) return message.reply('No search query given')
        const searched = await yts.search(args.join(' '));
        message.reply(!searched.videos.length ? 'No Results' : searched.videos[0].url);
    }
}