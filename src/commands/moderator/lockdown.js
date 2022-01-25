const {Command} = require('discord-akairo')

class LockdownCommand extends Command{
    constructor(){
        super('lockdown', {
            aliases: ['ld', 'lockdown'],
            userPermissions: "MANAGE_MESSAGES"
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