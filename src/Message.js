import Interface from './Interface.js';

class Message {
  /**
   * @typedef { string } name
   * @typedef {{ distance: string }} distance
   * @param {[name, distance][]} ascendingSortedInfo 
   */
  static roundResults(ascendingSortedInfo) {
    ascendingSortedInfo.forEach(([name, { distance }]) => {
      const message = `${name} : ${distance}`;
      Interface.printMessage(message);
    });
    Interface.printMessage('');
  }

  /**
   * 
   * @param {string[]} winners 
   */
  static announceWinners(winners) {
    const winnerMembers = winners.join(' ,').trim();
    const message = `최종 우승자 : ${winnerMembers}`;
    Interface.printMessage(message);
  }
}

export default Message;
