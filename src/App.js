import { getAttempt } from './Game/getAttempt';
import { getParticipant } from './Game/getParticipant';
import { progressGame } from './Game/progressGame';
import { terminateGame } from './Game/terminateGame';

class App {
  async play() {
    // 게임 세팅
    const participants = await getParticipant();
    const attempt = await getAttempt();

    // 게임 진행
    const participantsDistance = await progressGame(attempt, participants);

    // 우승자 확인
    await terminateGame(participants, participantsDistance);
  }
}

export default App;
