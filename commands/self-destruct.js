const Discord = require("discord.js");
const index = require('../index')
module.exports = message => {
    index.client.user.setPresence({status: 'invisible'})
    message.channel.send('Killing Script...')
    message.channel.send('_%#%$_**Self Destructing**_%#%$_')
    message.channel.send('**Destroying Client**')
    index.client.destroy()
}