const Discord = require("discord.js");
module.exports = (client, member) => {
  var attachment = new Discord.Attachment(`./assets/join_survivor_cube.png`)
  member.send(
    `welcome to Survivor Cube! :tada::hugging:`, 
  );
};
