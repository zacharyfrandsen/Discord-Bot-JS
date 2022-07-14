module.exports = {
    name: 'help',
    aliases: ["help", "info"],
    permissions: [],
    cooldown: 2,
    description: "Help",
    async execute(message, args, cmd, client, Discord) {
        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('HERE IS A LIST OF COMMANDS!')
        .addFields([
          {
            name: '!clear  !cl  !delete',
            value: 'Lets you delete up to 100 messages',
            inline: true,
          },
          {
            name: '!music  !play  !stop  !skip',
            value: 'Lets you use the bot as a typical music bot with basic commands',
            inline: true,
          },
          {
            name: '!mute  !unmute',
            value: 'Sets a users role to whatever mute role you have',
            inline: true,
          },
          {
            name: '!reactionrole',
            value: 'Allows the bot to create a reaction role embed in the desired channel',
            inline: true,
          },
        ])
        if ('help') return message.reply(embed);
        }
    }