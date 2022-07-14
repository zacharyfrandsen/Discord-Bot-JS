module.exports = async (Discord, client, reaction, user) => {
	const channel = '995814539813732374';
	const yellowTeamRole = reaction.message.guild.roles.cache.find(role => role.name === "@YouTube");
	const blueTeamRole = reaction.message.guild.roles.cache.find(role => role.name === "@Twitch");
	const greenTeamRole = reaction.message.guild.roles.cache.find(role => role.name === "Member");
	const yellowTeamEmoji = '🔴';
	const blueTeamEmoji = '🟣';
	const greenTeamEmoji = '⚪';
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
    }
