import { Console, Random } from "@woowacourse/mission-utils";
class App {

  numberCheck(input){
    if (isNaN(input)){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  playerNumebrCheck(array){
    if (array.length <2){
      throw new Error("[ERROR] 최소 2명 이상 입력하세요");
    }
  }
  
  //사용자 입력, 분리
  async playerInfoInput(){
    const playerNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const playerList= playerNameInput.split(",").map(str => str.trim());
    this.playerNumebrCheck(playerList);

    return playerList;
  }

  //사용자 객체,키리스트 생성
  playerSetting(playerList){
    const players= {};
    for(let i =0; i<playerList.length;i++){
      const playerName=playerList[i];
      players[playerName] =0;
    }
    const playersKeyList=Object.keys(players);

    return {players,playersKeyList};
  }

  //게임 시작 및 출력
  gamePlay(playerObject,tryNum,keyList,) {

    for(let i =0; i<tryNum;i++){
      for (let item of keyList){
        const goForward=Random.pickNumberInRange(0,9);
        if(goForward>=4){
          playerObject[item]++;
        }
        Console.print(`${item} : `+"-".repeat(playerObject[item]));
      }
      Console.print("");
    }
  }

  async play() {


    const playerList = await this.playerInfoInput();
    const {players, playersKeyList}= this.playerSetting(playerList);

    //시도횟수 입력
    const numberAttempts = Number(await Console.readLineAsync("시도할 횟수는 몇 회인가요?"));
    this.numberCheck(numberAttempts);
   
    Console.print("실행 결과");
    this.gamePlay(players, numberAttempts,playersKeyList);

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
