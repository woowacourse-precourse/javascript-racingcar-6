import { Console } from '@woowacourse/mission-utils';

export default class User {
  async getUserInputCarsNameArray(query) {
    let input = await Console.readLineAsync(query);
    input = input.replace(/ /g, '');
    const cars = await input.split(',');
    // console.log(cars);
    if (cars.some((car) => car.length > 5 || car === ''))
      throw new Error('[ERROR] 잘못된 입력입니다.');
    return cars;
  }
}
