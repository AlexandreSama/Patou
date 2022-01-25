const {Command} = require('discord-akairo')
class marryCommand extends Command {
    constructor() {
        super('marry', {
            aliases: ['marry'],
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