const Discord = require("discord.js");
module.exports = message => {
  var helpmsg = 'Thank you for using **/help**!\n\n'
  helpmsg += '*/help* - shows this list\n'
  helpmsg += '*/status* {ip} - shows the status of the minecraft server\n'
  helpmsg += '*/status-sc* - shows the status of the Survivor Cube Minecraft Server\n'
  helpmsg += '*/invite* - sends a invite link to add the bot to your own server\n'
  return message.channel.send(helpmsg)
};//science