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
  return gear1Table[Object.keys(gear1Table)[randomInclusive(0, 19)]];
}

export function getRandomGear2() {
  return gear2Table[Object.keys(gear2Table)[randomInclusive(0, 19)]];
}

export function getRandomGearDungeon() {
  return gearDungeonTable[Object.keys(gearDungeonTable)[randomInclusive(0, 19)]];
}

export function getRandomMeleeWeapon() {
  switch (randomInclusive(1, 20)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return meleeWeaponsTable.dagger;
    case 6:
    case 7:
      return meleeWeaponsTable.cudgel;
    case 8:
      return meleeWeaponsTable.sickle;
    case 9:
    case 10:
      return meleeWeaponsTable.mace;
    case 11:
    case 12:
    case 13:
    case 14:
      return meleeWeaponsTable.spear;
    case 15:
      return meleeWeaponsTable.sword;
    case 16:
      return meleeWeaponsTable.eku;
    case 17:
      return meleeWeaponsTable.hammer;
    case 18:
    case 19:
      return meleeWeaponsTable.harpoon;
    case 20:
      return meleeWeaponsTable.longsword;
  }
}

export function getRandomRangedWeapons() {
  switch (randomInclusive(1, 20)) {
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
      return rangedWeaponsTable.sling;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      return rangedWeaponsTable.bow;
    case 19:
    case 20:
      return rangedWeaponsTable.crossbow;
  }
}

export function getRandomArmor() {
  switch (randomInclusive(1, 20)) {
    case 1:
    case 2:
    case 3:
      return armorTable.noArmor;
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
      return armorTable.canvasTunic;
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return armorTable.sealLeather;
    case 20:
      return armorTable.ironScaleMail;
  }
}

export function getRandomHelmetAndShield() {
  switch (randomInclusive(1, 20)) {
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
      return helmetsAndShieldsTable.noneOrHat;
    case 14:
    case 15:
    case 16:
      return helmetsAndShieldsTable.helmet;
    case 17:
    case 18:
    case 19:
      return helmetsAndShieldsTable.shield;
    case 20:
      return helmetsAndShieldsTable.helmetAndShield;
  }
}