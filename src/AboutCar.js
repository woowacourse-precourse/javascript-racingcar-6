import {MissionUtils} from "@woowacourse/mission-utils";

class AboutCar {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    decideMotion() {
        // 0에서 9까지의 무작위 값 생성
        const generateRandomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

        // generateRandomNumber 값이 4 이상이면 전진하기 위해 +1
        if (generateRandomNumber() >= 4) {
            this.position += 1;
        }
    }

    // 현재 경주 상태를 출력하는 메서드
    displayPosition() {
        return `${this.name} : ${'-'.repeat(this.position)}`;
    }
}

export default AboutCar;
