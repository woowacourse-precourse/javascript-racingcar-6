import { getAttempt, getParticipant } from './Game/Settings';
import { progress } from './Game/Progress';
import { terminateGame } from './Game/End';

class App {
  async play() {
    // 게임 세팅
    const participants = await getParticipant();
    const attempt = await getAttempt();

    // 게임 진행
    const participantsDistance = await progress(attempt, participants);

    // 게임 종료
    await terminateGame(participants, participantsDistance);
  }
}

export default App;
