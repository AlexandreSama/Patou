const {Command} = require('discord-akairo')
const mysql = require('mysql2');
const config = require('../../util/config.json')

class ConfigCommand extends Command{
    constructor(){
        super('config', {
            aliases: ['configuration', 'config']
        })
    }

    exec(message){
        let authorid = message.author.id;
        const filter = message => message.author.id == authorid;
        let serverID = message.guild.id

        const connection = mysql.createConnection({
            host: config.databaseHost,
            user: config.databaseUsername,
            database: config.databaseName,
            supportBigNumbers: true
        });

        message.author.send(`Bonjour ! Merci de m'avoir ajouté sur votre Discord ! Avant de m'utiliser a plein temps, merci de bien prendre le temps de me configurer :smile:`)

        message.author.send('Pouvez-vous me donnez l\'identifiant du channel de bienvenue (la ou un petit message de bienvenue est envoyé quand une personne arrive !) ? \n Vous pouvez répondre par "?" si vous n\'avez pas ce channel').then(res1 => {
            res1.channel.awaitMessages({filter, max:1}).then(collector1 => {
                let welcomechannelID = collector1.first().content;
                console.log('test 1')

                message.author.send(`Bien ! Maintenant il me faudrait l'identifiant du channel d'adieu (la ou un petit message est envoyé quand une personne part !) ? \n Vous pouvez répondre par "?" si vous n'avez pas ce channel`).then(res2 => {
                    res2.channel.awaitMessages({filter, max:1}).then(collector2 => {
                        let goodbyechannelID = collector2.first().content;
                        console.log('test 2')

                        message.author.send(`Super ! Il ne me manque plus que l'identifiant du channel ou vos utilisateurs pourront ouvrir un ticket !`).then(res3 => {
                            res3.channel.awaitMessages({filter, max:1}).then(collector3 => {
                                let ticketchannelID = collector3.first().content;
                                console.log('test 3')
    
                                message.author.send(`Excellent ! J'inscris tout ca dans mon registre et je vous informe quand cela sera terminer !`)
    
                                connection.query(`INSERT INTO guilds (serverID, welcomechannelID, goodbyechannelID, ticketchannelID) VALUES ("${serverID}", "${welcomechannelID}", "${goodbyechannelID}", "${ticketchannelID}")`, function(err, results){
                                    if(err){
                                        message.author.send(`Oh ! On dirait que quelque chose s'est mal passé :thinking:, pourriez-vous ouvrir un ticket sur le discord de mes créateurs et en discuter avec eux ? Voici le code d'erreur : ` + err.errno)
                                        console.log(err)
                                    }
                                    if(results){
                                        message.author.send(`Votre serveur a bien été enregistré dans mon registre ! Vous pouvez désormais m'utiliser a plein temps :smile:`)
                                    }
                                })
                            })
                        })
                    })
                })

            })
        })
    }

}


module.exports = ConfigCommand