import { Console, MissionUtils } from "@woowacourse/mission-utils"; //이거 왜 없다고 하냐..?

class App {
  async play() {
    let cars = await this.getCarName(); // 배열상태
    let times = await this.getCount(); // 숫자형태
    this.validCheckAboutCarName(cars);
    this.validChedkAboutNumber(times);
   
    let forwordArry = this.sumAllofMovefunc(cars, times);
    this.resultOfWinner(cars, forwordArry);
    

  }
//---------------입력-------------------
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
//--------------횟수(숫자)유효성 판단--------------------
  validChedkAboutNumber(howMove) {
    if (!this.checkNoText(howMove)) {
      throw new Error(`[ERROR] 유효하지 않은 숫자 형식입니다.`);
    }
    if (!this.checkNumOverZero(howMove)) {
      throw new Error(`[ERROR] 0보다 큰 값이어야 합니다.`);
    }

  }

  checkNoText(howMove) {
  
    if (Number.isNaN(howMove)) {
      return false;
    } else return true;
  }

  checkNumOverZero(howMove) {
    if (howMove < 1) {
      return false;
    } else return true;
  }
//---------------자동차 이름 유효성 판단-------------------
  validCheckAboutCarName(carNameArry) {
    if (!this.checkDupl(carNameArry)) {
      throw new Error(`[ERROR] 중복된 이름입니다.`);
    }
    if (!this.checkNamelength(carNameArry)) {
      throw new Error(`[ERROR] 유효하지 않은 이름 길이입니다.`);
    }
  }
  
  checkDupl(carNameArry) {
    let carNameSet = new Set(carNameArry);
    if (carNameArry.length !== carNameSet.size) {
      return false;
    }
    return true;
  }

  checkNamelength(carNameArry) {
    for (let i = 0; i < carNameArry.length; i++) {

      if (carNameArry[i].length < 1 || carNameArry[i].length > 5) {
        return false;
      } 
    }return true;
  }
//----------------------------------------------------
  makeRandomNumber() {    
    let goStop = Number(MissionUtils.Random.pickNumberInRange(0, 9));

    return goStop;
  }

  forwordOrStop() {
    let randomnum = this.makeRandomNumber();
    let marker = '';
    if (4 <= randomnum &&randomnum <= 9) {
      marker = '-';
    } 
    return marker;
  }

//----------------------------------------------------
  sumAllofMovefunc(car, times) {
    let forwordArry = [...car]; // 배열 복제
    forwordArry.fill(''); // 배열의 모든 원소들을 매개변수로 받은 값으로 채워 준다
    // Console.print('length: ' + forwordArry.length);
    // Console.print('arr: ' + forwordArry);

    for (let i = 0; i < times; i++) {
      this.driveOneCar(car, forwordArry);
      Console.print("\n");
    }
    return forwordArry;
  }

  driveOneCar(car, forwordArry) {

    for (let i = 0; i < car.length ; i++) {
      // forwordArry[i] = '' + ''
      forwordArry[i] += this.forwordOrStop(); //foreach도 이렇게 넣으면 되는거 아닐까
      Console.print(`${car[i]} : ${forwordArry[i]}`);

    }
    return forwordArry;
  }

  resultOfWinner(car, forwordArry) { // sumAllofMovefunc받음.
   
    let winner = [];
    forwordArry.forEach(result => {
      winner.push(result.length);
    });
    // Console.print(winner);
    let forWinnerCarIndex = [];ßß
    let maximum = 0;
    let i;
    maximum = Math.max(...winner);
    // Console.print(maximum); // 테스트용 
    winner.forEach((result, i) => {
      if (result === maximum) {
        forWinnerCarIndex.push(i);
      }
    })
    
    //for (i = 0; i < winner.length; i++) {
      
      // // 현재 최댓값보다 더 크거나 같은 값이 나타난 경우 우승결과를 업데이트.
      // if (maximum <= winner[i]) {

      //   // 현재 최댓값보다 작았던 값들의 인덱스 값들은 초기화.
      //   if (maximum < winner[i]) {
      //     forWinnerCarIndex = [];
      //   };
      //   maximum = winner[i];
      //   forWinnerCarIndex.push(i);
     // }
    //}

    let finerWiner = [];
    for (i = 0; i < forWinnerCarIndex.length; i++) {
      finerWiner.push(car[forWinnerCarIndex[i]]);
    }
    
    Console.print("최종 우승자 : " + finerWiner.join(', '));
    // return finerWiner;//테스트용. 지워야 함.
  }


// 쉽게만 살아가면 재미없어 빙고! //


  // drivePersonerCar(cars, times) {
  //   let forwordArry = [];
  //   cars.forEach((name, index) => {

  //   //Console.print(`${name} : ${this.forwordOrStop()}`);  //name을 매개변수로 받는 0-9 랜덤값 받아서 - 출력하는 함수 여기 적음.
    
  //   });

  // }


 

}
//for test
 new App().play();
export default App;
