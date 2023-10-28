import { MissionUtils } from "@woowacourse/mission-utils";
const {Console,Random} = MissionUtils;

class App {
  constructor() {
    let CARSNAME = [];
    let CARSGOCOUNT = [];
    let CARSRANK = [];
    let TRYDATA = 0;
  }
  async getCarsName() {
    const CARSDATA = await Console.readLineAsync("경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)" + "\n");
    this.CARSNAME = String(CARSDATA).trim().split(",");
    this.CARSNAME.map((word) => {
      if(word.length > 5) throw Error("[ERROR]이름은 5글자 까지 가능합니다.");
      else word
    });
    this.CARSRANK = new Array(this.CARSNAME.length).fill(0);
    this.CARSGOCOUNT = new Array(this.CARSNAME.length).fill("");

  }

  
  async play() {
    await this.getCarsName();

  }
}

export default App;
