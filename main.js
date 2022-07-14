const Discord = require('discord.js');
const cheerio = require ('cheerio');
const fetch = require('node-fetch');
const ms = require('ms');
const fs = require('fs');
const dotenv = require('dotenv').config();
const {Client, MessageEmbed} = require("discord.js");
const bot = new Client();
const config = require("./config.json");
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const memberCounter = require(`./counters/memberCounter`)
const youtubeView = require(`./counters/youtubeView`)
const youtubeSubscriber = require(`./counters/youtubeSubscriber`)

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
	memberCounter(client);
	youtubeSubscriber(client);
	youtubeView(client);
	client.user.setActivity("Darling In The Franxx", { type: "WATCHING", url: "https://discord.gg/cBhy7hzrTB" })
})