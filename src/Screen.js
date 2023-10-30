import { Console } from '@woowacourse/mission-utils';

class Screen {
  static MESSAGES = {
    RACE_NAME_INPUT_MESSAGE:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표 (,) 기준으로 구분)',
    RACE_COUNT_INPUT_MESSAGE: '시도할 횟수는 몇 회인가요?',
    INVALID_NAME_ERROR_MESSAGE:
      '[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.',
    DUPLICATED_NAME_ERROR_MESSAGE: '[ERROR] 중복된 이름을 입력할 수 없습니다.',
  };

  static async inputNames() {
    Console.print(this.MESSAGES.RACE_NAME_INPUT_MESSAGE);
    const nameInput = await Console.readLineAsync();
    const names = nameInput.split(',').map((name) => name.trim());

    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(this.MESSAGES.INVALID_NAME_ERROR_MESSAGE);
      }
    });

    if (names.length !== new Set(names).size) {
      throw new Error(this.MESSAGES.DUPLICATED_NAME_ERROR_MESSAGE);
    }

    return names;
  }

  static async inputCount() {
    Console.print(this.MESSAGES.RACE_COUNT_INPUT_MESSAGE);
    const count = await Console.readLineAsync();

    return count;
  }
}

export default Screen;
