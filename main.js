const Discord = require('discord.js');
const cheerio = require ('cheerio');
const fetch = require('node-fetch');
const ms = require('ms');
const fs = require('fs');
const canvas = require('canvas');
const dotenv = require('dotenv').config();
const rpc = require("discord-rpc");
const clientrpc = new rpc.Client({ transport: 'ipc' });
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

client.login(process.env.TOKENONE);

client.on('ready', () => {
	memberCounter(client);
	youtubeSubscriber(client);
	youtubeView(client);
	pid: process.pid,
	client.user.setActivity(
		details = config.Details, { type: "WATCHING", url: "https://discord.gg/cBhy7hzrTB" },
		state = config.State,
		large_Text = config.LargeImageText,
		large_Image = config.LargeImage,
		label = config.Button1,
		url = config.Url1
	)
})
