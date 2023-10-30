import { Console } from '@woowacourse/mission-utils';

class Attempt {
    static async getNumberOfAttempts() {
      const numberOfAttemptsString = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
      const numberOfAttempts = Number(numberOfAttemptsString.trim());
  
      return numberOfAttempts;
    }
  }
  
  export default Attempt;
  
