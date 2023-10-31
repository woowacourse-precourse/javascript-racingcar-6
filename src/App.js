import {Random, Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNamesBeforeParsing = await getCarInput();
    const carPositions = {};//setting cars' position 
    console.log(carNamesBeforeParsing);
    let carNames = parsing(carNamesBeforeParsing);
    console.log(carNames[0]);
    const tryNum = await getTryNumInput();
    console.log(tryNum);

    for(let i=0; i<tryNum; i++){
      positionLoop(carNames, carPositions);
    }
    console.log(carPositions);
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
    throw Error("[Error] ")
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
  console.log(getCheck(dice));
}

function positionLoop(carNames, carPositions){
  for(let i=0; i<carNames.length; i++){
    const dice = getRandom();
    console.log(dice);
    updateCarPos(carNames[i], carPositions, dice);
  }
}