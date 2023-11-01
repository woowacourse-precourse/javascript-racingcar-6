import {Console, MissionUtils} from '@woowacourse/mission-utils';

class Car {
  constructor(name){
    this.name = name;
    this.position = 0;
  }
  
  move(){
    const random = MissionUtils.Random.pickNumberInRange(1,9);
    if (random >= 4){
      this.position +=1;
    }
  }
  
  getPosition(){
    return this.position;
  }
  
  printPosition(){
    return "-".repeat(this.position);
  }
}

const putCarNames = async ()=>{
  let carNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  carNames = carNames.split(',')
  return carNames;
}

const putRounds = async ()=>{
  let rounds = await Console.readLineAsync('"시도할 횟수는 몇 회인가요?"');
  rounds = parseInt(rounds);
  if (isNaN(rounds)){
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return rounds;
}

const race = (cars,rounds) => {
  console.log('\n실행 결과');
  for(let i=0;i<rounds;i++){
    cars.forEach(car => car.move());
    cars.forEach(car => Console.print(`${car.name} : ${car.printPosition()}`));
  }
};

const getWinners = (cars) => {
  const maxPosition = Math.max(...cars.map(car => car.getPosition()));
  return cars.filter(car => car.getPosition() === maxPosition).map(car => car.name);
};

const printWinners = (winners) => {
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
};

class App {
  async play() {
    try{
      const carNames = await putCarNames();
      const rounds = await putRounds();
      const cars = carNames.map(name => new Car(name));
      race(cars,rounds);
      
      const winners = getWinners(cars);
      printWinners(winners);
    } catch (error){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default App;
