import Racing from './Racing.js';

class App {
  async play() {
    let racing = new Racing();
    await racing.start();
  }
}

export default App;
