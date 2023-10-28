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
  async getTry() {
    this.TRYDATA = await Console.readLineAsync("시도할 횟수를 입력하세요." + "\n");
    if(isNaN(this.TRYDATA)) throw Error("[ERROR]숫자를 입력해주세요.")
  }

  raceStart() {
    let RACE = "";
      for(let i = 0; i < this.CARSNAME.length; i++){
        let GOORSTOP = Random.pickNumberInRange(0,9);
        RACE += `${this.CARSNAME[i]} : `
        if(GOORSTOP >= 4){
          this.CARSGOCOUNT[i] += "-";
          RACE += this.CARSGOCOUNT[i];
          this.CARSRANK[i] += 1
        }else{
          RACE += this.CARSGOCOUNT[i];
        }
        RACE += "\n";
    }

    Console.print(RACE);
  }

  raceResult() {
    const WINNERNUM = Math.max(...this.CARSRANK);
    let WINNERS = "";
    for(let i = 0; i < this.CARSRANK.length; i++){
      if(this.CARSRANK[i] == WINNERNUM) WINNERS += this.CARSNAME[i];
    }
    
    Console.print(`최종 우승자 : ${WINNERS}`);

  }


  
  async play() {
    await this.getCarsName();
    await this.getTry();
    while(this.TRYDATA--){
      this.raceStart();
    }
    this.raceResult();
  }
}

export default App;
