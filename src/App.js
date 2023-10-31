import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const nameInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const tryNum = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const names = nameInput.split(',')

    let result = []
    this.len_Check(result, names)

    MissionUtils.Console.print('\n실행 결과')
    this.run_car(tryNum, names, result)

    let maxNum = -1;
    let winners = [];
    for (let i = 0; i < result.length; i++){
      if (maxNum < result[i].length){
        maxNum = result[i].length;
        winners = [names[i]];
      } else if (maxNum == result[i].length){
        winners.push(names[i]);
      }
    }

    this.show_winners(winners)
  }
  
  len_Check(result, names){
    for(let i = 0; i < names.length; i++){
      if(names[i].length > 5){
        throw new Error("[ERROR] 이름의 길이가 5를 초과했습니다 (길이 > 5)");
      } else if(names[i].length == 0){
        throw new Error("[ERROR] 비어있는 이름을 작성하였습니다. (길이 = 0)");
      }
      result.push('');
    }
  }

  run_car(tryNum, names, result){
    for(let i = 0; i < tryNum; i++){
      for(let n = 0; n < names.length; n++){
        let randNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if(randNum >= 4){
          result[n] += '-';
        }
      }
      for(let n = 0; n < names.length; n++){
        MissionUtils.Console.print(names[n] + ' : ' + result[n]);
      }
      MissionUtils.Console.print('');
    }
  }

  show_winners(winners){
    let dap = '최종 우승자 : '
    for (let i = 0; i < winners.length; i++){
      if (i == winners.length - 1) {
        dap += winners[i];
      } else{
        dap += winners[i] + ', ';
      }
    }
    MissionUtils.Console.print(dap);
  }
}

export default App;
