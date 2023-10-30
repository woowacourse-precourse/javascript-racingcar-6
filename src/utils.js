import { ERROR_PREFIX } from './constants';

export const errorMessage = (issue) => {
  return `${ERROR_PREFIX}${issue}`;
};
