import { SlashCommandBuilder } from '@discordjs/builders';

let command = {
data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	}, 
};

export default command;