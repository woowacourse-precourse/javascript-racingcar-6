import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    carNames.split(",").forEach(element => {
      if (element.length>5) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.")
    });
    if (carNames.length==0) throw new Error("[ERROR] 값을 입력해주세요.")
    
    const moves = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if (moves.length == 0 || isNaN(moves)) throw new Error("[ERROR] 올바른 숫자를 입력해주세요.")
    
    let moveResult = Object.fromEntries(carNames.split(",").map(name=>[name,""]))

    MissionUtils.Console.print("")
    MissionUtils.Console.print("실행 결과")

    for (let i=0; i<moves; i++){
      Object.keys(moveResult).map((key) => moveResult[key]+=this.moveCar())
      Object.entries(moveResult).map((value)=>MissionUtils.Console.print(`${value[0]} : ${value[1]}`))
      MissionUtils.Console.print("")
    }
    
    MissionUtils.Console.print(`최종 우승자 : ${this.getWinners(moveResult).join(', ')}`)
    
  }

  moveCar(){
    const result = MissionUtils.Random.pickNumberInRange(0, 9);
    if (result>=4) return "-"
    else return ""
  }

  getWinners(resultObj){
    const winningDistance = Math.max(...Object.values(resultObj).map(element=>element.length))
    const winners = Object.keys(resultObj).filter(key=>resultObj[key].length==winningDistance)
    return winners
  }
}

export default App;
