import generateCarDataListFromStr from './feature/GenerateCarDataListFromStr';
import getValidCarNameStr from './feature/GetValidCarNameStr';
import getValidTotalRoundNumber from './feature/GetValidTotalRoundNumber';

class App {
  constructor() {
    this.carDataList = []; // [{name:string, distance:number},]
  }

  async play() {
    const carNameStr = getValidCarNameStr();

    const initialCarDataList = generateCarDataListFromStr(carNameStr);
    this.updateCarDataList(initialCarDataList); // 정확하게 업데이트되는지 테스트 필요

    const totalRoundNumber = getValidTotalRoundNumber();

    for (let round = 0; round < totalRoundNumber; round += 1) {
      const roundResult = moveCarRandomly(this.carDataList);
      announceRoundResult(roundResult);
      this.updateCarDataList(roundResult);
    }

    announceWinner(this.carDataList);
  }

  updateCarDataList(newCarDataList) {
    this.carDataList = newCarDataList;
  }
}

export default App;
