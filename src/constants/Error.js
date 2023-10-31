import GAME from './Game.js';

const ERROR = Object.freeze({
	prefix: '[ERROR]',
	empty: '공백이 아닌 값을 입력해주세요.',
	isNan: '숫자를 입력해주세요.',
	range: `${GAME.minTryCount} ~ ${GAME.maxTryCount} 사이의 숫자를 입력해주세요.`,
	nameLength: `이름은 각각 ${GAME.minNameLength} ~ ${GAME.maxNameLength} 길이 이내로 입력해주세요.`,
	namesCount: `이름은 ${GAME.minNamesCount} ~ ${GAME.maxNamesCount} 개 이내로 입력해주세요.`,
});

export default ERROR;
