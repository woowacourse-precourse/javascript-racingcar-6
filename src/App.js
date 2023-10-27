import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

const print = (message) => {
  Console.print(message);
}

const readLineAsync = async (message) => {
  return await Console.readLineAsync(message);
}


/**
 * 게임 참가자 명단을 받는 기능
 * 입력 : x
 * return : 참가자 명단은 배열로 반환
 * 주의 : 참가자 이름이 5글자 초과면 ERROR
 */
const getParticipant = async () =>{
  const participants = await readLineAsync('경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)');
  const participantsArr = participants.split(',')

  // *** 리팩토링 하면서 함수로 뺴기 ***
  for(let name of participantsArr){
    if(name.length > 5){
      throw new Error('[ERROR] 참가자 이름이 5글자를 초과합니다.'); // 추후에 ERROR문구 상수로 빼기
    }
  }

  return participantsArr;
}

class App {
  async play() {
    const participants = await getParticipant()
  }
}

export default App;
