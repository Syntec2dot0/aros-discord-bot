import { assertReturnOfBuilder } from "@discordjs/builders/dist/interactions/slashCommands/Assertions";

export const rolladiefunc = function (faces, num) {
  let res = Math.floor(Math.random() * faces + 1) + '';

  if (num <= 1) return res;

  for (let i = 1; i < num; i++) {
    res += ' + ' + Math.floor(Math.random() * faces + 1);
  }
  return res;
};

export function indent(str, numOfIndents, opt_spacesPerIndent) {
  str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\t'));
  numOfIndents = new Array(opt_spacesPerIndent + 1 || 0).join(' '); // re-use
  return opt_spacesPerIndent ?
    str.replace(/^\t+/g, function (tabs) {
      return tabs.replace(/./g, numOfIndents);
    }) :
    str;
};

export const gearfunc = {
  getWeapons: (num) => {
    if (num <= 5)
      return "Dagger";
    if (num <= 7)
      return "Cudgel";
    if (num == 8)
      return "Sickle";
    if (num <= 10)
      return "Mace";
    if (num <= 14)
      return "Spear";
    if (num == 15)
      return "Hand Ax/Sword";
    if (num == 16)
      return "Eku";
    if (num == 17)
      return "Hammer";
    if (num <= 19)
      return "Harpoon";
    if (num == 20)
      return "Ax/Longsword";
    return "Error";
  },

  getArmor: (num) => {
    if (num <= 3)
      return "No Armor";
    if (num <= 14)
      return "Canvas Tunic";
    if (num <= 19)
      return "Seal Leather";
    if (num == 20)
      return "Iron-Scale Mail";
    return "Error";
  },

  getHelmetsAndShields: (num) => {
    if (num <= 13)
      return "Hat";
    if (num <= 16)
      return "Helmet";
    if (num <= 19)
      return "Shield";
    if (num == 20)
      return "Helmet and Shield";
    return "Error";
  },

  getGear: (num, which) => {
    num = num - 1;
    let gear1 = ['Torch*2', 'Bear Trap', 'Shovel', 'Bellows', 'Grease', 'Saw', 'Bucket', 'Caltrops', 'Chisel', 'Drill', 'Fishing Rod', 'Marbels', 'Glue', 'Pick', 'Hourglass', 'Net', 'Tongs', 'Lockpick', 'Metal file', 'Random Melee Weapon' /* getWeapons(parseInt(rolladiefunc(20, 1))) */]
    let gear2 = ['Torch*2', 'Sponge', 'Lens', 'Perfume', 'Horn', 'Bottle', 'Soap', 'Spyglass', 'Tar Pot', 'Twine', 'Fake Jewels', 'Card Deck', 'Dice Set', 'Face Paint', 'Whistle', 'Instrument', 'Quill and Ink', 'Small Bell', 'Airbladder', 'Random Ranged Weapon'];
    let gear3 = ['Rope, 50ft', 'Pulleys', 'Chain, 10ft', 'Chalk*10', 'Crowbar', 'Torch*2', 'Grappling Hook', 'Hammer', 'Padlock', 'Manacles', 'Mirror', 'Pole, 10ft', 'Sack', 'Machete', 'Spikes*5', 'Random Scroll', 'Lantern and Blubber Oil (Light for 1 floor)', 'Glowing Algae Globe', 'Random Slug', 'Random Spellpearl']

    if (num > 20) {
      console.log('Rolled over 20 while rolling general gear1')
      num = 20;
    }
    switch (which) {
      case 1:
        return gear1[num]
      case 2:
        return gear2[num]
      case 3:
        return gear3[num]
      default:
        console.log('Wrong gear number.')
        return "Error";
    }
  },

  getPassion: (num) => {
    if (num <= 1) return 'Lazy (N/A)';
    if (num >= 20) return 'Prodigy (Pick Two)';
    const attributenames = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    return `Your Passsion is: ${attributenames[parseInt(rolladiefunc(6, 1)) - 1]}`;
  }
}