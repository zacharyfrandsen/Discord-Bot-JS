require('dotenv').config();
const fs = require('fs');
const { cooldown } = require('../../commands/music');
const cooldowns = new Map();
module.exports = (client, Discord, message) => {
    const prefix = process.env.PREFIX;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(!command) return client.commands.get('help').execute(message, args, cmd, client, Discord);

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
      ]
    
      if(command.permissions){
        let invalidPerms = []
        for(const perm of command.permissions){
          if(!validPermissions.includes(perm)){
            return console.log(`Invalid Permissions ${perm}`);
          }
          if(!message.member.hasPermission(perm)){
            invalidPerms.push(perm);
          }
        }
        if (invalidPerms.length){
          return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
        }
      }

      client.on('message', message => {
 
        if (!message.content.startsWith(prefix) || message.author.bot) return;
     
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'reactionrole') {
            client.commands.get('reactionrole').execute(message, args, cmd, client, Discord);
        } 
      
    });

    if(!cooldowns.has(command.name)){
      cooldowns.set(command.name, new Discord.Collection());
  }

  const currentTime = Date.now();
  const timeStamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown) * 1000;

  if(timeStamps.has(message.author.id)){
      const expirationTime = timeStamps.get(message.author.id) + cooldownAmount;

      if(currentTime < expirationTime){
          const timeLeft = (expirationTime - currentTime) / 1000;

          return message.reply(`Please wait ${timeLeft.toFixed(1)} more seconds before using ${command.name}`);
      }
  }

  timeStamps.set(message.author.id, currentTime);

  setTimeout(() => timeStamps.delete(message.author.id), cooldownAmount);

  try{
      command.execute(message, args, cmd, client, Discord);
  } catch (err){
      message.reply("There was an error trying to execute this command!");
      console.log(err);
  }

}