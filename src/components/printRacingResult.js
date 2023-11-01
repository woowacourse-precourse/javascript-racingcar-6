import { Console } from '@woowacourse/mission-utils';

const printRacingResult = (carNameDict) => {
  for (let carName in carNameDict) {
    let resultStr = carName + ' : ';
    for (let i = 0; i < carNameDict[carName]; i++) {
      resultStr += '-';
    }
    Console.print(resultStr);
  }
  Console.print('');
};

export { printRacingResult };
