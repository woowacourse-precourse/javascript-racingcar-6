import GetCarsName from './GetCarsName.js';

class App {
  async play() {
    const getCarsName = new GetCarsName();
    const carsList = await getCarsName.getCarsNameList();
    console.log(carsList);
  }
}

const app = new App();
app.play();

export default App;
