import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  generateComputerNumber(USER_NAME) { //컴퓨터 랜덤 숫자 생성
      const COMPUTER_NUMBER = [];
      while (COMPUTER_NUMBER.length < USER_NAME) {
        const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!COMPUTER_NUMBER.includes(RANDOM_NUM)) {
          COMPUTER_NUMBER.push(RANDOM_NUM);
        }
      }
      return COMPUTER_NUMBER;
  }
  
  checkName(USER_NAME){ //사용자 이름 예외처리
    for (let i=0; i<USER_NAME.length; i++){
      if(USER_NAME[i].length>5){
        throw new Error();
      }
      /*
      if (USER_NAME[i].includes(' ')){
        throw new Error();
      } 이름에 공백이 포함된 경우를 예외처리 할 경우 포함
      */
    }
    return true;
  }

  matchStart(USER_NAME,MATCH_NUM){ //자동차 경주 시작
    const COUNT_NUM = [];
    for(let k=0; k<USER_NAME.length; k++){
      COUNT_NUM.push(0);
    }

    Console.print('실행 결과');
    for(let i=0; i<MATCH_NUM; i++){
      const COM_RANDOM_NUM=this.generateComputerNumber(USER_NAME.length); //랜덤 숫자가 4 이상인지 확인하고 전진
      for(let j=0; j<COM_RANDOM_NUM.length; j++){ 
        if (Number(COM_RANDOM_NUM[j])>=4){
          COUNT_NUM[j]+=1;
        }
      }
          
      for(let j=0; j<USER_NAME.length; j++){ //자동차 전진 결과 출력
        let test ='-';
        Console.print(USER_NAME[j] +" : "+test.repeat(COUNT_NUM[j]));
      }
      Console.print('');
    }

    let max =0; //우승자 출력
    for(let x=0; x<COUNT_NUM.length; x++){
      if (COUNT_NUM[x]>max) {
        max=COUNT_NUM[x];
      }
    }
    const WINNER_MEMBER = [];
    for(let y=0; y<COUNT_NUM.length; y++){
      if (COUNT_NUM[y]==max){
        WINNER_MEMBER.push(USER_NAME[y]);
      }
    }
    Console.print('최종 우승자 : ' + WINNER_MEMBER.map((member) => member).join(','));
  }

  async matchNum(USER_NAME){ //매치 수 입력
    try {
      const MATCH_NUM= await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      if (isNaN(MATCH_NUM)){
        throw new Error();
      }
      else{
        return this.matchStart(USER_NAME,MATCH_NUM);
      }    
    } catch (error) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }

  async play(){
    try {
      const USER_INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n");
      const USER_NAME = USER_INPUT.split(',');
      this.checkName(USER_NAME); 
      return this.matchNum(USER_NAME);    
       
    } catch (error) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }
}

const app = new App();
app.play();

export default App;