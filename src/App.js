class App {
  constructor() {
    //사용자 입력 받기
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  async play() {
    await this.startGame();
  }
  async startGame() {
    //차 이름 받기
    const carName = this.getCarName();
    //시도 횟수 받기
    const tryNum = this.getTryNum();
    //결과 받기
    const result = this.result(carName, tryNum);
    //최종우승자 받기
    const winner = this.winner();
    console.log(winner);
  }
}

export default App;
