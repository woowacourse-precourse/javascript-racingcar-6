class Winner {
    static async start(cars, numberOfAttempts) {
      for (let i = 0; i < numberOfAttempts; i++) {
        cars.forEach(car => car.move());
      }
  
      const maxDistance = Math.max(...cars.map(car => car.distance));
      const winners = cars.filter(car => car.distance === maxDistance);
      return winners;
    }
  }
  
  export default Winner;
  