const {Command} = require('discord-akairo')

class IntraServerCommand extends Command{
    constructor(){
        super('intraserver', {
            aliases: ['intraserver', 'it'],
            userPermissions: 'ADMINISTRATOR',
            category: 'Support',
            description: {
                content: "La commande intraserver permet d'ouvrir un ticket entre le/les propriétaire(s) d'un serveur et mes créateurs sans avoir besoin de rejoindre leur discord",
                usage: 'intraserver',
                examples: ['intraserver']
            }
        })
    }

    exec(message){

        let firstServer = this.client.guilds.cache.find(guild => guild.name === "Stream Place")
        let secondServer = this.client.guilds.cache.get(message.guild.id)

        let firstChannelLastMessage
        let secondChannelLastMessage

        firstServer.channels.create("ticket-de-" + secondServer.id).then(channel => {
            let category = firstServer.channels.cache.find(c => c.name == "intra-server" && c.type == "GUILD_CATEGORY")
            if(!category){
                message.channel.send('Impossible de crée un ticket ! Vérifier que vous ayez bien une catégorie "intra-server"')
            }
            channel.setParent(category.id)
            channel.send("Hey <@537619289960873985> et <@256892994504884224> ! Un certain " + message.author.username + " Vous réclament une audience ! Bonne conversation :smile:")
        })

        secondServer.channels.create("ticket-ouvert").then(channel => {
            let category = secondServer.channels.cache.find(c => c.name == "intra-server" && c.type == "GUILD_CATEGORY")
            if(!category){
                message.channel.send('Impossible de crée un ticket ! Vérifier que vous ayez bien une catégorie "intra-server"')
            }
            channel.setParent(category.id)
            channel.send("Hey <@" + message.author.id + "> ! Tu peut commencer la conversation ici par un bonjour :smile:")
        })

        setInterval(function(){
            let firstChannelNewMessage = firstServer.channels.cache.find(c => c.name == "ticket-de-" + secondServer.id && c.type == "GUILD_TEXT").lastMessage
            let secondChannelNewMessage = secondServer.channels.cache.find(c => c.name == "ticket-ouvert" && c.type == "GUILD_TEXT").lastMessage
            let firstChannel = firstServer.channels.cache.find(c => c.name == "ticket-de-" + secondServer.id && c.type == "GUILD_TEXT")
            let secondChannel = secondServer.channels.cache.find(c => c.name == "ticket-ouvert" && c.type == "GUILD_TEXT")

            if(firstChannelNewMessage.content == firstChannelLastMessage || firstChannelNewMessage.author.bot == true || firstChannelNewMessage.content == null){

            }else{
                secondServer.channels.cache.find(c => c.name == "ticket-ouvert").send("**" + firstChannelNewMessage.author.username + "**" + " : *" + firstChannelNewMessage.content + "*")
                firstChannelLastMessage = firstChannelNewMessage.content
            }

            if(secondChannelNewMessage.content == secondChannelLastMessage || secondChannelNewMessage.author.bot == true || secondChannelNewMessage.content == null){

            }else{
                firstServer.channels.cache.find(c => c.name == "ticket-de-" + secondServer.id).send("**" + secondChannelNewMessage.author.username + "**" + " : *" + secondChannelNewMessage.content + "*")
                secondChannelLastMessage = secondChannelNewMessage.content
            }

            if(firstChannelNewMessage.content.toLowerCase() === "fin de transmission"){
                firstChannel.delete("Fin de transmission avec le serveur").then(res => {
                    message.author.send("Fin de transmission avec mes créateurs, bonne journée/soirée !")
                    secondChannel.delete('Fin de transmission avec mes créateurs !')
                })
            }
        }, 5000)
    }

}


module.exports = IntraServerCommand