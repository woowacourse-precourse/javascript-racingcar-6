/* eslint-disable import/extensions */
import { progressBar } from './Constants.js';

const GAME_MESSAGE = Object.freeze({
  INPUT_CARNAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_GAMECOUNT: '시도할 횟수는 몇 회인가요?\n',
  OUTPUT_TITLE: '\n실행결과',
  OUTPUT_CARRACING_MOVE: (carName, moveCount) => `${carName} : ${progressBar.repeat(moveCount)}`,
  OUTPUT_WINNERCARNAME: carName => `최종 우승자 : ${carName.join(', ')}`,
});

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH: '[ERROR] 이름은 5자 이하만 가능합니다.',
  NAME_BLANK: '[ERROR] 이름은 공백이면 안됩니다.',
  GAMECOUNT_BLANK: '[ERROR] 공백을 입력하시면 안됩니다.',
  GAMECOUNT_NOTNUM: '[ERROR] 숫자가 잘못된 형식입니다.',
});

export { GAME_MESSAGE, ERROR_MESSAGE };
