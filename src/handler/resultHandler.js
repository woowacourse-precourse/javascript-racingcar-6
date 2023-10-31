export class ResultHandler {
  static topRacerDistance(RACED_CARS) {
    let top_Racer_Length = 0;
    RACED_CARS.forEach((Car) => {
      if (top_Racer_Length < Car.trackStatus.length) {
        top_Racer_Length = Car.trackStatus.length;
      }
    });
    return top_Racer_Length;
  }

  static findTopRacer(Cars, DISTANCE) {
    const TOP_RACER = [];
    Cars.forEach((Car) => {
      if (Car.trackStatus.length === DISTANCE) {
        TOP_RACER.push(Car.name);
      }
    });
    return TOP_RACER;
  }

  static formatRaceWinner(TOP_RACER) {
    return TOP_RACER.join(", ");
  }
}
