import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../const/messages.js";

class User {
  async getNameInput() {
    let names = await Console.readLineAsync(MESSAGES.writeNames);
    names = names.split(',');
    this.checkNameInput(names);
    return names;
  }

  checkNameInput(names) {
    names.forEach((name) => {
      if(name.length > 5) throw new Error(MESSAGES.nameLengthError);
    });
  }

  async getCountInput() {
    let count = await Console.readLineAsync(MESSAGES.writeCount);
    count = parseInt(count);
    this.checkCountInput(count);
    return count;
  }

  checkCountInput(count) {
    if(isNaN(count)) throw new Error(MESSAGES.numberError);
  }  
}

export default User;