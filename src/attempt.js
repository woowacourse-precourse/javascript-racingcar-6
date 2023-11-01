import { Console } from '@woowacourse/mission-utils';

class Attempt {
    static async getNumberOfAttempts() {
      const numberOfAttemptsString = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
      const numberOfAttempts = Number(numberOfAttemptsString.trim());
    
      //예외 처리: 입력받은 횟수가 1이상이 아닐 경우 
      if (isNaN(numberOfAttempts) || numberOfAttempts < 1) {
        throw new Error('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
      }

      //예외 처리: 입력받은 횟수가 숫자가 아닐 떄
      if (isNaN(numberOfAttempts)) {
        throw new Error('[ERROR] 올바른 숫자를 입력하세요.');
      }

      //예외 처리: 정수가 아닐 때
      if (!Number.isInteger(numberOfAttempts) || numberOfAttempts <= 0) {
        throw new Error('[ERROR] 정수로 입력하세요.');
      }
  
      return numberOfAttempts;
    }
  }
  
  export default Attempt;
  
