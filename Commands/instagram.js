module.exports = {
    name: 'instagram',
    description: 'instagram link',
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#FAA2B0')
            .setTitle('Follow Me On Instagram')
            .setURL('https://www.instagram.com/zacharyfrandsen/')
            .setDescription('Follow my instagram to get a more personal look into my life.')
            .setImage('https://cdn.discordapp.com/attachments/212299208495988746/987459366460485682/Logo-png-Big-Black.png');
        message.channel.send(newEmbed);
    }
}
