class App {
  async play() {

    class Car {
      constructor(name) {
        this.name = name;
        this.position = 0;
      }
    
      move() {
        const randomValue = Math.floor(Math.random() * 10);
        if (randomValue >= 4) {
          this.position++;
        }
      }
    }
    
    function raceCars(carList, totalMoves) {
      for (let move = 1; move <= totalMoves; move++) {
        carList.forEach((car) => {
          car.move();
        });
      }
    }
    
    function getWinner(carList) {
      const maxPosition = Math.max(...carList.map((car) => car.position));
      const winners = carList.filter((car) => car.position === maxPosition);
    
      return winners.map((winner) => winner.name).join(',');
    }
    
    function startRace() {
      try {
        const totalMoves = parseInt(prompt('경주할 횟수를 입력하세요:'), 10);
    
        if (isNaN(totalMoves) || totalMoves <= 0) {
          throw new Error('[ERROR] 올바른 횟수를 입력하세요.');
        }
    
        const carNames = prompt('자동차 이름을 쉼표로 구분하여 입력하세요 (5자 이하):');
        const carNameList = carNames.split(',');
    
        const cars = [];
        carNameList.forEach((name) => {
          if (name.length > 5) {
            throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
          }
          cars.push(new Car(name));
        });
    
        raceCars(cars, totalMoves);
    
        const winners = getWinner(cars);
    
        alert(`우승자는 ${winners}입니다!`);
      } catch (error) {
        alert(error.message);
      }
    }
    
    // 게임 시작
    startRace();
  }
}

export default App;
