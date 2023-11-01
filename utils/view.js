import { MissionUtils } from '@woowacourse/mission-utils';
import { seperateCarNames, processTrialInput } from './inputHandling.js';

export const carNamesRead = async () => {
  return seperateCarNames(
    await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    ),
  );
};
export const trialNumRead = async () => {
  return processTrialInput(
    await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),
  );
};
export const printIntermediateResult = ({ name, dashes }) => {
  MissionUtils.Console.print(`${name} : ${dashes}`);
};
export const printingGreetingResult = () => {
  MissionUtils.Console.print('\n실행 결과');
};
export const printingNewLine = () => {
  MissionUtils.Console.print('');
};
export const printingFinalWinners = ({ winners }) => {
  MissionUtils.Console.print(`최종 우승자 : ${winners}`);
};
