class App {
  async play() {
    const MAX_CAR_NAME_LENGTH = 5;

    MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const input=await MissionUtils.Console.readLineAsync();
    const runners=input.split(',');
    runners.map((runner)=>{
      if (runner.length>MAX_CAR_NAME_LENGTH){
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.')
      }
    })

    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const try_number=await MissionUtils.Console.readLineAsync();
    if (isNaN(try_number)){
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    //경기 시작, 경기 상황 출력
    let scores=Array(5).fill(0);
    for (let round=0; round<try_number; round++){
      let race_str=[];
      scores=try_randomly(scores);
      runners.map((runner, index)=>{
        race_str.push(`${runner} : ${"-".repeat(scores[index])}`);
      })
      MissionUtils.Console.print(race_str.join('\n'));
    }


    function go_randomly(scores){
      let random_number;
      for (let i=0;i<scores.length;i++){
        random_number= MissionUtils.Random.pickNumberInRange(0, 9);
        // random_number=Math.floor(Math.random() * 10);
        if (random_number>3){ scores[i]=scores[i]+1; }
      }
      return scores;
    }
  }
}

export default App;
