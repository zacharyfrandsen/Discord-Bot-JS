module.exports = {
    name: 'clear',
    aliases: ["cl", "delete"],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Clear Messages!",
    async execute(message, args, cmd, client, Discord) {
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear.");
        if(isNaN(args[0])) return message.reply("Please enter a real number.");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You must delete at least one message.");

        await message.channel.messages.fetch({Limit: ++args[0]}).then(messages =>{
            message.channel.bulkDelete(args[0], true)
        });
    }
}