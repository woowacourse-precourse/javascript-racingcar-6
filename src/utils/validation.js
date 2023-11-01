import { ERRORS } from './constants.js';

export function validateName(name) {
  if (name.length > 5 || name.length < 1) {
    throw new Error(ERRORS.INVALID_NAME);
  }
}

export function validateUniqueNames(names) {
  const nameSet = new Set(names);
  if (nameSet.size !== names.length) {
    throw new Error(ERRORS.DUPLICATE_NAME);
  }
}
