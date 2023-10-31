import RandomNumber from "./RandomNumber";

const getRandomNumber = new RandomNumber;
class CarMotion {
  moveCountArr = [];
  moveOrStop(car, moveCountArray){
    this.moveCountArr = moveCountArray;
    for(let i in car) {
        const RANDOM_COUNT = getRandomNumber.createRandomNumber();
        if(RANDOM_COUNT >= 4) {
            this.moveCountArr[i]+=1;
        }
    }
    return this.moveCountArr;
  }
}

export default CarMotion;