const {Command} = require('discord-akairo')
class marryCommand extends Command {
    constructor() {
        super('marry', {
            aliases: ['marry'],
            category: 'Fun',
            description: {
                content: "La commande marry permet de se marier avec quelqu'un (On se retrouve au divorce)",
                usage: 'marry <membre>',
                examples: ['marry @Patou']
            }
        });
    }

    exec(message) {

        message.delete()

        if (message.mentions.users.size < 1) return message.channel.send("Tu ne peut pas te marier a personne") 
        let user = message.mentions.users.first()
        message.channel.send(`Félicitation ${message.author.username} ! Tu viens de te marier avec : ${user}`)
        message.channel.send({files: ['https://i.imgur.com/u67QLhB.gif']})
        
    }
}

module.exports = marryCommand;