import { getAttempt, getParticipant } from "./Game/Settings";
import { progress } from "./Game/Progress";
import { terminateGame } from "./Game/End";

class App {

  constructor() {
    this.distance = {}; // 참가자 거리 저장
  }

  async play() {
    // 게임 세팅
    const participants = await getParticipant();
    const attempt = await getAttempt();
    
    // 게임 진행
    this.distance = await progress(attempt, participants, this.distance);

    // 게임 종료
    await terminateGame(participants, this.distance);
  }

}

export default App;
