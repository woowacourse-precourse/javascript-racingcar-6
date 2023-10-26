import { Console } from '@woowacourse/mission-utils';

async function InputNumber() {
  const n = Number(await Console.readLineAsync(''));

  return n;
}

export default InputNumber;