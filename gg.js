const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require('fs')

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

const PREFIX = 'gg!';

bot.once('ready', () => {
    console.log('GG Bot is online!');
    bot.user.setStatus('online')
    bot.user.setActivity('globalgaming.online│gg!help', { type: 'PLAYING' });
    
})

bot.on('message', message=>{

    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if (command === 'ban') {
        bot.commands.get('ban').execute(message, args);
    }

    if (command === 'kick') {
        bot.commands.get('kick').execute(message, args);
    }

    if (command === 'rules') {
        bot.commands.get('rules').execute(message, args);
    }

    if (command === 'site') {
        bot.commands.get('site').execute(message, args);
    }

    if (command === 'help') {
        bot.commands.get('help').execute(message, args);
    }

    if (command === 'filastrocca') {
        bot.commands.get('filastrocca').execute(message, args);
    }
    
    if (command === 'twitch') {
        bot.commands.get('twitch').execute(message, args);
    }
    
    if (command === 'instagram') {
        bot.commands.get('instagram').execute(message, args);
    }

})

bot.login(process.env.BOT_TOKEN);
