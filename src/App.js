class App {
  async play() {
    const CARS = await this.getNameInput();
  }

  async getNameInput() {
    let names = await Console.readLineAsync(MESSAGES.writeNames);
    names = names.split(',');
    this.checkNameInput(names);
    return names;
  }

  checkNameInput(names) {
    names.forEach((name) => {
      if(name.length > 5) throw new Error(MESSAGES.nameLengthError);
    });
  }
}

export default App;