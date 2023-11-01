import { Console } from '@woowacourse/mission-utils';

class Attempt {
    static async getNumberOfAttempts() {
      const numberOfAttemptsString = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
      const numberOfAttempts = Number(numberOfAttemptsString.trim());
    
      if (isNaN(numberOfAttempts) || numberOfAttempts < 1) {
        throw new Error('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
      }

      if (isNaN(numberOfAttempts)) {
        throw new Error('[ERROR] 올바른 숫자를 입력하세요.');
      }

      if (!Number.isInteger(numberOfAttempts) || numberOfAttempts <= 0) {
        throw new Error('[ERROR] 정수로 입력하세요.');
      }
  
      return numberOfAttempts;
    }
  }
  
  export default Attempt;
  
