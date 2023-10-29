import { Console, MissionUtils } from "@woowacourse/mission-utils"; //이거 왜 없다고 하냐..?

class App {
  async play() {
    let cars = await this.getCarName();
    let times = await this.getCount();
    this.validCheckAboutName(cars);
    this.validChedkAboutNumber(times);
    

  }

  async getCarName() {
    const carsName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    let carNameArry = String(carsName).split(','); // 배열형태
    //MissionUtils.Console.print(carNameArry);
    return carNameArry;
  }

  async getCount() {
    const howMove = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    
    return Number(howMove);
  }

  validChedkAboutNumber(howMove) {
    if (!this.checkNoText(howMove)) {
      throw new Error(`[ERROR] 유효하지 않은 숫자 형식입니다.`);
    }
    if (!this.checkNumOverZero(howMove)) {
      throw new Error(`[ERROR] 0보다 큰 값이어야 합니다.`);
    }

  }

  checkNoText(howMove) {
    Console.print(Number.isNaN(howMove));
    if (Number.isNaN(howMove)) {
      return false;
    } else return true;
  }

  checkNumOverZero(howMove) {
    if (howMove < 1) {
      return false;
    } else return true;
  }





  validCheckAboutCarName(carNameArry) {
    if (!this.checkDupl(carNameArry)) {
      throw new Error(`[ERROR] 중복된 이름입니다.`);
    }
    if (!this.checkNamelength(carNameArry)) {
      throw new Error(`[ERROR] 유효하지 않은 이름 길이입니다.`);
    }
    
  }

  // removeEmptyInput(input) { // input안에 getCarName() return 값 들어감.
  //     for(let i = 0; i < input.length; i++) {
  //       let removeEmpty = input[i].trim();
  //     }
  // }//일단 이렇게 하긴 했는데 이걸 forEach로 하고 싶음!
  
  checkDupl(carNameArry) {
    let carNameSet = new Set(carNameArry);
    if (carNameArry.length !== carNameSet.size) {
      return false;
    }
    return true;
  }

  checkNamelength(carNameArry) {
    for (let i = 0; i < carNameArry.length; i++) {
      Console.print(carNameArry[i].length);
      if (carNameArry[i].length < 1 || carNameArry[i].length > 5) {
        return false;
      } 
    }return true;
  }










}
//for test
new App().play();
export default App;
