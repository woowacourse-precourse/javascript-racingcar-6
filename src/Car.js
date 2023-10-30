import { NUM_RANGE } from "./constants/Number";
class Car {
  constructor(name) {
    this.name = name;
    this.move_times = 0;
    this.decision_number = 0;
    this.dash = "-";
  }
  pickRandomNumber() {
    this.decision_number = Random.pickNumberInRange(
      NUM_RANGE.car_start_range,
      NUM_RANGE.car_end_range
    );
  }
}

export default Car;
