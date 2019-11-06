const Discord = require("discord.js");
module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('/help', {type: 'WATCHING'})
};
