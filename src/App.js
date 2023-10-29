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

    Check_Name(USER_NAME){
        for (let i=0; i<USER_NAME.length; i++){
            if(USER_NAME[i].length>5){
              throw new Error();
            }
            if (USER_NAME[i].includes(' ')){
              throw new Error();
            }
            if (Number.isNaN(USER_NAME[i])){
              throw new Error();
            }
        }
        return true;
    }
    
    Match_Start(USER_NAME,MATCH_NUM){

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
        let max =0;
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


    async Match_Num(USER_NAME){
        try {
            const MATCH_NUM= await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
            if (isNaN(MATCH_NUM)){
                throw new Error();
            }
            else{
                return this.Match_Start(USER_NAME,MATCH_NUM);
            }    
        } catch (error) {
            throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
        }
    }

    async Game_Set(){
        try {
            const USER_INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n");
            const USER_NAME = USER_INPUT.split(',');
            this.Check_Name(USER_NAME); //사용자 이름 체크
            return this.Match_Num(USER_NAME);
            
        } catch (error) {
            throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
        }
    }

    async play(){
        return this.Game_Set();
    }
  
}

const app = new App();
app.play();

export default App;