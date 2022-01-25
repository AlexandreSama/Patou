const {Command} = require('discord-akairo')

class BroadcastCommand extends Command{
    constructor(){
        super('broadcast', {
            aliases: ['broadcast', 'bc'],
            ownerOnly: true
        })
    }

    exec(message){
        this.client.guilds.cache.each(guild => {
            try {
                let updateChannel = guild.channels.cache.find(channel => channel.name === "updatePatou")

                if (updateChannel) {
                    updateChannel.permissionOverwrites.create(updateChannel.guild.roles.everyone, {SEND_MESSAGES : false})
                    updateChannel.send(message.content)
                }else{
                    guild.channels.create("updatePatou", {
                        type: "text",
                        topic: "Changelogs de Patou",
                        permissionOverwrites: [{
                            id: guild.roles.everyone,
                            deny: ['SEND_MESSAGES']
                        }]
                    }).then(() => {
                        updateChannel.send(message.content)
                    })
                }
            } catch (error) {
                console.log(error)
            }
        })
    }

}


module.exports = BroadcastCommand