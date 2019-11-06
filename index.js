require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const request = require('request')
module.exports.client = client;
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.login('NjM4MDAzMjA5NDg2NTk4MTQ0.XbWdYA.yt9w1U2nS6a9FOixKY3r_SnZ958');
