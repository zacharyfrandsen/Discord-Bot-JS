module.exports = {
    name: 'rules',
    aliases: ["rules"],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    cooldown: 10,
    description: "Rules Embed",
    async execute(message, args, cmd, client, Discord) {
        let embed = new Discord.MessageEmbed()
        .setColor('#194973')
        .setTitle('SERVER RULES')
        .addFields([
          {
            name: '1. Please be respectful',
            value: 'Racism, sexism, discrimination, harassment will not be tolerated.',
            inline: false,
          },
          {
            name: '2. Sexual misconduct',
            value: 'Do not discuss or post adult/NSFW content unless in the respected channel.',
            inline: false,
          }, 
          {
            name: '3. Do not @ mention for unnecessary reasons',
            value: 'Do not spam tag or ghost tag.\nDo not abuse @ mentions.',
            inline: false,
          },
          {
            name: '4. Do not create controversy',
            value: 'Be mindful of others when talking about controversial topics (Ex. Politics, Religion, suicidal thoughts or jokes, etc.)',
            inline: false,
          },
          {
            name: '5. Advertising',
            value: "Do not post video or links in an attempt to advertise unless in a specified channel. This includes links for yourself or others. This also includes DM advertising which is against Discord's ToS and will result in a ban.",
            inline: false,
          },
          {
            name: '6. Do not spam/flood chat',
            value: 'Do not shitpost and do not post messages that are generally useless (staff discretion.)\nDo not copy and paste messages.\nDo not line break (spread your messages out in separate lines.)',
            inline: false,
          },
          {
            name: '7. Use appropriate channels',
            value: 'Try not to use certain commands in any channel. Be mindful of what you are wanting to do with each command.',
            inline: false,
          },
          {
            name: '8. Slander and/or Defamation',
            value: "Do not slander or defame people. Do not post a message with the intent of hurting another member's reputation.",
            inline: false,
          },
          {
            name: '9. Voice Calls',
            value: 'Do not make loud, annoying or obnoxious noises in voice calls.\nDo not play inappropriate songs.\nDo not make others uncomfortable in calls.\nBe mature in all calls.',
            inline: false,
          },
          {
            name: 'Always Follow Discord Terms of Service (TOS)',
            value: 'https://discordapp.com/terms\n\nThe examples given are guides to help with understanding the rule and are not everything that follows under the rule.\n\nRule interpretation and final verdicts are at the discretion of the staff team. If a staff member tells you to stop, please stop.\n\nThe staff team reserves the right to remove messages or users from the server that are detrimental to discussions or the community.\n\nIgnoring the rules is not an excuse for breaking them.',
            inline: false,
          },
        ])
        if ('help') return message.reply(embed);
        }
    }