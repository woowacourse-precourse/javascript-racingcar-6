import getPlayInfo from "./getPlayInfo";
import playGame from "./playGame";

const player = {};
class App {
  async play() {
    const [PARTICIPANTS, TRIALS] = await getPlayInfo();
    PARTICIPANTS.map((participant) => {
      if (participant.length != 0) {
        player[participant] = "";
      }
    });
    for (let i = 0; i < TRIALS; i++) {
      playGame(player);
    }
  }
}

export default App;
