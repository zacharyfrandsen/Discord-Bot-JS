module.exports = {
    name: 'commands',
    description: 'commands',
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('Commands')
            .setThumbnail('https://cdn.discordapp.com/attachments/211641763276783616/862177727620841522/0.6.png')
            .addFields(
                { name: 'Do ! (all lowercase) to execute a command listed below.', value: 'Need Help? Message a administrator.' },
                { name: '\u200B', value: '\u200B' },
                { name: "!twitch", value: 'Follow my Twitch channel', inline: true },
                { name: "!instagram", value: 'Follow my Instagram Page', inline: true },
                { name: "!steam", value: 'Follow my Steam profile', inline: true },
            )
        message.channel.send(newEmbed);
    }
}
