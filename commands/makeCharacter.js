import { SlashCommandBuilder } from '@discordjs/builders';
import { gearfunc, indent } from '../util.js';

let command = {
	data: new SlashCommandBuilder()
		.setName('makecharacter')
		.setDescription('Make a Rasp of Sand Character Template.')
		.addIntegerOption(option =>
			option
				.setName('str')
				.setDescription('Strength')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('dex')
				.setDescription('Dexterity')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('con')
				.setDescription('Constitution')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('int')
				.setDescription('Intuition')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('wis')
				.setDescription('Wisdom')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('cha')
				.setDescription('Charisma')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('sand')
				.setDescription('Sand')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply();
		let cara = '``` \n 0. Alle Besitztümer zum Familienbesitz hinzufügen \n 1. Attribute: \n';
		const attributenames = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
		let attril = '';

		attributenames.forEach(attribute => {
			let possibleAttributes = [];


			for (let i = 0; i < 3; i++) {
				possibleAttributes.push(parseInt(rolladiefunc(6, 1)));
			}

			console.log(possibleAttributes);

			possibleAttributes.sort((a, b) => a - b);

			console.log(possibleAttributes);

			let val = interaction.options.getInteger(attribute);
			if (val <= 4) {
				attril += attribute + ': ' + possibleAttributes[0] + '\n';
			} else if (val <= 8) {
				attril += attribute + ': ' + possibleAttributes[1] + '\n';
			} else {
				attril += attribute + ': ' + possibleAttributes[2] + '\n';
			}
		})
		cara += indent(attril, 1);
		let gearl = '';

		cara += '2. HP: ' + rolladiefunc(8, 1) + '\n'
		cara += '3. Sand: ' + Math.floor(Math.ceil((1 / 4) * interaction.options.getInteger('sand')) / 25) * 25 + '\n';
		cara += '4. Ausrüstung: \n'
		gearl += gearfunc.getWeapons(parseInt(rolladiefunc(20, 1))) + '\n';
		gearl += gearfunc.getArmor(parseInt(rolladiefunc(20, 1))) + '\n';
		gearl += gearfunc.getHelmetsAndShields(parseInt(rolladiefunc(20, 1))) + '\n';
		gearl += gearfunc.getGear(parseInt(rolladiefunc(20, 1)), 1) + '\n';
		gearl += gearfunc.getGear(parseInt(rolladiefunc(20, 1)), 2) + '\n';
		gearl += gearfunc.getGear(parseInt(rolladiefunc(20, 1)), 3) + '\n';
		cara += indent(gearl, 1);

		cara += '5. Neigung: \n'
		cara += indent(gearfunc.getPassion(parseInt(rolladiefunc(20, 1)),) + '\n', 1);

		cara += '6. Aussehen und Persönlichkeit aussuchen und Vornamen geben \n';
		cara += '7. Nächste Familienfähigkeit freischalten. \n';
		cara += '8. Einen Gegenstand aus dem Familienbesitz als Erbstück auswählen. \n';

		cara += '```';
		await interaction.editReply(cara)
	},
};

export default command;