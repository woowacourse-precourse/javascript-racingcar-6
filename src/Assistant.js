import Message from './Message.js';
import Validate from './Validate.js';

export default class Assistant {
  validateCarList(list) {
    list.forEach((name) => Validate.inputCarName(name));
  }
  validateNumberOfTry(count) {
    return Validate.inputNumberOfTry(count);
  }

  getCarList() {
    return Message.printEnterCarNames();
  }

  getNumberOfTry() {
    return Message.printEnterTry();
  }

  announceProcess() {
    return Message.printResultComment();
  }

  markSteps(result) {
    return Message.printResult(result);
  }

  announceWinners(winners) {
    return Message.printAnnounceWinners(winners);
  }

  selectWinners(participants) {
    let max = 0;
    participants.forEach(({ steps }) => {
      max = Math.max(steps, max);
    });

    const winners = participants.filter(({ steps }) => steps === max).map(({ name }) => name);

    return winners;
  }
}
