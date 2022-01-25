const {Command} = require('discord-akairo')
const Discord = require('discord.js');

class KillCommand extends Command {
    constructor() {
        super('kill', {
            aliases: ['meurtre', 'kill', 'tuer']
        });
    }
       
    exec(message) {

        message.delete()

        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            const rando_imgs = [
                
                'https://media.giphy.com/media/xjDXLf8Ad1ZUvmTyqW/giphy.gif',
                'https://media.giphy.com/media/p3ZQAjCrSHIdT12UJ7/giphy.gif',
                'https://media.giphy.com/media/pZc5LYqRzQ8yQ/giphy.gif',
                'https://media.giphy.com/media/1qXKyR92gHKZ0G1WdQ/giphy.gif',
            ]

            let gif = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            let lien =  new Discord.MessageEmbed()
            .setColor('#6100FF')
            .setTitle(message.author.username + "   frappe   " + member.user.username)
            .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic : true}))
            .setImage(gif)
            .setTimestamp()  
            
            message.channel.send({embeds: [lien]})
        }
    }
}

module.exports = KillCommand;
