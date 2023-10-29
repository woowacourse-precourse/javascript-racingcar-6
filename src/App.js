import View from "./View.js";
import CarList from "./CarList.js";

class App {
  carList;
  view = new View();

  async play() {
    this.carList = new CarList(await this.view.getCarName());
    console.log(this.carList);
  }
}

export default App;
