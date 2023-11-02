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
      Console.print('\n')
    }

  }
}
export default App;


const app = new App()
app.play()