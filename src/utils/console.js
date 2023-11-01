import { Console } from '@woowacourse/mission-utils';

const computer = {
  ask: (about) =>  Console.readLineAsync(about),
  tell: (about) =>  Console.print(about)
};

export default computer;
