const Discord = require("discord.js");
module.exports = message => {
  var helpmsg = 'Thank you for using __**/help**__!\n\n'
  helpmsg += '__**/help**__ - shows this list\n'
  helpmsg += '__**/status**__ {ip} - shows the status of the minecraft server, add " fr" at the end to use french message\n'
  helpmsg += '__**/status-sc**__ - shows the status of the Survivor Cube Minecraft Server, add " fr" at the end to use french message\n'
  helpmsg += '__**/status-mineria**__ - shows the status of the Mineria Minecraft Server, add " fr" at the end to use french message\n'
  helpmsg += '__**/invite**__ - sends a invite link to add the bot to your own server\n'
  return message.channel.send(helpmsg)
};//science
