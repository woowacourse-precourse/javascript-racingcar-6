import { Random } from "@woowacourse/mission-utils";

export const makeRandom = (numCars) => {
    return Array.from({ length: numCars }, () => Random.pickNumberInRange(0, 9));
};