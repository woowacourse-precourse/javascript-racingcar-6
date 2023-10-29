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
  
  Check_Name(){} //이름 예외 처리

  Check_Match_Num(MATCH_NUM){}//숫자 예외 처리

  async play() {
    
    const USER_INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n");
    const USER_NAME = USER_INPUT.split(',');
    this.Check_Name(USER_NAME);

    const MATCH_NUM= await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    this.Check_Match_Num(MATCH_NUM);

    const COUNT_NUM = [];
    for(let k=0; k<USER_NAME.length; k++){ //카운트 배열 초기화
      COUNT_NUM.push(0);
    }

    
    Console.print('실행 결과');
    for(let i=0; i<MATCH_NUM; i++){

      const COM_RANDOM_NUM=this.generateComputerNumber(USER_NAME.length); //컴퓨터 랜덤숫자
      Console.print('컴퓨터 랜덤 숫자 : '+COM_RANDOM_NUM);

      for(let j=0; j<COM_RANDOM_NUM.length; j++){ //카운트 배열 저장
        if (Number(COM_RANDOM_NUM[j])>=4){
          COUNT_NUM[j]+=1;
        }
      }
      Console.print(COUNT_NUM);


      for(let j=0; j<USER_NAME.length; j++){ //결과 출력
        let test ='-';
        Console.print(USER_NAME[j] +" : "+test.repeat(COUNT_NUM[j]));
      }
      
    }
    
  }
}
export default App;

