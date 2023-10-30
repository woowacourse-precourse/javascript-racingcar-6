import getPlayInfo from "./getPlayInfo";

const player = {};
class App {
  async play() {
    const [PARTICIPANTS, TRIALS] = await getPlayInfo();
    PARTICIPANTS.map((participant) => {
      if (participant.length != 0) {
        player[participant] = "";
      }
    });
  }
}

export default App;
