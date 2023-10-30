import { getAttempt, getParticipant } from './Game/Settings';
import { progressGame } from './Game/Progress';
import { terminateGame } from './Game/End';

class App {

  constructor () {
    this.participants = [],
    this.attempt = 0,
    this.participantsDistance = {}
  }

  async play() {
    // 게임 세팅
    const participants = await getParticipant();
    const attempt = await getAttempt();

    // 게임 진행
    const participantsDistance = await progressGame(attempt, participants);

    // 게임 종료
    await terminateGame(participants, participantsDistance);
  }
}

export default App;
