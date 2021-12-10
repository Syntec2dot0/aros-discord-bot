import dotenv from 'dotenv';

/* Lädt alle Enviorment Variablen in .env */
dotenv.config();

import { Client, Intents, Collection } from 'discord.js';

/* Import all the commands */
import ping from '../commands/ping.js';
import rolladie from '../commands/rollADie.js';
import rollAttributes from '../commands/rollAttributes.js';
import rollEquipment from '../commands/rollEquipment.js';

/* import all the events */
import onready from '../events/onReady.js';
import oninteraction from '../events/onInteraction.js';

/* Füllt myIntents mit einer Liste and Intents (Sagt der Discord API welche Events der Bot 
		hören kann.):
Server: Mitgliederstatus, Nachrichten, Mitglieder, Server
Privat: Privatnachrichten
*/

const myIntents = new Intents();
myIntents.add(
	Intents.FLAGS.GUILD_PRESENCES,
	Intents.FLAGS.GUILD_MEMBERS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.DIRECT_MESSAGES,
	Intents.FLAGS.GUILDS);

/* Erstellt ein Client Objekt mit den Intents. client ist das Objekt des bots. */
const client = new Client({ intents: myIntents });

/* Füllt mittels filesystem ein String array mit den Namen aller .js files im 
command Ordner */
client.commands = new Collection();
/* Füllt die collection (eine spezielle Map) mit den  commandfiles*/
client.commands.set(ping.data.name, ping);
client.commands.set(rolladie.data.name, rolladie);
client.commands.set(rollAttributes.data.name, rollAttributes);
client.commands.set(rollEquipment.data.name, rollEquipment);

client.once(onready.name, (...args) => {
	onready.execute(...args);
});

client.on(oninteraction.name, (...args) => {
	oninteraction.execute(...args);
});


/* Startet den Bot mit dem Token aus der Enviormentvariable */
client.login(process.env.DISCORDJS_BOT_TOKEN);