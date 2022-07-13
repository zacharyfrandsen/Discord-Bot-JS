module.exports = async (client) => {
    const fetch = require('node-fetch');
    const guild = client.guilds.cache.get('829799190510829569');
    setInterval(async() => {
        const youtubeUser = 'UCrapLlygACxb1s_zlhxMbJA';
        const youtubeKey ='AIzaSyBVNphsZ3vPdb7wn4FvWHYN5yg9CGpZ2t8';
        const subscriberCount = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`).then(i => i.json());
        const channel = guild.channels.cache.get('865335655872856144');
        channel.setName(`YouTube : ${subscriberCount.items[0].statistics.subscriberCount.toLocaleString()}`);
        console.log('Updating Subscriber Count');
    }, 3600000);
}