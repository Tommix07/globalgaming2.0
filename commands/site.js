module.exports = {
    name: 'site',
    description: "Sito",
    execute(message, args) {
        const Discord = require('discord.js');
        const siteEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Il sito web ufficiale di Global Gaming 2.0:')
            .addFields(
                { name: 'http://www.globalgaming.online/', value: '‭‭‭‭  ' },
            )
            .setFooter(message.author.username);


        message.reply(siteEmbed);

    }
}
