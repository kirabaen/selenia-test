'use strict';

/**
 * See warrior.js for more on classes.
 */
module.exports = srcPath => {
  return {
    name: 'Human',
    description: 'Humans are the most common race in Selenia. They are adaptable and learn quickly, but do not excel in any particular area.',
    abilityTable: {
      5: { spells: ['fireball'] },
    }
  };
};
