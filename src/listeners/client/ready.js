const {Listener} = require('discord-akairo');
const functions = require('../../util/functions')

class ReadyListener extends Listener{
    constructor(){
        super('ready', {
            emitter: 'client',
            event: 'ready',
        });
    }

    exec(client){
        this.client.user.setPresence({
            activities: [{
                name: 'Mon repo',
                type: 'WATCHING',
            }],
            status: 'dnd'
        })

        console.log(`Prêt a servir ${this.client.guilds.cache.size} serveurs, ${this.client.users.cache.size} utilisateurs et ${this.client.channels.cache.size} salons`)
    }
}

module.exports = ReadyListener