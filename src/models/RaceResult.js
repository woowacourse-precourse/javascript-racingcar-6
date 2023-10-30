class RaceResult {
  #resultList = [];

  addRoundResult(roundResult) {
    this.#resultList.push(roundResult);
  }

  getResult() {
    return this.#resultList;
  }
}

export default RaceResult;
