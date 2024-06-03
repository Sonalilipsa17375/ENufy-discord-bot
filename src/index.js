require('dotenv').config();

const {Client,IntentsBitField,EmbedBuilder} = require("discord.js");

const client = new Client({

    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready',(client)=>{
    console.log( `✅ ${client.user.tag} is online`);
});

client.on("messageCreate",(message)=>{
    if(message.author.bot){
        return;
    }
    if(message.content === "Hello"){
        message.reply(`HEllo ${client.user.tag}`);
    }
});

client.on('interactionCreate',(interaction)=>{
    if(!interaction.isChatInputCommand()){
        return;
    }
    if(interaction.commandName === 'hey'){
        interaction.reply("hey gudu");
    }
    if(interaction.commandName === 'ping'){
        interaction.reply("pong");
    }
    if(interaction.commandName === "embed"){
        const embed = new EmbedBuilder().setTitle("Embed title").setDescription('This is an embed description');

        interaction.reply({embeds: []})
    }
})

client.login(process.env.TOKEN);