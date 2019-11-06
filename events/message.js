const Discord = require("discord.js");
const statusSC = require("../commands/statusSC");
const help = require("../commands/help")
const status = require("../commands/status")
const selfd = require("../commands/self-destruct")
const invite = require ("../commands/invite")

module.exports = (client, message) => {
  if (message.content.startsWith("/help")) {
    return help(message);
  }
  if (message.content.startsWith("/status-sc")) {
    return statusSC(message);
  }
  if (message.content.startsWith("/status")) {
    return status(message);
  }
  if(message.content.startsWith("/self-destruct")) {
    return selfd(message)
  }
  if(message.content.startsWith("/invite")) {
    return invite(message)
  }
};
