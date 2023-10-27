class App {
  #status = "idle";

  #cars = [];

  #round = null;

  async play() {
    this.#transition("setting");
  }

  async #transition(status) {
    this.#status = status;
    await this.#transitionEffect();
  }

  async #transitionEffect() {
    switch (this.#status) {
      case "idle": {
        break;
      }
      case "setting": {
        break;
      }
      case "start": {
        break;
      }
      case "finish": {
        break;
      }
      default: {
        break;
      }
    }
  }
}

export default App;
