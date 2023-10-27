import { Console, Random } from '@woowacourse/mission-utils';
class App {
  carList;
  moveCount;

  async play() {
    await this.setCarList();
  }

  async setCarList() {
    const inputResult = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    this.validateCarNameList(inputResult);
  }

  validateCarNameList(inputResult) {
    this.carList = inputResult.split(',');
    this.carList.forEach(car => this.validateCarName(car));

    const isDuplicate = this.isDuplicateCarName();

    if (isDuplicate) {
      throw new Error('[ERROR] car 이름은 중복이 불가합니다.');
    }
  }

  isDuplicateCarName() {
    const set = new Set(this.carList);
    return set.size < this.carList.length;
  }

  validateCarName(carName) {
    if (carName === '') {
      throw new Error('[ERROR] car 이름은 비워 둘 수 없습니다.');
    }

    if (carName.length > 5) {
      throw new Error('[ERROR] car 이름은 5자 이하만 가능합니다.');
    }
  }
}

export default App;
