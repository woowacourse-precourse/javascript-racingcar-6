import { Random } from "@woowacourse/mission-utils"

const pickRandomNumber = () => {
    return Random.pickNumberInRange(0, 9);
}

export { pickRandomNumber };