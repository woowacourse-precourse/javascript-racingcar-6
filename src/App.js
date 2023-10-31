import {Random, Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNamesBeforeParsing = await getCarInput();
    
    const carPositions = {};//setting cars' position 
    let carNames = parsing(carNamesBeforeParsing);
    
    const tryNum = await getTryNumInput();

    Console.print("");
    Console.print("실행 결과");
    for(let i=0; i<tryNum; i++){
      positionLoop(carNames, carPositions);
      printPositions(carPositions);
    }
    Console.print(`최종 우승자 : ${findWinners(carPositions).join(', ')}`);
  }
}

export default App;

const app = new App();
app.play()

async function getCarInput(){  
  let carNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  return carNameInput;
}

async function getTryNumInput(){
  let tryNumInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return tryNumInput;
}

function parsing(carNames){
  const strings = carNames.split(',');
  const parsedStrings =  [];

  for(let i=0; i<strings.length; i++){
    const str = strings[i].trim();
    validate(str);
    parsedStrings.push(str);
  }
  return parsedStrings;
}

function validate(carName){
  if (carName === '' || !/^[a-zA-Z]+$/.test(carName)){
    throw new Error("[Error] 문자열 오류")
  }
}


function getRandom(){
  let dice = Random.pickNumberInRange(0,9);
  return dice;
}

function getCheck(dice){
  if (dice < 4){
    return 0;
  }
  else return 1;
}

function updateCarPos(carName, carPositions, dice){
  if (!carPositions[carName]) {
    carPositions[carName] = 0;
  }
  carPositions[carName]+=getCheck(dice);
 }

function positionLoop(carNames, carPositions){
  for(let i=0; i<carNames.length; i++){
    const dice = getRandom();
    updateCarPos(carNames[i], carPositions, dice);
  }
}

function findWinners(carPositions){
  let maxPosition = -Infinity;
  let winners=[];

  for(const car in carPositions){
    if (carPositions[car]>maxPosition){
      maxPosition = carPositions[car];
    }
  }

  for(const car in carPositions){
    if (carPositions[car] === maxPosition){
      winners.push(car);
    }
  }
  return winners;
}

function printPositions(carPositions) {
  for (const car in carPositions) {
    Console.print(`${car} : ${'-'.repeat(carPositions[car])}`);
  }
  Console.print("");
}