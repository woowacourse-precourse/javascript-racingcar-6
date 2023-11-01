import Racing from './Racing.js';

class App {
  async play() {
    const racing = new Racing();
    await racing.start();
  }
}

export default App;
