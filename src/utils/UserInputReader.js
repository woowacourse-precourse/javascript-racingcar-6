class UserInputReader {
  constructor() {
    this.UserInput = '';
  }
  getUserInput() {
    return this.UserInput;
  }
  setUserInput(value) {
    this.UserInput = value;
  }
}

export default UserInputReader;
