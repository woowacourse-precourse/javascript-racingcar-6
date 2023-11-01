import { MissionUtils } from '@woowacourse/mission-utils';
import { printMessage } from './utils/messages';

const playSingleRound = progress => {
  let randomNumber = 0;
  const newProgress = progress.map(value => {
    randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4 ? value + 1 : value;
  });

  return newProgress;
};

const printSingleRoundResult = (carNames, progress) => {
  const results = progress.map((value, index) => {
    const carName = carNames[index];
    const dash = '-'.repeat(value);
    return `${carName} : ${dash}`;
  });
  results.forEach(result => printMessage(result, '\n'));
  printMessage('');
};

const getWinners = (carNames, progress) => {
  const maxProgress = Math.max(...progress);
  const winners = carNames.filter(
    (_, index) => progress[index] === maxProgress,
  );

  return winners;
};

const playRacingGame = (carNames, count) => {
  let progress = Array(carNames.length).fill(0);

  printMessage('\n실행 결과');
  for (let i = 0; i < count; i += 1) {
    progress = playSingleRound(progress);
    printSingleRoundResult(carNames, progress);
  }
  printMessage(`최종 우승자: ${getWinners(carNames, progress).join(', ')}\n`);
};

export default playRacingGame;
