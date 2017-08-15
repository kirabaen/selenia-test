'use strict';

/**
 * See warrior.js for more on classes.
 */
module.exports = srcPath => {
  return {
    name: 'Elf',
    description: 'Elves are a beautiful, intelligent, and nimble race. They have high intelligence and above average agility, but they have below average strength and endurance. Elves have improved energy regeneration.',
    abilityTable: {
      2: { spells: ['fireball'] },
    }
  };
};
