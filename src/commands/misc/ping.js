const {Command} = require('discord-akairo')

class PingCommand extends Command{
    constructor(){
        super('ping', {
            aliases: ['ping'],
            category: 'Misc',
            description: {
                content: "La commande ping est ... inutile ?",
                usage: 'ping',
                examples: ['ping']
            }
        })
    }

    exec(message){
        return message.reply('pong!')
    }

}


module.exports = PingCommand