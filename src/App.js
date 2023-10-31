class App {
  async play() {
    const CARS = await this.getNameInput();
    let count = await this.getCountInput();
  }

  async getNameInput() {
    let names = await Console.readLineAsync(MESSAGES.writeNames);
    names = names.split(',');
    this.checkNameInput(names);
    return names;
  }

  async getCountInput() {
    let count = await Console.readLineAsync(MESSAGES.writeCount);
    count = parseInt(count);
    this.checkCountInput(count);
    return count;
  }

  checkNameInput(names) {
    names.forEach((name) => {
      if(name.length > 5) throw new Error(MESSAGES.nameLengthError);
    });
  }

  checkCountInput(count) {
    if(isNaN(count)) throw new Error(MESSAGES.numberError);
  }   
  
  createRandomNumber() {
    const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
    return RANDOM_NUMBER;
  }
}

export default App;