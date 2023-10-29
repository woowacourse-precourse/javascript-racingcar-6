class Judge {
  checkMoveCondition(randomNum) {
    if (randomNum >= 4) {
      return true;
    }

    return false;
  }
}

export default Judge;