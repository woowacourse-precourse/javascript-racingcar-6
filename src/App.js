import UserInput from "./UserInput.js";

class App {
  constructor() {
    this.UserInput = new UserInput();
  }
  
  async play() {
    const CarNames = await this.UserInput.inputCarNames();
    const TryNumber = await this.UserInput.inputTryNum();
  }
  
  
}

export default App;
