const util = require('minecraft-server-util');
 
module.exports = {
    name: 'mcserver',
    aliases: ['mc', 'minecraft', 'minecraftserver', 'mcserver', 'server'],
    cooldown: 5,
    description: 'get information about a minecraft server',
    execute(message, args, cmd, client, Discord){
        if(!args[0]) return message.channel.send('Please enter a minecraft server ip');

        util.status(args[0]).then((response) =>{
            const embed = new Discord.MessageEmbed()
            .setColor('#194973')
            .setTitle('Mc Server Status')
            .addFields(
                {name:"Server IP", value: args[0]},
                {name:"Server Version", value: `${response.version.name}`},
                {name:"Players Online", value:`${response.players.online}`},
                {name:"Max Players", value:`${response.players.max}`},
                {name:"MOTD", value:`${response.motd.clean}`},
                {name:"Latency", value:`${response.roundTripLatency}`},
             )
            .setFooter('Mc server util by zach#0293');
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
    }
}