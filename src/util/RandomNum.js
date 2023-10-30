import { Random } from "@woowacourse/mission-utils";

export const random = (carsLength) => {
    const randomNum = [];

    while ( randomNum.length < carsLength ) {
        randomNum.push(Random.pickNumberInRange(0,9));
    }

    return randomNum;
};