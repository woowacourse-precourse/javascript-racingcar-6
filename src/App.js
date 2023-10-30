import getUserInput from './getUserInput.js';

class App {
  async play() {
    const { carNames, count } = await getUserInput();
    console.log(carNames, count);
  }
}

new App().play();

export default App;
