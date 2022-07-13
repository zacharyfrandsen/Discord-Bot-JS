module.exports = {
    name: 'reactionrole',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Sets up a reaction role message!",
    async execute(message, args, cmd, client, Discord) {
        const channel = '995814539813732374';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "@YouTube");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "@Twitch");
        const greenTeamRole = message.guild.roles.cache.find(role => role.name === "Member");
        
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
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}