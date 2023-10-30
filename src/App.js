import startGame from "./controller/GameController.js"

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    startGame();
  }
}

const app = new App();
app.play()

export default App;
