import Racing from './Racing.js';

class App {
  async play() {
    const racing = new Racing();
    await racing.registration();
    await racing.decideGameCount();
    racing.race();
    racing.calculateWinner();
  }
}

export default App;
