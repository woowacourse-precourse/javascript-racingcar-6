import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

const print = (message) => {
  Console.print(message);
}

const readLineAsync = async (message) => {
  return await Console.readLineAsync(message);
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

  async play() {
    const participants = await getParticipant()
    const attempt = await getAttempt();

  }
}

export default App;
