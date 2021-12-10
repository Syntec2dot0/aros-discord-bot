import { readFile } from 'fs/promises';
import { randomInclusive } from '../util.js';

const gear1Table = JSON.parse(await readFile(new URL('../data/gear1.json', import.meta.url)));
const gear2Table = JSON.parse(await readFile(new URL('../data/gear2.json', import.meta.url)));
const gearDungeonTable = JSON.parse(await readFile(new URL('../data/gearDungeon.json', import.meta.url)));
const meleeWeaponsTable = JSON.parse(await readFile(new URL('../data/meleeWeapons.json', import.meta.url)));
const rangedWeaponsTable = JSON.parse(await readFile(new URL('../data/rangedWeapons.json', import.meta.url)));
const armorTable = JSON.parse(await readFile(new URL('../data/armor.json', import.meta.url)));
const helmetsAndShieldsTable = JSON.parse(await readFile(new URL('../data/helmetsAndShields.json', import.meta.url)));


export function getRandomGear1() {
  return gear1Table[randomInclusive(1, 20)];
}

export function getRandomGear2() {
  return gear2Table[randomInclusive(1, 20)];
}

export function getRandomGearDungeon() {
  return gearDungeonTable[randomInclusive(1, 20)];
}

export function getRandomMeleeWeapon() {
  switch (radomInclusive(1, 20)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return meleeWeaponsTable[0];
    case 6:
    case 7:
      return meleeWeaponsTable[1];
    case 8:
      return meleeWeaponsTable[2];
    case 9:
    case 10:
      return meleeWeaponsTable[3];
    case 11:
    case 12:
    case 13:
    case 14:
      return meleeWeaponsTable[4];
    case 15:
      return meleeWeaponsTable[5];
    case 16:
      return meleeWeaponsTable[6];
    case 17:
      return meleeWeaponsTable[7];
    case 18:
    case 19:
      return meleeWeaponsTable[8];
    case 20:
      return meleeWeaponsTable[9];
  }
}

export function getRandomRangedWeapons() {
  switch (radomInclusive(1, 20)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      return rangedWeaponsTable[0];
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      return rangedWeaponsTable[1];
    case 19:
    case 20:
      return rangedWeaponsTable[2];
  }
}

export function getRandomArmor() {
  switch (radomInclusive(1, 20)) {
    case 1:
    case 2:
    case 3:
      return armorTable[0];
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
      return armorTable[1];
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return armorTable[2];
    case 20:
      return armorTable[3];
  }
}

export function getRandomHelmetAndShield() {
  switch (radomInclusive(1, 20)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
      return helmetsAndShieldsTable[0];
    case 14:
    case 15:
    case 16:
      return helmetsAndShieldsTable[1];
    case 17:
    case 18:
    case 19:
      return helmetsAndShieldsTable[2];
    case 20:
      return helmetsAndShieldsTable[3];
  }
}