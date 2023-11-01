import {Random} from "@woowacourse/mission-utils";

export class MoveDecider {
    /**
     * @type {boolean}
     */
    #isRandom

    /**
     * @type {boolean}
     */
    #canIMove//수동으로 생성을 위해

    /**
     *
     * @param {boolean} isRandom
     * @param {boolean} isTrue
     */

    constructor(isRandom, isTrue) {
        this.#canIMove = isTrue
        this.#isRandom = isRandom;
    }

    //MoveDecider의 두가지 버전 랜덤, 고정
    // static: 인스턴스 객체 안만들고 그냥 클래스명.메서드로 사용 가능
    /**
     *
     * @returns {MoveDecider}
     */
    static random() {
        return new MoveDecider(true, true)
    }

    /**
     *
     * @param {boolean} isTrue
     * @returns {MoveDecider}
     */
    static fixed(isTrue) {
        return new MoveDecider(false, isTrue)
    }


    // isRandom true 이면 자동으로 move 여부 생성
    // false 이면 수동으로 move 여부 생성

    /**
     *
     * @returns {boolean}
     */
    canMove() {
        if (this.#isRandom) {
            const randomNumber = Random.pickNumberInRange(0, 9);
            return (randomNumber >= 4);

        }
        return this.#canIMove
    }

}

// car.moveBy(moveDecider)
// canMove가 뭔 줄지에 따라 움직일지 결정 -> 랜덤인지, 아니면 고정값 주기
// 테스트할떄 무조건 true로 줘서 확인할 수 있다