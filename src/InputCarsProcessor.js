class InputCarsProcessor {
  constructor(playingCars) {
    this.playingCars = playingCars;
  }

  splitCars(playingCars) {
    return playingCars.split(",");
  }

  trimCars(playingCars) {
    for (let i = 0; i < playingCars.length; i++) {
      playingCars[i] = playingCars[i].trim();
    }
    return playingCars;
  }

  process() {
    this.playingCars = this.splitCars(this.playingCars);
    this.playingCars = this.trimCars(this.playingCars);
    return this.playingCars;
  }
}

export default InputCarsProcessor;
