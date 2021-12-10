/* This is the file, that deploys commands on run. It only needs to be run once when
commands are added or edited. */

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import dotenv from 'dotenv';

/* Import all the commands */
import ping from './commands/ping.js';
import rolladie from './commands/rolladie.js';
import button from './commands/button.js';
import rollAttributes from './commands/rollAttributes.js';
import rollEquipment from './commands/rollEquipment.js';

dotenv.config();


/* We need to import every command file at the top
 as import is static and cannot be used in for loops*/
const commands = [];

/* Fill the commands array with every Command from the command files */

commands.push(ping.data.toJSON());
commands.push(rolladie.data.toJSON());
commands.push(button.data.toJSON());
commands.push(rollAttributes.data.toJSON());
commands.push(rollEquipment.data.toJSON());

/* Create a new http request with your Bot Token as a header */
const rest = new REST({ version: '9' }).setToken(process.env.DISCORDJS_BOT_TOKEN);

/* Send all commands with the clientID of our bot and the ServerId we want to use the bot in*/
rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);