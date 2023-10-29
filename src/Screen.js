import { Console } from '@woowacourse/mission-utils';

class Screen {
  static MESSAGES = {
    RACE_NAME_INPUT_MESSAGE:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표 (,) 기준으로 구분)',
    INVALID_NAME_ERROR_MESSAGE:
      '[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.',
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

    return names;
  }
}

export default Screen;
