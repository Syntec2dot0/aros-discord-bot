import { SlashCommandBuilder } from '@discordjs/builders';
import { rolladiefunc, gearfunc, indent } from '../util.js';

let command = {
	data: new SlashCommandBuilder()
		.setName('makecharacterinthread')
		.setDescription('Erstellt einen Charakter im eigenen Thread'),

	async execute(interaction) {

	},
};

export default command;