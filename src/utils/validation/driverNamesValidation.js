import ERROR from '../../constants/Error.js';
import GAME from '../../constants/Game.js';
import DriverNamesError from '../../error/DriverNamesError.js';

// 배열로 가공되어 넘어온다.
const driverNamesValidation = (driverNames) => {
	if (invalidNameLength(driverNames)) throw new DriverNamesError(ERROR.nameLength); // 빈 입력인 ['']은 이곳에서 걸러진다.
	if (invalidNamesCount(driverNames)) throw new DriverNamesError(ERROR.namesCount);
};

const invalidNameLength = (names) => {
	return names.some((name) => name.length < GAME.minNameLength || name.length > GAME.maxNameLength);
};

const invalidNamesCount = (names) => {
	return names.length < GAME.minNamesCount || names.length > GAME.maxNamesCount;
};

export default driverNamesValidation;
