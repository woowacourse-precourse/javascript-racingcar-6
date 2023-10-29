import inputCarName from "../functions/InputCarName.js";

class App {
  constructor(){
    this.carName=[];
  }

  set CarName(carName){
    this.carName = carName;
  }

  async play() {
    this.carName = await inputCarName();
  }
}

const myApp = new App();
myApp.play();

export default App;
