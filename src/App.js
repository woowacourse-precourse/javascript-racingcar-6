import inputCarName from "../functions/InputCarName.js";
import inputTryRacing from "../functions/InputTryRacing.js";

class App {
  constructor(){
    this.carName=[];
    this.tryRacing=0;
  }

  set CarName(carName){
    this.carName = carName;
  }

  
  async play() {
    this.carName = await inputCarName();
    this.tryRacing = await inputTryRacing();
  }
}

const myApp = new App();
myApp.play();

export default App;
