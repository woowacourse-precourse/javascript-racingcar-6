import { Console } from '@woowacourse/mission-utils';
import { message } from './Constants.js';

import getRacecarNameInput from './modules/inputs/getRacecarNameInput.js';
import getAttemptInput from './modules/inputs/getAttemptInput.js';
import generateResultTemplate from './modules/generateResultTemplate.js';
import repeatProcess from './modules/process/repeatProcess.js';
import determineWinner from './modules/outputs/determineWinner.js';
import printFinalResult from './modules/outputs/printFinalResult.js';

class App {
  async play() {
    const racecarNames = await getRacecarNameInput();

    const attempts = await getAttemptInput();

    Console.print('\n' + message.RESULTS);

    let template = generateResultTemplate(racecarNames);

    const finalResult = await repeatProcess(attempts, template);

    const winners = await determineWinner(finalResult);

    await printFinalResult(winners);
  }
}

export default App;
