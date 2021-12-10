import { SlashCommandBuilder } from '@discordjs/builders';
import * as randomTables from '../services/randomTables.js';
import { MessageEmbed } from 'discord.js'

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

		const replay = `\`${weapon.nameGer} (Schaden: 1D${weapon.damageDieSize}, Slots: ${weapon.slots}, Hände: ${weapon.hand})\`\n`
			+ `\`${armor.nameGer} (Verteidigung: ${armor.defense}${armor.slots ? `, Slots: ${armor.slots}, Qualität: ${armor.quality}` : ``})\`\n`
			+ `\`${helmetAndShield.nameGer} (Verteidigung: +${helmetAndShield.defenseBonus}${helmetAndShield.slots ? `, Slots: ${helmetAndShield.slots}, Qualität: ${helmetAndShield.quality}` : ``})\`\n`
			+ `\`${gear1.nameGer}\`\n`
			+ `\`${gear2.nameGer}\`\n`
			+ `\`${gearDungeon.nameGer}\``
		//+ "`" + randomTables.getRandomGear1().nameGer + "`\n"
		//+ "`" + randomTables.getRandomGear2().nameGer + "`\n"
		//+ "`" + randomTables.getRandomGearDungeon().nameGer + "`\n"

		const exampleEmbed = new MessageEmbed()
			.setColor('#5C8C79')
			.setTitle('Ausrüstung')
			.setDescription(replay)

		await interaction.reply({ embeds: [exampleEmbed] })
	},
};

export default command;