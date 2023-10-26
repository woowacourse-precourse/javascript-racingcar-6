import { Console } from '@woowacourse/mission-utils';

async function InputNumber() {
  Console.print('시도할 횟수는 몇 회인가요?');
  const n = Number(await Console.readLineAsync(''));

  return n;
}

export default InputNumber;