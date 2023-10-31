import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const { car_list_input, play_time_input } = await setGame();
    const car_List = makeCars(car_list_input);
    playGame(car_List, play_time_input);
    const winner = getResult(car_List);
    Console.print(`최종 우승자 : ${winner}`);
  }
}

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  move() {
    this.distance += 1;
  }
  getDistance() {
    return `${this.name} : ${'-'.repeat(this.distance)}`;
  }
}

const setGame = async () => {
  const car_list_input = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  validateNameList(car_list_input);
  const play_time_input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
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

const playGame = (car_list, time) => {
  Console.print('실행결과');

  let cur_time = 0;
  while (cur_time < time) {
    moveOnce(car_list);
    cur_time += 1;
  }
};

const getResult = (car_list) => {
  let winner = [];
  car_list.forEach((car, idx) => {
    if (idx === 0 || winner[0].distance < car.distance) {
      winner = [car];
    } else if (winner[0].distance === car.distance) {
      winner.push(car);
    }
  });
  return winner.map((car) => car.name).join(',');
};

const moveOnce = (car_list) => {
  car_list.forEach((car) => {
    const num = Random.pickNumberInRange(0, 9);
    if (num >= 4) {
      car.move();
    }
  });
  const result = car_list.map((car) => car.getDistance()).join('\n');
  Console.print(`${result}\n`);
};

export default App;
