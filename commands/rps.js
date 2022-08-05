const  Discord = require('discord.js')
module.exports = {
    name: "rps",
    aliases: ['rps'],
    cooldown: 1,
    description: "rps command!", 
    async execute (message, args, cmd, client, Discord) {
 let embed = new Discord.MessageEmbed()
 .setTitle("Rock Paper Scissors")
 .setColor("RANDOM")
 .setDescription("React to play")
 .setTimestamp();
 let msg = await message.channel.send(embed)
await msg.react("✊")
await msg.react("✋")
await msg.react("✌️")
const filter = (reaction, user) => {
    return ['✊', '✌️', '✋'].includes(reaction.emoji.name) && user.id === message.author.id;
}
const choices =  ['✊', '✌️', '✋']
const me = choices[Math.floor(Math.random() * choices.length)]
msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
    async(collected) => {
        const reaction = collected.first()
        let Result = new Discord.MessageEmbed()
        .setTitle("Result")
        .setColor("RANDOM")
        .addField("Your choice", `${reaction.emoji.name}`)
        .addField("Bot choice", `${me}`)
        await msg.edit(Result)
        if((me === "✊" && reaction.emoji.name === "✌️") || 
        (me === "✌️" && reaction.emoji.name === "✋") || 
        (me === "✋" && reaction.emoji.name === "✊")) {
            message.reply("You lost!");
        } else if (me === reaction.emoji.name) {
            return message.reply("its a tie!"); 
           
        } else {
            return message.reply("You won!");
        }
        
    })
    }
}