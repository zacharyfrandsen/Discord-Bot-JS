module.exports = async (client) => {
    const guild = client.guilds.cache.get('829799190510829569');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('865335541225226280');
        channel.setName(`Members : ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 1800000);
}