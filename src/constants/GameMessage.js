import GAME from './Game.js';

// TODO: freeze 유효성 알아보기
const GAME_MESSAGE = Object.freeze({
	readDrivers: `경주할 자동차 이름을 입력하세요.(이름은 ${GAME.delimiterName}(${GAME.inputNameDelimiter}) 기준으로 구분)\n`,
	readTryCount: '시도할 횟수는 몇 회인가요?\n',
	resultHeader: '실행 결과',
	resultDelimiter: ':',
	moveMark: '-',
	winner: '최종 우승자 : ',
	newLine: '\n',
	clearNameDelimiter: ', ',
});

export default GAME_MESSAGE;
