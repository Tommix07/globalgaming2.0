﻿module.exports = {
    name: 'help',
    description: "Help",
    execute(message, args) {
    const Discord = require('discord.js');
        if (!args.length) {
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Comandi per Global Gaming 2.0 (bot):')
                .addFields(
                    { name: 'Moderazione', value: '‭‭gg!help mod' },
                    { name: 'gg!site', value: 'Sito web ufficiale di Global Gaming 2.0', inline: true },
                    { name: 'gg!rules', value: 'Regolamento', inline: true },
                    { name: 'gg!filastrocca', value: 'Provalo...', inline: true },
                    { name: 'gg!twitch', value: 'Twitch ufficiale di Global Gaming', inline: true },
                    { name: 'gg!instagram', value: 'Pagina Instagram ufficiale di Global Gaming', inline: true },
                )
                .setFooter(message.author.username);


            message.reply(helpEmbed);

        } else if (args[0] === 'mod') {

            const helpModEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Comandi per Global Gaming 2.0 (bot):')
                .addFields(
                    { name: 'Moderazione', value: '‭‭ ' },
                    { name: 'gg!ban', value: 'Per bannare un utente dal server', inline: true },
                    { name: 'gg!kick', value: 'Per kickare un utente dal server', inline: true },
                )
                .setFooter(message.author.username);


            message.reply(helpModEmbed);
        }
    }
}
