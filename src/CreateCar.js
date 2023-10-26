import { Console } from '@woowacourse/mission-utils';

async function CreateCar() {
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