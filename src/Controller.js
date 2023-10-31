import { Random } from "@woowacourse/mission-utils";
import Race from "./models/Race";
import Car from "./models/Car";

import RaceStartView from "./views/RaceStartView";
import InputCountView from "./views/InputCountView";
import ResultOutputView from "./views/ResultOutputView";
import WinnerOutputView from "./views/WinnerOutputView";

class Controller {
  #cars = new Array();
  #race;
  #max = 0;

  async run() {
    const input = await RaceStartView();
    const names = input.split(",").map(String);
    names.forEach((name) => {
      this.checkName(name);
      this.#cars.push(new Car(name));
    });
    const round = await InputCountView();
    this.#race = new Race(Number(round));
    for (let i = 0; i < this.#race.getRound(); i++) {
      this.makeRandomNumber(names);
      ResultOutputView(names, this.#cars);
    }
    this.selectFinalWinner(names);
    WinnerOutputView(this.#race);
  }

  checkName(name) {
    if (name.length > 5)
      throw new Error("[ERROR] 이름은 공백 없이 5자 이하만 입력 가능합니다.");
  }

  makeRandomNumber(names) {
    names.forEach((name, index) => {
      this.#cars[index].addStraightCount(Random.pickNumberInRange(0, 9));
    });
  }

  selectFinalWinner(names) {
    names.forEach((name, index) => {
      const currentLength = this.#cars[index].getStraightCount();
      this.#max = this.#max > currentLength ? this.#max : currentLength;
    });
    names.forEach((name, index) => {
      const currentLength = this.#cars[index].getStraightCount();
      if (this.#max == currentLength) this.#race.setWinner(name);
    });
  }
}
export default Controller;
