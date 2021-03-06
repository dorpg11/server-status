const Discord = require("discord.js")
const index = require('../index')
const IsThereAIP = true
const fs = require("fs")
const unix = require('../assets/unix')
const unixFr = require('../assets/unix_français')
const request = require('request')
function fetchSendEn(ip_, port_, url_, message_) {
  request(url_, function (err, response, body) {
    if (err) {
      console.log(err);
      return message_.reply('Error getting Minecraft server status...');
    }
    body = JSON.parse(body);
    var status = ['offline'];
    if (body.online) {
      status[0] = '✅ **Online** ✅';
      status[1] = body.server.name
      var motd = body.motd.split('§')
      var e = 0
      for (e = 1; e < motd.length; e++) {
        motd[e] = motd[e].slice(1)
      }
      motd = motd.join('')
      status[2] = motd
      status[3] = body.players.now
      status[4] = body.players.max
      status[5] = body.last_updated
      status[6] = body.last_online
      status[7] = body.duration
      var embedEn = new Discord.RichEmbed()
        .setColor([0, 175, 0])
        .setAuthor(message_.author.tag, message_.author.avatarURL)
        .setTitle('**Server Status of __[Mineria]__**')
        .setThumbnail(index.client.user.avatarURL)
        .addBlankField()
        .addField('**Status**', status[0], true)
        .addField('__**[Mineria]**__', 'ip: ' + ip_ + '\n port: ' + port_ + '\n\n' + status[2], true)
        .addBlankField()
        .addField('**Server Software**', status[1], true)
        .addField('**Players**', status[3] + '/' + status[4] + ' players online', true)
        .addField('**Last Updated**', unix(status[5]))
        .setFooter('Status Report By ' + index.client.user.tag, index.client.user.avatarURL)
      return message_.channel.send(embedEn)
    }
    if (body.status === 'error') {
      return message_.channel.send('❌' + body.error + '❌')
    }
    if (status[0] === 'offline') {
      return message_.channel.send('__**Mineria**__ is **Offline**')
    }
  });
}
function fetchSendFr(ip_, port_, url_, message_) {
  request(url_, function (err, response, body) {
    if (err) {
      console.log(err);
      return message_.reply("Erreur lors de l'obtention de l'état du serveur Minecraft ...");
    }
    body = JSON.parse(body);
    var status = ['offline'];
    if (body.online) {
      status[0] = '✅ **En Ligne** ✅';
      status[1] = body.server.name
      var motd = body.motd.split('§')
      var e = 0
      for (e = 1; e < motd.length; e++) {
        motd[e] = motd[e].slice(1)
      }
      motd = motd.join('')
      status[2] = motd
      status[3] = body.players.now
      status[4] = body.players.max
      status[5] = body.last_updated
      status[6] = body.last_online
      status[7] = body.duration
      var embedEn = new Discord.RichEmbed()
        .setColor([0, 175, 0])
        .setAuthor(message_.author.tag, message_.author.avatarURL)
        .setTitle('**État du serveur de __[Mineria]__**')
        .setThumbnail(index.client.user.avatarURL)
        .addBlankField()
        .addField('**Statut**', status[0], true)
        .addField('__**[Mineria]**__', 'ip: ' + ip_ + '\n port: ' + port_ + '\n\n' + status[2], true)
        .addBlankField()
        .addField('**Logiciel Serveur**', status[1], true)
        .addField('**Joueurs**', status[3] + '/' + status[4] + ' Joueurs en Ligne', true)
        .addField('**Dernière mise à jour**', unixFr(status[5]))
        .setFooter('Rapport de situation par ' + index.client.user.tag, index.client.user.avatarURL)
      return message_.channel.send(embedEn)

    }
    if (body.status === 'error') {
      return message_.channel.send('❌' + body.error + '❌')
    }
    if (status[0] === 'offline') {
      return message_.channel.send('__**Mineria**__ est **Déconnecté**')
    }
  });
}

module.exports = message => {
  const request = require('request')
  var ip = ''
  var port = ''
  fs.readFile('./IPM.txt', 'UTF8', function (err, buf) {
    ip = buf
    fs.readFile("./PORTM.txt", 'UTF8', function (err, buf) {
      const prefix = '/status-mineria '
      var args = message.content.slice(prefix.length).split(' ');
      if (IsThereAIP === false) {
        return message.channel.send("Désolé, mais le serveur n'a pas envore d'IP | Sorry, but the server doesn't have an IP at the moment")
      } else if (args[0] === 'fr') {
        console.log(args)
        port = buf
        var url = 'https://mcapi.us/server/status?ip=' + ip + '&port=' + port
        fetchSendFr(ip, port, url, message)
      } else {
        console.log(args)
        port = buf
        var url = 'https://mcapi.us/server/status?ip=' + ip + '&port=' + port
        console.log(url)
        fetchSendEn(ip, port, url, message)
      }
    })
  })
};
