import { SlashCommandBuilder } from '@discordjs/builders';
import { randomInclusive } from '../util.js';

/* 
Builds a dice rolling command 
with two options: 
- faces: How many faces should the die have?
- number: How many dice should the bot roll?
Both are constructed as callback functions, that change an option arg.
*/

let command = {
	data: new SlashCommandBuilder()
		.setName('r')
		.setDescription('Rolls the specified die.')
		.addIntegerOption(option =>
			option
				.setName('faces')
				.setDescription('Which die should I roll?')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('number')
				.setDescription('How many dice should I roll?')
				.setRequired(true)),
	async execute(interaction) {

		/* Save the option input in vars. */
		let faces = interaction.options.getInteger('faces');
		let num = interaction.options.getInteger('number');

		/* Defers the reply as interaction tokens normally only last 3 seconds. 
		Max delay 15 min. */
		try {
			await interaction.deferReply();

			/* Building a Response string with the specified number of die Results: */
			let res = randomInclusive(1, faces);

			for (let i = 1; i < num; i++) {
				res += " + " + randomInclusive(1, faces);
			}

			await interaction.editReply(`Rolling ${num}D${faces} : \n ${res}`);
		} catch {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};

export default command;