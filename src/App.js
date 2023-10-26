import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  async getCarName(){
    const CAR_NAMES = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    if(CAR_NAMES.endsWith(',')){
      throw new Error("[ERROR] 마지막 쉼표 뒤에 자동차 이름을 입력하지 않았습니다.");
    }

    const ARRAY_CARS = CAR_NAMES.split(',');
    const SPACING = /\s/;
    for(let i = 0; i < ARRAY_CARS.length; i++){
      //console.log(ARRAY_CARS[i]);
      if(typeof ARRAY_CARS[i] !== 'string' || ARRAY_CARS[i].length > 5 ){//|| SPACING.text(ARRAY_CARS[i])){
        throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
      }
    }

    return ARRAY_CARS;
  }

  async getTryNum(){
    const TRY = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if (isNaN(TRY) || TRY < 1){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return TRY
  }

  async printResult(CAR_ARRAY, TRY_NUM){
    MissionUtils.Console.print("\n실행 결과");
    
    let result = [];
    const CAR_NUM = CAR_ARRAY.length;
    for(let k = 0; k < CAR_NUM; k++){
      result.push('');
    }

    for(let i = 0; i < TRY_NUM; i++){
      result = await this.executeRandom(CAR_NUM, result);

      for(let j = 0; j < CAR_NUM; j++){
        MissionUtils.Console.print(`${CAR_ARRAY[j]} : ${result[j]}`);
      }
      MissionUtils.Console.print("");
    }

    return result;
  }

  async executeRandom(CAR_NUM, result){
    for(let i = 0; i < CAR_NUM; i++){
      if(MissionUtils.Random.pickNumberInRange(0, 9) >= 4){
        result[i] = result[i] + '-'
      }
    }
    return result;
  }

  

  async printWinner(CAR_ARRAY, RESULT){
    let maxLength = 0;
    let winner = [];
    for(let i = 0; i < RESULT.length; i++){
      const CURRENTLENGTH = RESULT[i].length;
      if(CURRENTLENGTH > maxLength){
        maxLength = CURRENTLENGTH;
        winner = [CAR_ARRAY[i]];
      }
      else if(CURRENTLENGTH == maxLength){
        winner.push(CAR_ARRAY[i]);
      }
    }
    
    let winnerName = '';
    for(let j = 0; j < winner.length; j++){
      winnerName = winnerName + winner[j] + ', ';
    }

    winnerName = winnerName.slice(0, -2);
    MissionUtils.Console.print(`최종 우승자 : ${winnerName}`);

  }

  async play() {
    const CAR_ARRAY = await this.getCarName();
    const TRY_NUM = await this.getTryNum();
    const RESULT = await this.printResult(CAR_ARRAY, TRY_NUM);
    await this.printWinner(CAR_ARRAY, RESULT);
  }
}

export default App;
