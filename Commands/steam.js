module.exports = {
    name: 'steam',
    description: 'steam link',
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#424242')
            .setTitle('Follow Me On Steam')
            .setURL('https://steamcommunity.com/profiles/76561198094345620/')
            .setDescription('Lets play some games!')
            .setImage('https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/730/4a8b3a4ecf9207f9f66bc7085ba7a9db637ee8a5.gif');
        message.channel.send(newEmbed);
    }
}
