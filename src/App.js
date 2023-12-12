import Racing from './Racing.js';

class App {
  async play() {
    const racing = new Racing();
    await racing.getCars();
    await racing.getTryNum();
    racing.startRacing();
  }
}

export default App;
