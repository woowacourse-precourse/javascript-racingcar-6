import { Random, Console } from '@woowacourse/mission-utils';

//사용자 값 받는곳
class Input {
  constructor() {}

  static uswerInputCarName = async () => {
    let uswerinput = await Console.readLineAsync(
      '(이름은 5글자 이하 쉼표(,) 기준으로 구분,영어로만 작성) \n 경주 할 자동차 이름을 입력하세요  :'
    );
    const CAR_NAMES = uswerinput.split(',');
    Console.print(CAR_NAMES);
    return CAR_NAMES;
  };

  static uswerInputCycle = async () => {
    let cycleSize = await Console.readLineAsync('몇번 시도 할까요?  :');
    Console.print(cycleSize);
    return cycleSize;
  };
}
export default Input;
