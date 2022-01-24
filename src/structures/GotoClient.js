const {AkairoClient, CommandHandler, ListenerHandler} = require('discord-akairo')

module.exports = class GotoClient extends AkairoClient {
    constructor(config = {}){
        super(
            {ownerID: '256892994504884224'},
            {
                allowedMentions: {
                    parse: ['roles', 'everyone', 'users'],
                    repliedUser: true
                },
                partials: ['CHANNEL', 'GUILD_MEMBER', 'GUILD_SCHEDULED_EVENT', 'MESSAGE', 'REACTION', 'USER'],
                presence: {
                    status: 'dnd',
                    activities: [{
                        name: 'some stuff',
                        type: 'WATCHING',
                        url: 'https://github.com/AlexandreSama/Patou'
                    }]
                },
                intents: 32767
            }
        );

        this.CommandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: config.prefix,
            defaultCooldown: 2000,
            directory: './src/commands/'
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners/',
        })

        this.CommandHandler.loadAll();
        this.CommandHandler.useListenerHandler(this.listenerHandler)
        this.listenerHandler.loadAll()
    }
}