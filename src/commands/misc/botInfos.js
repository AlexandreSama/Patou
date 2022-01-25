const {Command} = require('discord-akairo')
const Discord = require('discord.js');
const packageJSON = require("../../../package.json");

class BotInfosCommand extends Command{
    constructor(){
        super('botinfos', {
            aliases: ['botinfos'],
            category: 'Misc',
            description: {
                content: "La commande botinfos renvoi des informations sur le bot",
                usage: 'botinfos',
                examples: ['botinfos']
            }
        })
    }

    exec(message){
        const embedInfos = new Discord.MessageEmbed()
            .setAuthor(this.client.user.username)
            .setColor(0x00A2E8)
            .addFields(
                {
                    name: "Mémoire",
                    value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MBS` ,
                    inline: true
                },
                {
                    name: "Latence",
                    value: `${(Date.now() - message.createdTimestamp)} ms`,
                    inline: true
                },
                {
                    name: "Utilisateurs",
                    value: `${this.client.users.cache.size}`,
                    inline: true
                },
                {
                    name: "Serveurs",
                    value: `${this.client.guilds.cache.size}`,
                    inline: true
                },
                {
                    name: "Library",
                    value: `${packageJSON.dependencies["discord.js"]}`,
                    inline: true
                },
                {
                    name: "NodeJS",
                    value: `${process.version}`
                },
                {
                    name: "Version",
                    value: `${packageJSON.version}`
                }
            )
            .setTimestamp()
            .setFooter(this.client.user.username, this.client.user.avatarURL)

            message.channel.send({embeds: [embedInfos]})
    }

}


module.exports = BotInfosCommand