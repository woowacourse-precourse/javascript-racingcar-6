import { Console } from '@woowacourse/mission-utils';

class Input {
  async readLine(query) {
    try {
      const input = await Console.readLineAsync(query);

      /**
       * TODO
       * - 사용자 검증 로직 작성
       * - readLine 외부에서 검증 로직 주입
       */

      return input;
    } catch (error) {
      throw error;
    }
  }
}

export default Input;
