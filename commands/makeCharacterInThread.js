import { SlashCommandBuilder } from '@discordjs/builders';

let command = {
	data: new SlashCommandBuilder()
		.setName('makecharacterinthread')
		.setDescription('Erstellt einen Charakter im eigenen Thread'),

	async execute(interaction) {
		await interaction.reply("Ich erstelle einen thread für dich");

		const thread = await interaction.channel.threads.create({
			name: 'Charaktererschaffung für ' + interaction.member.displayName,
			autoArchiveDuration: 60,
		});

		interaction.client.on("messageCreate", (message) => {
			if (message.channel.id == thread && message.author.id == interaction.member.user.id) {
				console.log(message);
				thread.send("test");
				interaction.deleteReply();
			}

		});
	},
};

export default command;