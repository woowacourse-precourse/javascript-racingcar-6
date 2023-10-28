import Racing from './Racing.js';

class App {
  async play() {
    let racing = new Racing();
    racing.start();
  }
}

export default App;
