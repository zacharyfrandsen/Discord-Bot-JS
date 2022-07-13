module.exports = {
    name: 'youtube',
    description: 'Youtube Link',
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#a25cb0')
            .setTitle('Follow Me On YouTube!')
            .setURL('https://www.youtube.com/channel/UCrapLlygACxb1s_zlhxMbJA')
            .setDescription('Follow me on my Journey to be the best person alive!')
            .setImage('https://cdn.discordapp.com/attachments/212299208495988746/987459366460485682/Logo-png-Big-Black.png');
        message.channel.send(newEmbed);
    }
}
