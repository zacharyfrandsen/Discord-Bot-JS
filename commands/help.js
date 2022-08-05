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
          {
            name: '!youtube  !search  !yt',
            value: 'Will search youtube for specified video and post it',
            inline: false,
          },
          {
            name: '!embed  !em',
            value: 'Will post a embed. Format -> !embed (One word title) (Color in all caps or hex code) (Description)',
            inline: false,
          },
          {
            name: '!avatar  !pfp  !profilepic  !icon',
            value: 'Will post your current discord profile picture (Even a gif)',
            inline: false,
          },
          {
            name: '!8ball  !8b',
            value: 'The 8ball will decide your fate',
            inline: false,
          },
          {
            name: '!rps',
            value: 'Rock Paper Scissors',
            inline: false,
          },
          {
            name: '!scramble  !scram',
            value: 'Scrambles a word and you have to try and guess it',
            inline: false,
          },
          {
            name: '!urban',
            value: 'Searches Urban Dictionary',
            inline: false,
          },
          {
            name: '!mc  !mcserver  !server',
            value: 'Searches ip for minecraft server',
            inline: false,
          },
        ])
        if ('help') return message.reply(embed);
        }
    }