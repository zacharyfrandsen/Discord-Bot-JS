module.exports = async (client) => {

    const fetch = require('node-fetch');
    const numeral = require('numeral');
    const guild = client.guilds.cache.get('829799190510829569');

    setInterval(async() => {
        const youtubeUser = 'UCrapLlygACxb1s_zlhxMbJA';
        const youtubeKey = 'AIzaSyBvs73RC9ijLpesTGHRx1JVCBPWFlPFkrQ';
        const subscriberCount = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`).then(i => i.json());
        const channel = guild.channels.cache.get('865335655872856144');
        channel.setName(`YouTube : ${subscriberCount.items[0].statistics.subscriberCount.toLocaleString()}`);
    }, 360000);
}

// http://numeraljs.com