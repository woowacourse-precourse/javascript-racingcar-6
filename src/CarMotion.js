import RandomNumber from "./RandomNumber";

const getRandomNumber = new RandomNumber;
class CarMotion {
    MoveOrStop(CAR, MOVE_COUNT_ARRAY){
        for(let i in CAR) {
            const RANDOM_COUNT = getRandomNumber.CreateRandomNumber();
            if(RANDOM_COUNT >= 4) {
                MOVE_COUNT_ARRAY[i]++;
            }
        }
        return MOVE_COUNT_ARRAY;
    }
}

export default CarMotion;