import { readFile } from 'fs/promises';
import { randomInclusive } from '../util';

const gear1Table = JSON.parse(await readFile(new URL('../data/gear1.json', import.meta.url)));
const gear2Table = JSON.parse(await readFile(new URL('../data/gear2.json', import.meta.url)));
const gearDungeonTable = JSON.parse(await readFile(new URL('../data/gearDungeon.json', import.meta.url)));


export function getRandomGear1() {
  return gear1Table[randomInclusive(1, 20)];
}

export function getRandomGear1() {
  return gear2Table[randomInclusive(1, 20)];
}

export function getRandomGearDungeon() {
  return gearDungeonTable[randomInclusive(1, 20)];
}