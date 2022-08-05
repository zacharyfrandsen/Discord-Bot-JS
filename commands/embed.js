const Discord = require('discord.js')
const { execute } = require('./youtubesearch')

module.exports = {
    name: "embed",
    aliases: ["embed", "em"],
    cooldown: 2,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "make embed",

    async execute(message, args, cmd, client, Discord){
        if(!message.member.hasPermission('MANNAGE_MESSAGES')) return
        let title = args[0]
        let color = args[1] 
        let description = args.slice(2).join(" ")
        const error = new Discord.MessageEmbed() 
        .setColor('RANDOM')
        .setTitle('**❌ERROR INVALID ARGS**')
        .setDescription('`{prefix}embed, title(one word), color(hex code or basic colors in caps; i.e(YELLOW), description(embed body))`')

        if(!title) return message.channel.send(error)
        if(!color) return message.channel.send(error)
        if(!description) return message.channel.send(error)


        const embed = new Discord.MessageEmbed()
        .setTitle(`**${title}**`)
        .setColor(color)
        .setDescription(description)
        .setFooter(`Embed created by ${message.author.username}`)
        message.delete()

        message.channel.send(embed)
    }
}