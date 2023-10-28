import { Console, Random } from "@woowacourse/mission-utils";
class App {

  async play() {
    //사용자 입력, 분리
    const playerNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const playerList= playerNameInput.split(",").map(String);

    const players= {};

    //사용자 객체생성
    for(let i =0; i<playerList.length;i++){
      const playerName=playerList[i];
      players[playerName] =0;
    }

    //사용자 객체 키 리스트
    const playersKeyList=Object.keys(players);
    //시도횟수 입력
    const trynumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    Console.print("실행 결과");

    //게임 시작 및 출력
    for(let i =0; i<trynumber;i++){
      for (let item of playersKeyList){
        const goForward=Random.pickNumberInRange(0,9);
        if(goForward>=4){
          players[item]++;
        }
        Console.print(`${item} : `+"-".repeat(players[item]));
      }
      Console.print("");
    }



    
    
    //최대값찾기
    let max=0;
    const winnerList= [];

    for (let item of playersKeyList){
      if (players[item]>max){
        max=players[item];
      }
    }

    for (let item of playersKeyList){
      if(players[item]===max){
        winnerList.push(item);
      }
    }    

    //최종 우승자 출력
    const output=winnerList.join(", ");
    Console.print(`최종 우승자 : ${output}`);

  }
}

export default App;
