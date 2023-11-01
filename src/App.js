import { Console, Random } from "@woowacourse/mission-utils";

class App {

  nameCheck (name) {
    for (let i=0; i<name.length; i++) {
      if (name[i].length > 5) {
        throw new Error("[ERROR] 이름은 5글자 이하로 정해주세요.");
      } else if (!name[i].trim()) {
        throw new Error("[ERROR] 공백은 이름으로 사용할 수 없습니다.");
      }
    }
  }

  numberCheck (num) {
    if (!Number(num)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    } else if (Number(num) <= 0) {
      throw new Error("[ERROR] 1이상의 수를 입력해주세요.");  
    }
  }

  move(person, point) {
    for(let i = 0; i < person.length; i++) {
      const randomNumber = Random.pickNumberInRange(0,9);
      if (randomNumber >= 4) {
        point[person[i]] += '-';
      }   
    }
    for(let i = 0; i < person.length; i++) {
      Console.print(person[i] + " : " + point[person[i]]);
    }
    Console.print("");
  }

  findMax (person, point) {
    let maxNum = 0;
    for (let i = 0; i < person.length; i++) {
      maxNum = Math.max(point[person[i]].length, maxNum)
    }
    return maxNum;
  }

  winner(num, person, point) {
    const winnerArray = [];
    for(let i =0; i < person.length; i++) {
      if (point[person[i]].length === num) {
        winnerArray.push(person[i]);
      }
    }
    return winnerArray
  }

  async play() {
    const participantsInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const participants = await participantsInput.split(",");

    this.nameCheck(participants);

    const scoreTable = await participants.reduce((acc, participant) => {
      acc[participant] = ''
      return acc
    },{})
    
    const tryNum = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.numberCheck(tryNum);
    await Console.print("\n실행 결과");

    for (let i = 0; i < tryNum; i++){
      this.move(participants, scoreTable);
    }

    const max_val = this.findMax(participants, scoreTable);

    const winners = this.winner(max_val, participants, scoreTable);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
  }

export default App;