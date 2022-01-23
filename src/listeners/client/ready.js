const {Listener} = require('discord-akairo');
const functions = require('../../util/functions')

class ReadyListener extends Listener{
    constructor(){
        super('ready', {
            emitter: 'client',
            event: 'ready',
        });
    }

    exec(){
        const listeners = functions.getAllListeners('./src/listeners/')
        const commands = functions.getAllCommands('./src/commands/')
        console.log("Démarrage......")
        console.log('Lecture de ' + listeners.length + ' events !')
        console.log('Lecture de ' + commands.length + ' commands !')
        console.log('Prêt a travailler !')
    }
}

module.exports = ReadyListener