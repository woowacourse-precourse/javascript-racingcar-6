import { Console, Random } from "@woowacourse/mission-utils";

// 자동차 객체를 배열에 추가
async function inputCars() {
  const input_name = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력해주세요.(쉼표(,) 기준으로 구분)"
  );
  const carArray = input_name.split(',');
  carArray.forEach(element => {
    if(element.length > 5) {
      throw new Error("[ERROR] 이름의 형식이 잘못되었습니다.")
    };
  });

  return carArray;
};

// 이동할 횟수 입력
async function inputTryNum() {
  const input_num = await MissionUtils.Console.readLineAsync(
    "시도할 횟수를 입력해주세요."
  );
  this.num = parseInt(input_num,10);

  if (isNaN(this.num)) {
    throw Error("[ERROR] 입력 형식이 잘못되었습니다.")
  };

  return input_num;
};

// 전진 조건 설정
function moveCar() {
  this.carArray.forEach((car) => {
    if (MissionUtils.Random.pickNumberInRange(0,9) >= 4) {
      car.distance += 1;
    }
  });
}

// 전진 표현
function distance() {
  this.carArray.forEach((car) => {
    const distanceText = '-'.repeat(car.distance);
    MissionUtils.Console.print(`${car.name} : ${distanceText}`);
  });
}


class App {

  async play() {}
}

export default App;
