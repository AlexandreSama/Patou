const {Command} = require('discord-akairo')

class LockdownCommand extends Command{
    constructor(){
        super('clear', {
            aliases: ['clear'],
            userPermissions: "MANAGE_MESSAGES",
            args: [{
                id: "numberClear", type: "number", match: 'content'
            }]
        })
    }

    exec(message){
        if(!args.numberClear){
            message.channel.send("Tu dois me donner un nombre de messages a supprimer stp !")
        }else{
            message.channel.bulkDelete(args.numberClear);
            message.channel.send("Un membre du staff viens de supprimer : " + args.numberClear + " messages.")
        }
    }

}


module.exports = LockdownCommand