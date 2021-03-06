module.exports = {
    name: 'mute',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    cooldown: 2,
    description: "This mutes a member",
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }

        } else {
            message.channel.send('Cant find that member!');
        }
    }
}