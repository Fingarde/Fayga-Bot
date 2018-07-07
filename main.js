
const Discord = require('discord.js');
const client = new Discord.Client();
const version = 'v1'
const prefix = ';'

const games = ['fortnite', 'minecraft', 'osu', 'csgo', 'lol']


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity(`${prefix}help`)
})

client.on('message', msg => {
    if(!msg.content.startsWith(prefix)) return

    let member = msg.member

    let args = msg.content.split(" ")

    cmd = args[0].substring(1 , args[0].length)
    
    switch (cmd) {
        case 'help':

        const embed = new Discord.RichEmbed()
            .setTitle(`Fayga help >>`)
            .setColor(0x00AE86)
            .setFooter(`Fayga Bot - Author : Fingarde` , client.user.avatarURL)

            .setTimestamp()

            .addField(`${prefix}help`,'Afficher toutes les commandes.')
            .addField(`${prefix}bots`,'Afficher touts les bots.')
            .addField(`${prefix}game [jeu]`,'Vous accorde l\'accès a différents salons.')
            .addField(`${prefix}streamer`,'Vous accorde une petite chose en plus.')
            .addField(`${prefix}anime`,'Vous accorde l\'accès au salon manga-anime.')
            .addField(`${prefix}dj`,'Vous accorde l\'accès au bot musique.')
            .addField(`${prefix}fporn`,'Vous accorde l\'accès au salon faygaporn ( +18 ).')
            
            msg.channel.send(embed)
            break

        case 'anime':
            let animeRole = msg.guild.roles.find('name', 'anime');

            if(member.roles.has(animeRole.id)) {
                msg.reply('Vous n\'avez désormais plus accès au channel #manga-anime.')
                member.removeRole(animeRole)
                return
            }else{
                member.addRole(animeRole)
                msg.reply('Vous avez désormais accès au channel #manga-anime.')
            }
            break

        case 'streamer':
            let streamerRole = msg.guild.roles.find('name', 'Streamer');

            if(member.roles.has(streamerRole.id)) {
                msg.reply('Vous n\'ètes plus un streamer reconnu.')
                member.removeRole(streamerRole)
                return
            }else{
                member.addRole(streamerRole)
                msg.reply('Vous ètes un streamer reconnu.')
            }
            break
        case 'dj':
            let djRole = msg.guild.roles.find('name', 'DJ');

            if(member.roles.has(djRole.id)) {
                msg.reply('Vous n\'ètes plus un DJ.')
                member.removeRole(djRole)
                return
            }else{
                member.addRole(djRole)
                msg.reply('Vous ètes un DJ.')
            }
            break
        case 'fporn':
            let pornRole = msg.guild.roles.find('name', 'fporn');

            if(member.roles.has(pornRole.id)) {
                msg.reply('Vous n\'avez désormais plus accès au channel #manga-anime.')
                member.removeRole(pornRole)
                return
            }else{
                member.addRole(pornRole)
                msg.reply('Vous avez désormais accès au channel #faygaporn ( +18 ).')
            }
            break

        case 'bots':
            const botsEmbed = new Discord.RichEmbed()
                .setTitle(`Fayga help >>`)
                .setColor(0x00AE86)
                .setFooter(`Fayga Bot - Author : Fingarde` , client.user.avatarURL)

                .setTimestamp()

                .addField(`Rythm | !help`,'Bot pour jouer de la musique.')
                .addField(`Pokecord | p!help`,'Un petit bot qui retranscrit pokemon sur discord.')
                .addField(`Nekobot | n!help`,'Vous accorde une petite chose en plus.')
                .addField(`osu!bot | osu!help`,'Je sais pas c\'est buggé.')
                .addField(`HentaiBoi | h!help`,'Je vous laisse deviner ^^.')
                .addField(`NSFWBot | -help`,'Bon lol.')
                .addField(`D\'autre vont arriver.`,'Bientôt.')
                
        msg.channel.send(botsEmbed)
            break   
        case 'game':
            if(args.length < 2) {
                let replyStr = ''
                games.forEach(game => {
                    if(games.lastIndexOf(game) != games.length - 1) {
                        replyStr += game + ' , '
                    }else{
                        replyStr  += game + '.'
                    }
                    
                });
                msg.reply('les jeux dispo sont: ' + replyStr)
                return
            }

            let game = args[1];

            if(games.lastIndexOf(game) == -1) {
                let replyStr = ''
                games.forEach(game => {
                    if(games.lastIndexOf(game) != games.length - 1) {
                        replyStr += game + ' , '
                    }else{
                        replyStr  += game + '.'
                    }
                    
                });
                msg.reply('les jeux dispo sont: ' + replyStr)
                return
            }
            let gameRole = msg.guild.roles.find('name', game);

            if(member.roles.has(gameRole.id)) {
                msg.reply('Vous n\'avez désormais plus accès a ce jeu.')
                member.removeRole(gameRole)
                return
            }else{
                member.addRole(gameRole)
                msg.reply('Vous avez désormais accès a ce jeu.')
            }


            break

        default:
            break
    }
    
    
    
   
  
})  

client.login('mdr')
