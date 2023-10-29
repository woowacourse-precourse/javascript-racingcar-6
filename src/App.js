import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

const print = (message) => {
  Console.print(message);
}

const readLineAsync = async (message) => {
  return await Console.readLineAsync(message);
}

/**
 * 우승자 확인 기능
 * return : 우승자를 배열로 반환
 */
const checkWinner = async (participants) =>{
  const winner = [];
  for(let i = 0; i < participants.length; i++){
    const name = participants[i];
    winner.push([name, goStopCheck[name][1]]);
  }
  const sortedWinner = winner.sort( (a,b) => b[1]-a[1]);
  const returnWinner = [];
  let max = sortedWinner[0][1];
  for(let i = 0; i < sortedWinner.length; i++){
    if (sortedWinner[i][1] < max){
      break;
    }
    returnWinner.push(sortedWinner[i][0]);
  }
  return returnWinner;
}

/**
 * 매 게임 진행마다 참가자 진행 결과를 출력
 * return : 숫자로 반환
 * 주의 : 0 이하거나 숫자가 아니면 ERROR
 */
// *** 리팩토링 하기 ***
const goStopCheck = {}; // 이름 변경
const showResult = async (participants) => {
  let index = 0 ;
  // *** 리팩토링 하기 ***
  while(index < participants.length){
    // 함수로 빼기 -> return이 최종 결과 객체 ex) goStopCheck
    const randomNumber = Random.pickNumberInRange(0, 9);
    const name = participants[index];
    if(randomNumber >= 4) {
      goStopCheck[name] = goStopCheck[name] ? [goStopCheck[name][0]+'-', goStopCheck[name][1]+1] : ['-',1];
    } else {
      goStopCheck[name] = goStopCheck[name] ? [...goStopCheck[name]] : ['',0];
    }
    index ++;
  }
  // *** 리팩토링 하기, showResult 함수로 두기 *** 인자로 참가자 및 최종 진행 거리를 받고 출력만 함
  for(let i = 0; i < participants.length; i++){
    const result = `${participants[i]} : ${goStopCheck[participants[i]][0]}` 
    print(result);
  }

  // 매번 출력해야 함 => 보관 변수를 전역으로 지정
}

/**
 * 게임 진행 횟수를 입력받는 기능
 * return : 숫자로 반환
 * 주의 : 0 이하거나 숫자가 아니면 ERROR
 */
const getAttempt = async () =>{
  const attempt = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
  
  // *** 리팩토링 하면서 함수로 빼기 ***
  if(!Number(attempt)) throw new Error('[ERROR] 횟수는 숫자여야 합니다.');
  if(Number(attempt) <=0 ) throw new Error('[ERROR] 횟수는 0회 보다 커야합니다.');

  return Number(attempt);
}

/**
 * 게임 참가자 명단을 받는 기능
 * return : 참가자 명단은 배열로 반환
 * 주의 : 참가자 이름이 5글자 초과면 ERROR
 */
const getParticipant = async () =>{
  const participants = await readLineAsync('경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n');
  const participantsArr = participants.split(',');

  // *** 리팩토링 하면서 함수로 뺴기 ***
  for(let name of participantsArr){
    if(name.length > 5) throw new Error('[ERROR] 참가자 이름이 5글자를 초과합니다.'); // ERROR문구 상수로 빼기
  }

  return participantsArr;
}

class App {

  constructor() {
    this.count = 0;
  }

  async play() {
    // 게임 세팅
    const participants = await getParticipant()
    const attempt = await getAttempt();
    
    // 게임 진행
    // *** 리팩토링 할 때 함수로, 들여쓰기 오버 ***
    print('실행 결과');
    while(this.count < attempt){
      await showResult(participants);
      this.count += this.count+1;
    }

    // 게임 종료
    // *** 리팩토링 할 때 함수로***
    const winner = await checkWinner(participants);
    print(`최종 우승자 : ${winner.join(', ')}`);

  }
}

export default App;
