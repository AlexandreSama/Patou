const {Listener} = require('discord-akairo');
const mysql = require('mysql2');
const config = require('../../util/config.json')

class GuildMemberAddListener extends Listener{
    constructor(){
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd',
        });
    }

    exec(member){

        const connection = mysql.createConnection({
            host: config.databaseHost,
            user: config.databaseUsername,
            database: config.databaseName,
            supportBigNumbers: true
        });

        connection.query(`SELECT welcomechannelID FROM guilds WHERE serverID = ` + member.guild.id, function(err, results){
            if(err){
                console.log(err)
                member.guild.fetchOwner().then((user) => {
                    user.send('On dirait que vous avez un souci avec votre configuration :thinking: \n Veuillez correctement me configurer ou ouvrez un ticket sur le discord de mes créateurs !')
                })
            }
            if(results){
                console.log(results[0])
                let welcomeChannel = member.guild.channels.cache.get(results[0]["welcomechannelID"])
                welcomeChannel.send(`Bienvenue a toi ` + member.user.username)
            }
        })

    }
}

module.exports = GuildMemberAddListener