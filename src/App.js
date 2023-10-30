import { inputCarName } from "./InputCarName.js";
class App {
  async play() {
    const carNames = await inputCarName();
  }
}

const app = new App();
app.play();

export default App;
