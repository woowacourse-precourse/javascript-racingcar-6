import { GAME_MESSAGE, RULES } from './constants';
import { readLinePrompt } from './utils';
import carNamingValidation from './validator/carNamingValidation';
import trialCountValidation from './validator/trialCountValidation';

export default class User {
  racingCarArray;
  trialCount;
  static createUser() {
    return new this();
  }

  async requestInputUser() {
    const racingCarArray = await this.getUserCarNamingInputAsync();
    const trialCount = await this.getUserTrialCountInputAsync();
    return { racingCarArray, trialCount };
  }

  async getUserCarNamingInputAsync() {
    const inputedRacingCars = await readLinePrompt(GAME_MESSAGE.start);
    carNamingValidation(inputedRacingCars);
    return inputedRacingCars.split(RULES.seperator);
  }

  async getUserTrialCountInputAsync() {
    const inputedTrialCount = await readLinePrompt(GAME_MESSAGE.trialCount);
    trialCountValidation(inputedTrialCount);
    return inputedTrialCount;
  }
}
