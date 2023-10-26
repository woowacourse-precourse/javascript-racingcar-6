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

  async play() {
    const CAR_ARRAY = await this.getCarName();
    const TRY_NUM = await this.getTryNum();
    console.log(TRY_NUM);
  }
}

export default App;
