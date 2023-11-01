import { SYMBOLS } from './symbols.js';

export const INPUT_MESSAGE = Object.freeze({
  playerRacingCarNames: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${SYMBOLS.comma}) 기준으로 구분)\n`,
  moveCount: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGE_TEXT = Object.freeze({
  gameResultTitle: '\n실행 결과',
});

export const OUTPUT_MESSAGE_FORMAT_TYPE = Object.freeze({
  moveRacingCar: '-',
});

export const OUTPUT_MESSAGE_METHOD = Object.freeze({
  racingResult(racingResult) {
    const { moveRacingCar } = OUTPUT_MESSAGE_FORMAT_TYPE;
    return racingResult
      .map((racingStatus) =>
        racingStatus
          .map(({ carName, position }) => `${carName} : ${moveRacingCar.repeat(position)}`)
          .join('\n'),
      )
      .join('\n\n');
  },

  racingWinners(racingWinners) {
    return `\n최종 우승자 : ${racingWinners}`;
  },
});
