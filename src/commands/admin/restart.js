const {Command} = require('discord-akairo')

class RestartCommand extends Command{
    constructor(){
        super('restart', {
            aliases: ['restart'],
            ownerOnly: true,
            category: 'Administration/Owner',
            description: {
                content: "La commande restart permet a mes créateurs de me relancer",
                usage: 'restart',
                examples: ['restart']
            }
        })
    }

    exec(message){
        require('child_process').execSync('pm2 restart 0')
    }

}


module.exports = RestartCommand