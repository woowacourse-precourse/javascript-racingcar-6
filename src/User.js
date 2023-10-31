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

export async function validParticipantCarName(carNameList) {
  carNameList.forEach((name) => {
    if (name.length > 5 || name.length < 1) {
      throw new Error('[ERROR] 자동차 이름은 1자 ~ 5자 사이를 입력해주세요');
    }
  });
  if (carNameList.length > 5 || carNameList < 1) {
    throw new Error('[ERROR] 참가자는 1팀 ~ 5팀이 있어야 진행이 가능합니다');
  }
}

export default User;
