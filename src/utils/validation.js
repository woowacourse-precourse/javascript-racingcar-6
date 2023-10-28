import { INPUT_LIMIT, ERROR_MESSAGE } from '../constants.js';

const nameValidation = function(name) {
    if (name.length > INPUT_LIMIT.playerName) {
        throw new Error(`[ERROR] ${ ERROR_MESSAGE.playerNameLength }`);
    }
    return name;
};

export { nameValidation };