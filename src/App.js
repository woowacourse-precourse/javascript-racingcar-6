import View from "./View.js";
import CarList from "./CarList.js";

class App {
  carList;
  view = new View();

  async play() {
    this.carList = new CarList(await this.view.getCarName());
  }
}

export default App;
