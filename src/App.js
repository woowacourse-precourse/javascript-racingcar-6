import startRacing from './functions/startRacing/index.js';

class App {
  async play() {
    await startRacing();
  }
}

export default App;
