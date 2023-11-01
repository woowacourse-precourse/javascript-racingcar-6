import { Console } from '@woowacourse/mission-utils';

async function InputNumber() {
  Console.print('시도할 횟수는 몇 회인가요?');
  const n = Number(await Console.readLineAsync(''));

  if (n <= 0) {
    throw new Error('[ERROR]: 잘못된 입력입니다.');
  }
  if (!Number.isInteger(n)) {
    throw new Error('[ERROR]: 잘못된 입력입니다.');
  }
  
  return n;
}

export default InputNumber;