module.exports = async (Discord, client, guildMember, user) => {
let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'RTV');
guildMember.roles.add(welcomeRole);
guildMember.guild.channels.cache.get('995811672600096860').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules!`)
}
