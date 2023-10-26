import Print from "./Print.js";

class App {
  async play() {
    const cars = await Print.getCars();
  }
}

export default App;
