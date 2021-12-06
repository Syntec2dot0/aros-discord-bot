let onready = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`${client.user.tag} has logged in.`);
	}
}

export default onready;