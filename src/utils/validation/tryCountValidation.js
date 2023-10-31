import ERROR from '../../constants/Error.js';
import GAME from '../../constants/Game.js';
import TryCountError from '../../error/TryCountError.js';
import isNan from '../isNan.js';

const tryCountValidation = (tryCount) => {
	if (tryCount === '') throw new TryCountError(ERROR.empty);
	if (isNan(tryCount)) throw new TryCountError(ERROR.isNan);
	if (isOutOfRange(parseInt(tryCount))) throw new TryCountError(ERROR.range);
};

const isOutOfRange = (tryCount) => {
	return tryCount < GAME.minTryCount || tryCount > GAME.maxTryCount;
};

export default tryCountValidation;
