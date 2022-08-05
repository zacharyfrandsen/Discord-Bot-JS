const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  aliases: ['8ball', '8b'],
  cooldown: 2,
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(message, args, cmd, client, Discord) {
    if (!args[0]) return message.channel.send('Please ask a full question!');
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.'];

    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');

    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed()
        .setAuthor('🎱 The 8 Ball says...')
        .setColor('ORANGE').addField('Question:', question)
        .addField('Answer:', replies[result]);
      await message.channel.send(embed);
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`);
    }
  },
};