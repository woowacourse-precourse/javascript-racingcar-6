import Console from '../Console.js';

class Race {
  async prepare() {
    const carNames = await Console.askCarNames();
    console.log(carNames);
  }
}

export default Race;
