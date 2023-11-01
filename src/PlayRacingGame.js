import { Console, Random } from "@woowacourse/mission-utils";
import { checkLength, checkSeparator, checkIsNumber } from "./validation.js";

class PlayRacingGame {
  play() {
    this.getName();
  }

  async getName() {
    const input = await Console.readLineAsync("경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n");

    if (checkSeparator(input)) {
      const names = input.split(",");
      let flag = true;
      names.map((ele) => {
        try {
          checkLength(ele);
        } catch (e) {
          flag = false;
          console.error(e);
        }
      });
      if(flag){
        this.racing(names);
      }
      
    } else {
      checkLength(input);
    }
  }

  async getNumber() {
    const num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    try{
      checkIsNumber(num);
    }catch(e){
      console.error(e);
    }
    

    return Number(num);
  }

  async racing(names) {
    const number = await this.getNumber();
    Console.print("\n");
    const cnt = new Array(names.length).fill(0);

    Console.print("실행 결과");
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < names.length; j++) {
        let randomNumber = this.makeRandomNumber();

        if (randomNumber >= 4) {
          cnt[j] += 1;
        }
      }
      this.printCnt(names, cnt);
    }

    this.findWinner(names, cnt);
  }

  makeRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  printCnt(names, cnt) {
    for (let i = 0; i < names.length; i++) {
      Console.print(`${names[i]} : ${"-".repeat(cnt[i])}`);
    }

    Console.print("\n");
  }

  findWinner(names, cnt){
    const winCnt = Math.max(...cnt);
    const winners = [];
    
    for(let i=0; i<names.length; i++){
      if(cnt[i] === winCnt){
        winners.push(names[i]);
      }
    }

    Console.print(`최종 우승자는 : ${winners.join(", ")}`);
  }
}

export default PlayRacingGame;
