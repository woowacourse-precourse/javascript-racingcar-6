import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  carName;
  numOfGame;
  
  //User 입력부분
  async getUserInput() {
    this.getCarName(()=>this.getNumber());
  }

  async getCarName(callback) {
    try{
      const inputValue = await MissionUtils.Console.readLineAsync('경주 할 자동차 이름(이름은 쉼표(,)기준으로 구분)');
      if(inputValue == undefined) throw new Error('[ERROR] 입력값이 없습니다.');
      this.carName = inputValue.split(',');
      if(this.carName.some((value)=>value === '')) throw new Error('[ERROR] 입력값이 없습니다.');
      if(this.carName.some((value)=>value.length>5)) throw new Error('[ERROE] 자동차 이름은 5자 이하로만 입력해주세요.');
    } catch (error) {
      MissionUtils.Console.print(error);
      return;
    }
    MissionUtils.Console.print(`자동차 이름은 : ${this.carName}`);
    callback();
  }

  async getNumber() {
    try {
      const inputValue = await MissionUtils.Console.readLineAsync('시도할 횟수');
      if(isNaN(inputValue)) throw new Error('[ERROR] 숫자만 입력해주세요.')
      if(inputValue === '' || inputValue === 0) throw new Error('[ERROR] 시도할 횟수는 1회 이상이어야합니다.');
      this.numOfGame = inputValue;
      return this.getGameResult();
    } catch (error) {
      MissionUtils.Console.print(error);
      return;
    }
  }

  //Game 진행부분

  generateRandomNum() {
    let randomNum = MissionUtils.Random.pickNumberInRange(0,9);
    return this.checkResult(randomNum);
  }

  checkResult(randomNum) {
    let result = '';
    if(randomNum > 3) {result = 'go';}
    else if(randomNum < 4) {result = 'stop';}
    return result;
  }

  getGameResult() {
    let i = 0;  
    let cnt = Array.from({length: this.carName.length}, () => 0);
    let showResult;
    while(i < this.numOfGame) {
      MissionUtils.Console.print(`${i+1}회차`)
      this.carName.forEach((e,idx )=>{
        let result = this.generateRandomNum();
        if(result === 'go') {
          cnt[idx]++;
        }
        showResult = '-'.repeat(cnt[idx]);
        MissionUtils.Console.print(`${this.carName[idx]} : ${showResult}`);
      }
      )
      i++;
      MissionUtils.Console.print('');
    }
    return this.showWinner(cnt); 
  }

  showWinner(score) {
    const winningScore = score.reduce( function (previous, current) { 
      return previous > current ? previous:current;
    });
    const scoreobj = this.carName.reduce((acc, curr, idx) => {
      acc[curr] = score[idx];
      return acc;
    }, new Object);
    let scoreTable = Object.entries(scoreobj);
    const winners = scoreTable.filter((car)=>{
      return car[1] === winningScore;
    }).map((car) => car[0])
    MissionUtils.Console.print(`최종 우승자 : ${winners}`);
  }

  async play() {
    this.getUserInput();
  }
}

const app = new App();
app.play();


export default App;
