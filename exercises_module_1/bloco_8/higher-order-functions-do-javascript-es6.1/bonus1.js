const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


// EX1:
const dragonDamage = () => {
  const randomNum = Math.floor((Math.random() * (dragon.strength - 15) + 15));
  return randomNum;
}

console.log(dragonDamage());


// EX2:

