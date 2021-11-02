const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '_';

client.once('ready', () => {
    console.log('tragicc bot is online!')
});


client.on("message", message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

  if(command === 'ping'){
      message.channel.send('pong!');
  }
})

client.login(process.env.TOKEN)


client.login('OTA0NjU5NTc3MDA4NzE3ODM0.YX-v4g.7x-3DEEqkmEU5QKRloTqfBoqiMM');