import { Console } from '@woowacourse/mission-utils';

export default class InputReader {
  constructor() {}

  async #onRead(message) {
    const response = await Console.readLineAsync(message);
    if (response === null || response === undefined)
      throw new Error('유저 응답 실패');

    return response;
  }
}
