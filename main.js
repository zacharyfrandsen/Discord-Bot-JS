const Discord = require('discord.js');
const cheerio = require ('cheerio');
const fetch = require('node-fetch');
const ms = require('ms');
const fs = require('fs');
const dotenv = require('dotenv').config();
const {Client, MessageEmbed} = require("discord.js");
const bot = new Client();
const config = require("./config.json");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const memberCounter = require(`./Counters/memberCounter`)
const youtubeView = require(`./Counters/youtubeView`)
const youtubeSubscriber = require(`./Counters/youtubeSubscriber`)

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'RTV');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('995811672600096860').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules!`)
});

client.on('messageReactionAdd', async (reaction, user) => {
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

});

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
	memberCounter(client);
	youtubeSubscriber(client);
	youtubeView(client);
	client.user.setActivity('Darling In The Franxx', {type: 'WATCHING'}).catch(console.error);
})