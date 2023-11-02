import { MissionUtils, Console, Random } from "@woowacourse/mission-utils";


class App {
  
  NameValid(names){
    if (names.length <= 0){
      return false
    }
    if (names.every(name => name.length <= 5)){
      return true
    }
    else{
      return false
    }
  }

  Move(race){
    for (const key in race){
      if (Random.pickNumberInRange(0,9) >= 4){
        race[key] += 1
      }
    }
  }

  MoveStatus(race){
    for (const key in race){
      const hyphen = '-'.repeat(race[key])
      Console.print(key+' : '+ hyphen)
    }
  }

  FindWinner(race){
    const max = Math.max(...Object.values(race));
    const keys = Object.keys(race).filter(key => race[key] === max);
    return keys;
  }

  

  async play() {
    const ins = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')
    const names = ins.split(',')
    if (!this.NameValid(names)){
      throw new Error('[ERROR]')
    }
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tries = parseInt(input, 10);
    if (isNaN(tries) || tries <= 0){
      throw new Error('[ERROR]')
    }
    
    Console.print('\n')

    let race = {}
    for (let i = 0 ; i < names.length; i++){
      race[names[i]] = 0
    }

    Console.print('실행결과')
    for (let i = 0 ; i < tries; i++){
      this.Move(race)
      this.MoveStatus(race)
      Console.print('\n')
    }

    const winners = this.FindWinner(race)
    Console.print('최종 우승자 : ' + winners.join(', '))
  }
}
export default App;


const app = new App()
app.play()