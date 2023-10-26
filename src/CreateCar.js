import { Console } from '@woowacourse/mission-utils';

async function CreateCar() {
  Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
  const car = await Console.readLineAsync('');
  const carArray = car.split(',');

  for (let i=0; i<carArray.length; i++) {
    if (carArray[i].length > 5) {
      throw new Error('[ERROR]: 잘못된 입력입니다.');
    }
  }

  return carArray;
}

export default CreateCar;