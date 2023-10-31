import Interface from './Interface.js';

class Message {
  static roundResults(carsInfo) {
    carsInfo.forEach(([name, { distance }]) => {
      const message = `${name} : ${distance}`;
      Interface.printMessage(message);
    });
    Interface.printMessage('');
  }

  static announceWinners(winners) {
    const winnerMembers = winners.join(' ,').trim();
    const message = `최종 우승자 : ${winnerMembers}`;
    Interface.printMessage(message);
  }
}

export default Message;
