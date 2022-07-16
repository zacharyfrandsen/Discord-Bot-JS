module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: ["CONNECT"],
    cooldown: 2,
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#194973')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);
        
        channel.send(embed).then((msg) =>{
            msg.react('🟩');
            msg.react('🟥');
            message.delete();
        }).catch((err)=>{
            console.log(err);
        });
    }
}