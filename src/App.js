import Print from "./Print.js";

class App {
  async play() {
    const cars = await Print.getCars();
    const tryCount = await Print.getTryCount();
  }
}

export default App;
