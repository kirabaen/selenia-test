'use strict';

/**
 * Player race selection event
 */
module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');
  const EventUtil = require(srcPath + 'EventUtil');
  const Config     = require(srcPath + 'Config');

  return {
    event: state => (socket, args) => {
      const say = EventUtil.genSay(socket);
      const write  = EventUtil.genWrite(socket);

      /*
      Player selection menu:
      * Can select existing player
      * Can create new (if less than 3 living chars)
      */
      say('  Select your race ');
      say(' --------------------------');
      const races = [...state.ClassManager].map(([id, instance]) => {
        return [id, instance.config];
      });
      for (const [ id, config ] of races) {
        say(`[<bold>${id}</bold>] - <bold>${config.name}</bold>`);
        say(Broadcast.wrap(`      ${config.description}\r\n`, 80));
      }
      write('> ');

      socket.once('data', choice => {
        choice = choice.toString().trim();
        choice = races.find(([id, config]) => {
          return id.includes(choice) || config.name.toLowerCase().includes(choice);
        });

        if (!choice) {
          return socket.emit('choose-race', socket, args);
        }

        args.playerRace = choice[0];
        socket.emit('choose-class', socket, args);
      });
    }
  };
};
