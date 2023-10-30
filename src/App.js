import Input from "./MVC/View/Input.js";

class App {
  async play() {
    const input = new Input();
    await input.carName();
  }
}

export default App;
