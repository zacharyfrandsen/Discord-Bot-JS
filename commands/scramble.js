/*module.exports = {
    name : 'scramble',
    aliases: ['scramble', 'scram'],
    description: 'Attempt to unscramble the given scrambled word',

    execute : async(message, args, cmd, client, Discord) => {
        let words = ['punch', 'superintendent', 'survivor', 'perforate', 'progressive', 'prisoner', 'means', 'settlement', 'revival', 'advance'];
        let word = words[parseInt(Math.random() * words.length)];

        let scrambled = word.split('');
    
        scrambled.sort(() => (Math.random() > .5) ? 1 : -1);

        while(scrambled.join('') == word) scrambled.sort(() => (Math.random() > .5) ? 1 : -1);

        message.channel.send(`Your word is... \`${scrambled.join('')}\`! Unscramble the given word.`);
        
        const filter = msg => msg.author.id == message.author.id;
        
        const collector = message.channel.createMessageCollector({ filter, time: 60000, max: 1 })

        collector.on('collect', async(msg) => {
            if(msg.content.toLowerCase() == word.toLowerCase()) return message.channel.send(`That's correct! Good job!`);
            else return message.channel.send(`That's incorrect. Better luck next time :/`);
        });

        collector.on('end', async(collected) => {
            if(collected.size == 0) message.channel.send(`You timed out! Respond quicker next time.`);
        });
    }
};*/
const { MessageCollector } = require('discord.js');
module.exports = {
    name : 'scramble',
    aliases: ['scramble', 'scram'],
    cooldown: 1,
    description: 'Attempt to unscramble the given scrambled word',

    execute : async(message, args, cmd, client, Discord) => {
        let words = ['punch', 'superintendent', 'survivor', 'perforate', 'progressive', 'prisoner', 'means', 'settlement', 'revival', 'advance'];
        let word = words[parseInt(Math.random() * words.length)];

        let scrambled = word.split('');
    
        scrambled.sort(() => (Math.random() > .5) ? 1 : -1);

        while(scrambled.join('') == word) scrambled.sort(() => (Math.random() > .5) ? 1 : -1);

        message.channel.send(`Your word is... \`${scrambled.join('')}\`! Unscramble the given word.`);
        
        const collector = new MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 60000,
            max: 1,
        });

        collector.on('collect', async(msg) => {
            if(msg.content.toLowerCase() == word.toLowerCase()) return message.channel.send(`That's correct! Good job!`);
            else return message.channel.send(`That's incorrect. Better luck next time :/`);
        });

        collector.on('end', async(collected) => {
            if(collected.size == 0) message.channel.send(`You timed out! Respond quicker next time.`);
        });
    }
};