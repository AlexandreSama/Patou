const {Command} = require('discord-akairo')

class KickCommand extends Command{
    constructor(){
        super('kick', {
            aliases: ["kick"],
            description: {
                content: "La commande permet d'expulser un membre de votre serveur",
                usage: "kick <membre> <raison>",
                examples: ["kick @abyo", "kick @abyo Pourquoi pas ?"]
            },
            args: [
                { id: "member", type: 'member'},
                { id: "reason", type: 'string', match: 'restContent'}
            ],
            userPermissions: "KICK_MEMBERS",
            category: 'Moderation',
        });
    }

    exec(message, {member, reason}){
        if(!reason) reason = "Pas de raison spécifié !"
        member ? member.kick(reason) : message.channel.send("L'utilisateur n'existe pas !")
    }
}

module.exports = KickCommand