/* Der Slash-Command Listener */
let onInteraction = {
	name: "interactionCreate",
	once: false,
	async execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

		if (!interaction) { console.error("Interaction is undefined."); return; };

		let client = interaction.client;

		/* Check if the interaction was a command. */
		if (interaction.isCommand()) {

			/* Saves the name of the interaction command */
			const command = client.commands.get(interaction.commandName);

			/* Stops if something went wrong with the command name */
			if (!command) return;

			/* Tries to execute the specified command */
			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		};
		if (interaction.isButton()) {
			console.log(interaction);
		}
	}
};

export default onInteraction;