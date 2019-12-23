const Discord = require("discord.js");
module.exports = message => {
    message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=638003209486598144&permissions=0&scope=bot')
};