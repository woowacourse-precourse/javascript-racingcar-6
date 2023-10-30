import Car from './car.js';

class App {
  async play() {
    Car.createCarsFromInput((cars) => {
      const carNames = cars.map(car => car.name).join(', ');
      console.log(`입력받은 자동차 이름들 출력: ${carNames}`);
    });
  }
}

export default App;
