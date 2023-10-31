import { GAME_SETTING } from "./constant.js";

class Car {
  constructor(name) {
    this.name = name;
    this.position = GAME_SETTING.START_POINT;
  }

  forward() {
    this.position += GAME_SETTING.STEP;
  }
}

export default Car;
