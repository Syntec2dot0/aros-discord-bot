export function randomInclusive(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min)
}

export function equipmentToString(equipment) {
  switch (equipment.type) {
    case "gear":
      return equipment.nameGer;
    case "weapon":
      return `${equipment.nameGer} (Schaden: 1D${equipment.damageDieSize}, Slots: ${equipment.slots}, Hände: ${equipment.hand})`
    case "armor":
      return `${equipment.nameGer} (Verteidigung: ${equipment.defense}, Slots: ${equipment.slots}, Qualität: ${equipment.quality})`
    case "noArmor":
      return `${equipment.nameGer} (Verteidigung: ${equipment.defense})`
    case "helmetAndShield":
      return `${equipment.nameGer} (Verteidigung: +${equipment.defenseBonus}, Slots: ${equipment.slots}, Qualität: ${equipment.quality})`
    case "noHelmetAndShield":
      return `${equipment.nameGer} (Verteidigung: +${equipment.defenseBonus})`
  }
}