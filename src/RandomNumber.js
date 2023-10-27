import { Random } from "@woowacourse/mission-utils";

class RandomNumber {
    CreateRandomNumber() {
        const PICK_NUMBER = Random.pickNumberInRange(0,9);
        return PICK_NUMBER;
    }
}
export default RandomNumber;