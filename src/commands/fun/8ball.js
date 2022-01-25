const {Command} = require('discord-akairo')
const Discord = require('discord.js');

class HeigthBallCommand extends Command{
    constructor(){
        super('8ball', {
            aliases: ['8ball'],
            args: [
                {
                    id: "question", match: 'content'
                }
            ]
        });
    }

    exec(message){
        message.delete()

        var res = ["Oui", "Non", "Peut-être", "Probablement", "A voir", "Surement pas", "Challah", "Miskine", "Starfoullah m'parle pas!", "Mec sort de chez toi !", "Je ne suis qu'une IA , pas une voyante.", "Ca me paraît possible"]

        if(!args.question){ 
            message.channel.send('Posez au moins une question.') 
            return; 
        } 
        // Creates an ambed and picks a random answer from the answer array 
        let embed = new Discord.MessageEmbed() 
        .addField("Question", args.question, true) 
        .addField("Réponse", (res[Math.floor(Math.random() * res.length)]), true) 
        .setColor('42c2f4') 
        message.channel.send({embeds: [embed]}) 
    }

}


module.exports = HeigthBallCommand