import { SlashCommandBuilder } from '@discordjs/builders';
import * as randomTables from '../services/randomTables.js';
import { MessageEmbed } from 'discord.js'
import { equipmentToString } from '../services/util.js'

let command = {
	data: new SlashCommandBuilder()
		.setName('rollequipment')
		.setDescription('Würfelt Ausrüstung aus'),

	async execute(interaction) {
		const weapon = randomTables.getRandomMeleeWeapon();
		const armor = randomTables.getRandomArmor();
		const helmetAndShield = randomTables.getRandomHelmetAndShield();
		const gear1 = randomTables.getRandomGear1();
		const gear2 = randomTables.getRandomGear2();
		const gearDungeon = randomTables.getRandomGearDungeon();

		const replay = `\`${equipmentToString(weapon)}\`\n`
			+ `\`${equipmentToString(armor)}\`\n`
			+ `\`${equipmentToString(helmetAndShield)}\`\n`
			+ `\`${equipmentToString(gear1)}\`\n`
			+ `\`${equipmentToString(gear2)}\`\n`
			+ `\`${equipmentToString(gearDungeon)}\`\n`

		const exampleEmbed = new MessageEmbed()
			.setColor('#5C8C79')
			.setTitle('Ausrüstung')
			.setDescription(replay)

		await interaction.reply({ embeds: [exampleEmbed] })
	},
};

export default command;