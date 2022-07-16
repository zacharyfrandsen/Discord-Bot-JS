module.exports = {
    name: 'help',
    aliases: ["help", "info"],
    permissions: [],
    cooldown: 2,
    description: "Help",
    async execute(message, args, cmd, client, Discord) {
        let embed = new Discord.MessageEmbed()
        .setColor('#194973')
        .setTitle('HERE IS A LIST OF COMMANDS!')
        .setDescription('Not all commands are avaliable to everyone. Some are restricted to admin use only')
        .addFields([
          {
            name: '!clear  !cl  !delete',
            value: 'Lets you delete up to 100 messages',
            inline: false,
          },
          {
            name: '!music  !play  !stop  !skip',
            value: 'Lets you use the bot as a typical music bot with basic commands',
            inline: false,
          },
          {
            name: '!mute  !unmute',
            value: 'Sets a users role to whatever mute role you have',
            inline: false,
          },
          {
            name: '!reactionrole',
            value: 'Allows the bot to create a reaction role embed in the desired channel',
            inline: false,
          },
          {
            name: '!suggestions   !suggest',
            value: '"!suggest x" will post the suggestion to the suggestion channel',
            inline: false,
          },
          {
            name: '!rules',
            value: 'Will post all of the available server rules',
            inline: false,
          },
        ])
        if ('help') return message.reply(embed);
        }
    }