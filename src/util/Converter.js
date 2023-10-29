class Converter {
  static scoreRule(number) {
    if (number < 4) {
      return 0;
    }
    if (number >= 4) {
      return 1;
    }
  }
  //[3,7,9] -> [0,1,1]
  static scoreFilter(randomArray) {
    return randomArray.map((randomNumber) => this.scoreRule(randomNumber));
  }

  //[3,7,9] -> [0,1,1] -> ['','-','-']
  static traceFilter(randomArray) {
    const scoreArray = this.scoreFilter(randomArray);
    return scoreArray.map((score) => ''.padStart(score, '-'));
  }
}

export default Converter;