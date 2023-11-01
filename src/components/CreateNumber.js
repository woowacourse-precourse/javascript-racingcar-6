import { Random } from "@woowacourse/mission-utils";
import AppConstants from "../constants/AppConstants.js";

export class CreateNumber {
  constructor() {
    this.randomNumber = Random.pickNumberInRange(AppConstants.MINIMUM, AppConstants.MAXIMUM);
  }
}
