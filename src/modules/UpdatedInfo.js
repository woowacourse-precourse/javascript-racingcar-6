import Decision from './Decision.js';
import MESSAGE from '../constants/message.js';

class UpdatedInfo {
  static getCurrentCarInfo(cars) {
    const messages = [];
    const info = new Map([...cars]);
    info.forEach((value, key) => {
      let moveNum = value;
      if (Decision.moveForward()) {
        moveNum += 1;
        info.set(key, moveNum);
      }
      messages.push(`${key} : ${MESSAGE.result.distance.repeat(moveNum)}\n`);
    });
    return [messages.join(''), info];
  }
}

export default UpdatedInfo;
