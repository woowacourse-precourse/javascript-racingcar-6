import UserInput from "./UserInput.js";

class App {
  constructor() {
    this.UserInput = new UserInput();
  }
  
  async play() {
    const CarNames = this.UserInput.inputCarNames();
    

  }
  
  
}

export default App;
