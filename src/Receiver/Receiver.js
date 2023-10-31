import { MissionUtils } from '@woowacourse/mission-utils';

class Receiver {
  #RECEIVE_CAR_MSG = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : ';

  async receiveCarNames() {
    const answer = await MissionUtils.Console.readLineAsync(this.#RECEIVE_CAR_MSG);

    return answer;
  }
}

export default Receiver;
