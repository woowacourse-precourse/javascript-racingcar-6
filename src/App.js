import getPlayInfo from "./getPlayInfo";

class App {
  async play() {
    const [PARTICIPANTS, TRIALS] = await getPlayInfo();
  }
}

export default App;
