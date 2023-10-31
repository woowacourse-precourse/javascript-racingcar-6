class MovementManager {
  THRESHOLD = 4;
  randomNumberGenerator;

  constructor(randomNumberGenerator) {
    this.randomNumberGenerator = randomNumberGenerator;
  }

  getMovement = () => {
    const energy = this.randomNumberGenerator.generate();
    if (energy >= this.THRESHOLD) {
      return 1;
    }
    return 0;
  };
}

export default MovementManager;
