import inputCarName from './data/inputCarName.js';

class App {
  async play() {
    const name = await inputCarName();
    console.log(name);
  }
}

const app = new App();
app.play();

export default App;
