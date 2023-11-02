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

  

  

  async play() {
    const ins = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')
    const names = ins.split(',')
    if (!this.NameValid(names)){
      throw new Error('[ERROR]')
    }
    
  }
}
export default App;


const app = new App()
app.play()