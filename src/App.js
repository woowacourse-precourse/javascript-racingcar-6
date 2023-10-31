import startRacing from './functions/startRacing';

class App {
  constructor() {
    this.startRacing = startRacing;
  }

  async play() {
    await this.startRacing();
  }
}

export default App;
