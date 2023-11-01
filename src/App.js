import { MissionUtils } from "@woowacourse/mission-utils";

export async function getCarName() {
  let CarName = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  CarName = CarName.split(","); //입력받은 문자열을 ","를 기준으로 배열로 저장
  if (CarName.some((Element) => Element.length > 5)) {
    throw new Error("[ERROR] 이름이 5자리를 초과하였습니다.");
  }
  return CarName;
}

export async function getRacingNumber() {
  let RacingNumber = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  if (isNaN(Number(RacingNumber))) {
    throw new Error("[ERROR] 숫자의 형식이 잘못되었습니다.");
  }
  return RacingNumber;
}

export async function goRacing(CarName, RacingNumber) {
  let Distance = Array(CarName.length).fill(0); //이동 거리를 저장할 배열
  let Road = new Array(CarName.length).fill().map(() => []); //"-"문자를 이동 거리만큼 저장할 배열
  while (Distance.every((Element) => Element < RacingNumber)) {
    //Distance의 원소중 하나라도 RacingNumber보다 커지면 반복문 종료
    printDistance(CarName, Distance, Road);
  }
  return Distance;
}

export function printDistance(CarName, Distance, Road) {
  let i;
  for (i = 0; i < CarName.length; i++) {
    //각 자동차별 이름과 이동거리를 "-"문자로 출력
    moveForward(Road, Distance, i);
    MissionUtils.Console.print(CarName[i] + " : " + Road[i].join("")); //Road 배열의 원소들을 스트링으로 출력
  }
  MissionUtils.Console.print("");
}

export function moveForward(Road, Distance, index) {
  let RandomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  if (RandomNumber > 3) {
    //랜덤 값이 4 이상일 때, 이동거리 증가 및 "-" 문자 저장
    Distance[index]++;
    Road[index].push("-");
  }
}

export function printWinner(Distance, CarName, RacingNumber) {
  let i;
  let Winner = [];
  for (i = 0; i < CarName.length; i++) {
    //이동 거리가 레이싱넘버와 똑같은 자동차는 Winner 배열에 저장
    if (Distance[i] == RacingNumber) {
      Winner.push(CarName[i]);
    }
  }
  MissionUtils.Console.print("최종 우승자 : " + Winner.join(", ")); //Winner 배열의 원소들을 스트링으로 출력
  return Winner;
}

class App {
  async play() {
    try {
      const CarName = await getCarName();
      const RacingNumber = await getRacingNumber();
      MissionUtils.Console.print("\n실행결과");
      const Distance = await goRacing(CarName, RacingNumber);
      printWinner(Distance, CarName, RacingNumber);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
