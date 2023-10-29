import inputCarName from "../functions/InputCarName.js";

class App {
  constructor(){
    this.carName=[];
  }

  setCarName(carName){
    this.carName = carName;
  }

  async play() {
    this.setCarName(await inputCarName());
  }
}

const myApp = new App();
myApp.play();

export default App;
