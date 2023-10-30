/**
 * views 폴더 내에 사용되는 상수 정의
 */

export const INPUT_MESSAGE = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  moveCount: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  resultText: '실행 결과',
  printCarPosition(name, position) {
    return `${name} : ${'-'.repeat(position)}`;
  },
  prinitWinners(winners) {
    return `최종 우승자 : ${winners.join(', ')}`;
  },
});
