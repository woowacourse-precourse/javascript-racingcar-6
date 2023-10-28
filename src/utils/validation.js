import { INPUT_LIMIT, ERROR_MESSAGE } from '../constants.js';

const nameValidation = function(name) {
    if (name.length > INPUT_LIMIT.name) {
        throw new Error(`[ERROR] ${ ERROR_MESSAGE.nameLength }`);
    }
};

export { nameValidation };