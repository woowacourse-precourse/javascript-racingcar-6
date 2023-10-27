class ScoreConverter {
  static scoreFilter(number) {
    if (number < 4) {
      return 0;
    }
    if (number >= 4) {
      return 1;
    }
  }

  static generator(numberArray) {
    return numberArray.map((element) => this.scoreFilter(element));
  }
}

export default ScoreConverter

