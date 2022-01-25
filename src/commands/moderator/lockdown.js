const {Command} = require('discord-akairo')

class LockdownCommand extends Command{
    constructor(){
        super('lockdown', {
            aliases: ['lock'],
            userPermissions: "MANAGE_MESSAGES",
            category: 'Moderation',
            description: {
                content: "La commande lock permet de fermer un salon aux utilisateurs",
                usage: 'lock',
                examples: ['lock']
            }
        })
    }

    exec(message){
        if(message.channel.permissionOverwrites.get(message.guild.roles.everyone) && message.channel.permissionOverwrites.get(message.guild.roles.everyone).SEND_MESSAGES === false){
            message.channel.permissionOverwrites.create(message.guild.roles.everyone, { SEND_MESSAGES: true });
            message.channel.send("Le salon est a nouveau ouvert !")
        }else{
            message.channel.permissionOverwrites.create(message.guild.roles.everyone, { SEND_MESSAGES: false });
            message.channel.send("Le salon est désormais fermé ! \n Raison de cet fermeture : " + message.content)
        }
    }
}


module.exports = LockdownCommand