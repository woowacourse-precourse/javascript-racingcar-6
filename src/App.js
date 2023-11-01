import { Console, Random } from "@woowacourse/mission-utils";

const NUMBER_RANGE = /^[1-9]+$/;

class App {
  async play() {
    const inputCar = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const racingCarList = inputCar.split(',');
    this.validateInputCar(racingCarList);

    const inputNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.validateInputNumber(inputNumber);
    Console.print('실행 결과');

    const distanceList = Array.from({length: racingCarList.length}, () => 0);
    for(let i = 0 ; i < inputNumber ; i++){
      racingCarList.forEach((carName, index) => {
        if(Random.pickNumberInRange(1, 9) >= 4){
          distanceList[index]++;
          Console.print(`${carName} : ${"-".repeat(distanceList[index])}`)
        }
      })
    }
    const maxDistance = Math.max(...distanceList);
    const winnerCarList = racingCarList.reduce((acc, carName, index) => {
      if(distanceList[index] === maxDistance){
        acc.push(carName);
      }
      return acc
    }, [])
    if(winnerCarList.length === 1){
      Console.print(`최종 우승자 : ${winnerCarList[0]}`)
    }else{
      Console.print(`최종 우승자 : ${winnerCarList.join(', ')}`)
    }
  }

  validateInputCar(carNameArray){
    carNameArray.forEach((carName) => {
      if(carName === "" || carName.length > 5){
        throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.')
      }
    })
  }

  validateInputNumber(inputValue){
    if(typeof Number(inputValue) !== 'number' || !NUMBER_RANGE.test(inputValue)){
      throw new Error('[ERROR] 시도할 횟수는 숫자 형식만 가능합니다.')
    }
    if(Number(inputValue) === 0){
      throw new Error('[ERROR] 1 이상의 숫자를 입력해주세요.')
    }
  }

}

export default App;
