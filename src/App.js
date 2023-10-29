import GetCarsName from './GetCarsName.js';
import GetTryNumber from './GetTryNumber.js';

class App {
  async play() {
    const getCarsName = new GetCarsName();
    const carsList = await getCarsName.getCarsNameList();

    const getTryNumber = new GetTryNumber();
    const tryNumber = await getTryNumber.getTryNumber();

    console.log(carsList, tryNumber);
  }
}

const app = new App();
app.play();

export default App;
