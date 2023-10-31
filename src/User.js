import { MissionUtils } from '@woowacourse/mission-utils';

class User {
  constructor() {
    this.name = '';
  }

  set setName(name) {
    this.name = name;
  }
}

export async function inputParticipantCarName() {
  const userInput = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const userList = userInput.replace(/ /g, '').split(',');
  return userList;
}

export default User;
