import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let cars = await this.getCarName();
    let times = await this.getCount();
    Console.print("\n");
    this.validCheckAboutCarName(cars);
    this.validCheckAboutNumber(times);
    let forwordArry = this.printEachProcess(cars, times);
    let finerWiner = this.resultOfWinner(cars, forwordArry);
    Console.print("최종 우승자 : " + finerWiner.join(', '));
  }

//---------------입력-------------------
  async getCarName() {
    const carsName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    let carNameArry = String(carsName).split(',');

    return carNameArry;
  }

  async getCount() {
    const howMove = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    
    return Number(howMove);
  }

//--------------횟수(숫자)유효성 판단--------------------
  validCheckAboutNumber(howMove) {
    if (Number.isNaN(howMove)) {
      throw new Error(`[ERROR] 유효하지 않은 숫자 형식입니다.`);
    }
    if (howMove < 1) {

      throw new Error(`[ERROR] 0보다 큰 값이어야 합니다.`);
    }
  }

//---------------자동차 이름 유효성 판단-------------------
  validCheckAboutCarName(carNameArry) {
    if (this.checkDupl(carNameArry)) {
      throw new Error(`[ERROR] 중복된 이름입니다.`);
    }
    if (this.checkNamelength(carNameArry)) {
      throw new Error(`[ERROR] 유효하지 않은 이름 길이입니다.`);
    }
  }
  
  checkDupl(carNameArry) {
    let carNameSet = new Set(carNameArry);
    if (carNameArry.length !== carNameSet.size) {
      return true;
    }
    return false;
  }

  checkNamelength(carNameArry) {
    for (let i = 0; i < carNameArry.length; i++) {
      if (carNameArry[i].length < 1 || carNameArry[i].length > 5) {
        return true;
      } 
    }
    return false;
  }
//직진, 정지 판단 ----------------------------------------------------
 
  forwordOrStop() {
    let randomnum = Number(MissionUtils.Random.pickNumberInRange(0, 9));
    let marker = '';
    if (4 <= randomnum && randomnum <= 9) {
      marker = '-';
    } 

    return marker;
  }

//----------------------------------------------------

  printEachProcess(car, times) {
    let forwordArry = [...car];
    forwordArry.fill('');

    for (let i = 0; i < times; i++) {
      this.driveOneCar(car, forwordArry);
      Console.print("\n");
    }

    return forwordArry;
  }

  driveOneCar(car, forwordArry) {
    // for (let i = 0; i < car.length ; i++) {
    //   forwordArry[i] += this.forwordOrStop(); //foreach도 이렇게 넣으면 되는거 아닐까
    //   Console.print(`${car[i]} : ${forwordArry[i]}`);
    // }
    car.forEach((name, index) => {
      forwordArry[index] += this.forwordOrStop();
      Console.print(`${name} : ${forwordArry[index]}`);
    })

    return forwordArry;
  }

  resultOfWinner(car, forwordArry) { // printEachProcess(의 마지막)받음.
   
    let winner = [];
    forwordArry.forEach(result => {
      winner.push(result.length);
    });

    let forWinnerCarIndex = [];
    let maximum = Math.max(...winner);

    winner.forEach((result, index) => {
      if (result === maximum) {
        forWinnerCarIndex.push(index);
      }
    })
 
    let finerWiner = [];
    for (let i = 0; i < forWinnerCarIndex.length; i++) {
      finerWiner.push(car[forWinnerCarIndex[i]]);
    }

    return finerWiner;
  }

}

export default App;