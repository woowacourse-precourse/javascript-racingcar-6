import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const racers = await this.getRacer();
    const times = await Console.readAsyncLine("시도할 횟수는 몇 회인가요?\n");
    if(isNaN(times))  throw new Error("[Error] 시도 횟수는 숫자 형식만 가능합니다.")


  }

  async getRacer() {
    const racers = (await Console.readAsyncLine("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")).split(",");
    if(racers.filter(el=>el.length>5).length>0)  throw new Error("[Error] 자동차 이름은 5자 이하로만 입력할 수 있습니다.");
    return racers;
  }

  doRace(racers, times) {
    let length = racers.map(_=>0);
    for(let i=0;i<times;i++) {
      length = getLength(length);
      this.printCurrentRace(racers, length);
      Console.print("");
    }
    return length;
  }

  getLength(length) {
    return length.map(len=>{
      const num = Random.pickNumberInRange(0,9);
      return num>4 ? len+1 : len;
    })
  }

  printCurrentRace(racers, length) {
    racers.forEach((racer,idx)=>{
      const lenPrint = "_".repeat(length[idx]);
      Console.print(racer+" : "+lenPrint);
    })
  }

  EndRace(racers, length) {

  }
}

export default App;
