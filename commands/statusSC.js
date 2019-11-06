const Discord = require("discord.js");
const index = require('../index')
module.exports = message => {
  index.client.user.setAvatar('./assets/profile_sc.png')
  const request = require('request')
  const ip = 'mc3.craftyourserv.net'
  const port = '30068'
  if (message.content === '/status-sc') {
    var url = 'https://mcapi.us/server/status?ip=' + ip + '&port=' + port
    var plrurl = 'https://api.minetools.eu/ping/' + ip + '/' + port
    request(url, function(err, response, body) {
      if(err) {
        console.log(err);
        return message.reply('Error getting Minecraft server status...');
      }
      body = JSON.parse(body);
      var status = ['offline'];
      if(body.online) {
        status[0] = '✅ **Online** ✅';
        status[1] = body.server.name
        var motd = body.motd
        motd = motd.replace(/§4/g, '');
        motd = motd.replace(/§c/g, '');
        motd = motd.replace(/§6/g, '');
        motd = motd.replace(/§e/g, '');
        motd = motd.replace(/§2/g, '');
        motd = motd.replace(/§a/g, '');
        motd = motd.replace(/§b/g, '');
        motd = motd.replace(/§3/g, '');
        motd = motd.replace(/§1/g, '');
        motd = motd.replace(/§9/g, '');
        motd = motd.replace(/§d/g, '');
        motd = motd.replace(/§5/g, '');
        motd = motd.replace(/§f/g, '');
        motd = motd.replace(/§7/g, '');
        motd = motd.replace(/§8/g, '');
        motd = motd.replace(/§0/g, '');
        motd = motd.replace(/§l/g, '');
        motd = motd.replace(/§m/g, '');
        motd = motd.replace(/§n/g, '');
        motd = motd.replace(/§o/g, '');
        motd = motd.replace(/§r/g, '');
        status[2] = motd
        status[3] = body.players.now
        status[4] = body.players.max
        var plrlist = ''
        request(plrurl, function(err, response, body) {
          body = JSON.parse(body);
          body.players.sample.forEach(plrdata => {
            plrlist += '- ' + plrdata.name + '\n'
            console.log(plrlist)
          })
          console.log('|' + plrlist + '|')
          if (plrlist === '') {
            if(status[3] === 0){
              plrlist = 'No Players are Online!'
            }else{
              plrlist = '__Information Overloaded__'
            }
          }
          var embed = new Discord.RichEmbed()
            .setColor([0, 175, 0])
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle('**Server Status of __[Survivor Cube]__**')
            .setThumbnail(index.client.user.avatarURL)
            .addBlankField()
            .addField('**Status**', status[0], true)
            .addField('__**[Survivor Cube]**__', 'ip: ' + ip + '\n port: ' + port + '\n\n' + status[2], true)
            .addBlankField()
            .addField('**Server Software**', status[1], true)
            .addField('**Players**', status[3] + '/' + status[4] + ' players online', true)
            .addField('**List of Players**', plrlist, true)
            .setFooter('Status Report By ' + index.client.user.tag, index.client.user.avatarURL)
          return message.channel.send(embed)
        });
      }
      if (body.status === 'error') {
        return message.channel.send('❌ ' + body.error + '❌')
      }
      if (status[0] === 'offline') {
        return message.channel.send('__**Survivor Cube**__ is **Offline**')
      }
    });
  }
};
