const {Command} = require('discord-akairo')

class BanCommand extends Command{
    constructor(){
        super('ban', {
            aliases: ["ban"],
            description: {
                content: "La commande permet de bannir un membre de votre serveur",
                usage: "ban <membre> <raison>",
                examples: ["ban @abyo", "ban @abyo Pourquoi pas ?"]
            },
            args: [
                { id: "member", type: 'member'},
                { id: "reason", type: 'string', match: 'restContent'}
            ],
            userPermissions: "BAN_MEMBERS",
            category: 'Moderation',
        });
    }

    exec(message, {member, reason}){
        if(!reason) reason = "Pas de raison spécifié !"
        member ? member.ban({days: 7, reason : reason}) : message.channel.send("L'utilisateur n'existe pas !")
    }
}

module.exports = BanCommand