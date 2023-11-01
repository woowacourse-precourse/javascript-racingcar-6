const ERROR_PREFIX = '[ERROR]';

export const MESSAGE_FORMAT = Object.freeze({
  error: (message) => `${ERROR_PREFIX} ${message}`,
  position: (name, position) => `${name} : ${'-'.repeat(position)}`,
  winner: (winners) => `최종 우승자 : ${winners.join(', ')}`,
});
