module.exports = {
    name: 'reactionrole',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    cooldown: 2,
    description: "Sets up a reaction role message!",
    async execute(message, args, cmd, client, Discord) {
        const channel = '995814539813732374';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "974538860828708874");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "974777808670822491");
        const greenTeamRole = message.guild.roles.cache.find(role => role.name === "995811229731921940");
        
        const yellowTeamEmoji = '🔴';
        const blueTeamEmoji = '🟣';
        const greenTeamEmoji = '⚪';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Which notifications do you want!')
            .setDescription('Choosing a notification list will allow you to interact with the rest of the server!\n\n\n'
                + `${yellowTeamEmoji} for team Youtube\n\n`
                + `${blueTeamEmoji} for team Twitch\n\n`
                + `${greenTeamEmoji} for no notifications but you still want access`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(greenTeamEmoji);
    }
 
}