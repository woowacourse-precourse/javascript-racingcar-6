import { Console, Random } from "@woowacourse/mission-utils";

const INPUT_NUMBER_ERR_MSG = "[ERROR] 숫자가 잘못된 형식입니다."
const PLAYER_NUMBER_ERR_MSG = "[ERROR] 최소 2명 이상 입력하세요"
const PLAYER_NAME_ASK_MSG="경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
const ATTEMPT_NUM_ASK_MSG = "시도할 횟수는 몇 회인가요?\n"
const FINAL_WINNER_MSG= "최종 우승자"
const RESULT_MSG="실행 결과"


class App {

  // 에러처리
  numberCheck(input){
    if (isNaN(input)){
      throw new Error(INPUT_NUMBER_ERR_MSG);
    }
  }

  playerNumebrCheck(array){
    if (array.length <2){
      throw new Error(PLAYER_NUMBER_ERR_MSG);
    }
  }
  
  //사용자 입력, 분리
  async playerInfoInput(){
    const inputName = await Console.readLineAsync(PLAYER_NAME_ASK_MSG);
    const playerList= inputName.split(",").map(str => str.trim());
    this.playerNumebrCheck(playerList);

    return playerList;
  }

  //사용자 객체,키리스트 생성
  playerSetting(playerList){
    const playerObject= {};
    for(let i =0; i<playerList.length;i++){
      const playerName=playerList[i];
      playerObject[playerName] =0;
    }
    const objectKeyList=Object.keys(playerObject);

    return {playerObject,objectKeyList};
  }

  //게임 시작 및 출력
  gamePlay(playerObject,tryNum,objectKeyList) {

    for(let i =0; i<tryNum;i++){
      for (let item of objectKeyList){
        const goForward=Random.pickNumberInRange(0,9);
        if(goForward>=4){
          playerObject[item]++;
        }
        Console.print(`${item} : `+"-".repeat(playerObject[item]));
      }
      Console.print("");
    }
  }
  
  //우승자 찾기
  findWinner(playerObject,playersKeyList){
    let max=0;
    const winnerList= [];

    for (let item of playersKeyList){
      if (playerObject[item]>max){
        max=playerObject[item];
      }
    }

    for (let item of playersKeyList){
      if(playerObject[item]===max){
        winnerList.push(item);
      }
    }    

    //출력
    const output=winnerList.join(", ");
    Console.print(`${FINAL_WINNER_MSG} : ${output}`);
  }


  async play() {


    const playerList = await this.playerInfoInput();
    const {playerObject:players, objectKeyList:playersKeyList} = this.playerSetting(playerList);
    //시도횟수 입력
    const numberAttempts = Number(await Console.readLineAsync(ATTEMPT_NUM_ASK_MSG));
    this.numberCheck(numberAttempts);

    Console.print("\n"+RESULT_MSG);

    this.gamePlay(players, numberAttempts,playersKeyList);
    this.findWinner(players, playersKeyList);
  }
}

export default App;
