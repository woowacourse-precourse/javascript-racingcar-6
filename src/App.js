import Race from './controller/Race';

class App {
  async play() {
    await Race.start();
  }
}

export default App;
