import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const { car_list_input, play_time_input } = await setGame();
    const carList = makeCars(car_list_input);
    console.log(carList);
  }
}

const setGame = async () => {
  const car_list_input = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  validateNameList(car_list_input);
  const play_time_input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  return { car_list_input, play_time_input };
};

const makeCars = (list) => {
  const name_list = list.split(',');
  const car_list = [];
  name_list.forEach((name) => {
    const car = new Car(name);
    car_list.push(car);
  });

  return car_list;
};

const validateNameList = (nameList) => {
  const name_list = nameList.split(',');
  name_list.forEach((n) => {
    if (n.length > 5) throw new Error('[ERROR] 이름은 5자 이내로 입력해야 합니다.');
  });
};

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
}

export default App;
