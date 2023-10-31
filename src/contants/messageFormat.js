const ERROR_PREFIX = '[ERROR]';

export const MESSAGE_FORMAT = Object.freeze({
  error: (message) => `${ERROR_PREFIX} ${message}`,
});
