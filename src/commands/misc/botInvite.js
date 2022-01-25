const {Command} = require('discord-akairo')
const Discord = require('discord.js');

class BotInviteCommand extends Command{
    constructor(){
        super('botinvite', {
            aliases: ['botinvite'],
            category: 'Misc',
            description: {
                content: "La commande botinvite renvoi une invitation pour faire rejoindre le bot sur votre serveur",
                usage: 'botinvite',
                examples: ['botinvite']
            }
        })
    }

    exec(message){
        const embedInfos = new Discord.MessageEmbed()
            .setAuthor(this.client.user.username)
            .setColor(0x00A2E8)
            .setTitle('Lien d\'invitation du bot')
            .setDescription('Invite moi avec ce lien : https://discord.com/api/oauth2/authorize?client_id=934928271244656670&permissions=8&scope=bot')
            .setTimestamp()
            .setFooter(this.client.user.username, this.client.user.avatarURL)

            message.channel.send({embeds: [embedInfos]})
    }

}


module.exports = BotInviteCommand