import { SlashCommandBuilder } from '@discordjs/builders';
import { randomInclusive } from '../services/util.js';
import { MessageEmbed } from 'discord.js'

let command = {
	data: new SlashCommandBuilder()
		.setName('rollattributes')
		.setDescription('Würfelt Attribute aus')
		.addIntegerOption(option =>
			option
				.setName('str')
				.setDescription('STR Bonus deines letzten Charakters')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('dex')
				.setDescription('DEX Bonus deines letzten Charakters')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('con')
				.setDescription('CON Bonus deines letzten Charakters')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('int')
				.setDescription('INT Bonus deines letzten Charakters')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('wis')
				.setDescription('WIS Bonus deines letzten Charakters')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('cha')
				.setDescription('CHA Bonus deines letzten Charakters')
				.setRequired(true)),

	async execute(interaction) {
		let attributes = [{ name: "str", value: -1 }, { name: "dex", value: -1 }, { name: "con", value: -1 }, { name: "int", value: -1 }, { name: "wis", value: -1 }, { name: "cha", value: -1 }];
		let attril = '';

		attributes.forEach(attribute => {
			let possibleAttributes = [];


			for (let i = 0; i < 3; i++) {
				possibleAttributes.push(parseInt(randomInclusive(1, 6)));
			}

			possibleAttributes.sort((a, b) => a - b);

			let val = interaction.options.getInteger(attribute.name);
			if (val <= 4) {
				attribute.value = possibleAttributes[0];
			} else if (val <= 8) {
				attribute.value = possibleAttributes[1];
			} else {
				attribute.value = possibleAttributes[2];
			}
		})
		const replayMessage = "`" + attributes[0].value + "\tSTR\t" + (attributes[0].value + 10) + "`\n"
			+ "`" + attributes[1].value + "\tDEX\t" + (attributes[1].value + 10) + "`\n"
			+ "`" + attributes[2].value + "\tCON\t" + (attributes[2].value + 10) + "`\n"
			+ "`" + attributes[3].value + "\tINT\t" + (attributes[3].value + 10) + "`\n"
			+ "`" + attributes[4].value + "\tWIS\t" + (attributes[4].value + 10) + "`\n"
			+ "`" + attributes[5].value + "\tCHA\t" + (attributes[5].value + 10) + "`\n"

		const exampleEmbed = new MessageEmbed()
			.setColor('#5C8C79')
			.setTitle('Attribute')
			.setDescription(replayMessage)

		await interaction.reply({ embeds: [exampleEmbed] })
	},
};

export default command;