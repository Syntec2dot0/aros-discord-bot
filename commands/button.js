import { MessageActionRow, MessageButton } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

let command = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Makes a button.')
        .addIntegerOption(option =>
            option
                .setName('faces')
                .setDescription('Which die should the button roll?')
                .setRequired(true)),
    async execute(interaction) {
        const faces = interaction.options.getInteger('faces');

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('dieroll')
                    .setLabel(`Roll a d${faces}.`)
                    .setStyle('PRIMARY'),
            );

        await interaction.reply({ content: 'Click to roll.', components: [row] });

        const filter = i => i.customId === 'dieroll';

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
            if (i.customId === 'dieroll') {
                console.log("Dierollinteraction");
                await i.deferUpdate();
                let num = Math.floor(Math.random() * faces + 1) + '';
                await i.editReply({ content: num, components: [] });
            }
        });

        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    },
};

export default command;
