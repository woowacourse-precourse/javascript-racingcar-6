import { MissionUtils } from '@woowacourse/mission-utils';
import Car from "../model/carModel.js";
import Play from "./carRaceController.js";

class CarName {
    // 자동차 이름 및 유효성 검사 메서드
    inputCarName(carNames) {
        // 쉼표로 자동차 이름 분리 및 빈 문자열 제거
        const NAME_ARRAY = carNames.split(',').filter(name => name.trim() !== '');
        // 이름 중복 체크
        const NAME_CHECK = new Set(NAME_ARRAY).size !== NAME_ARRAY.length;

        if (NAME_CHECK) {
            throw new Error('[ERROR] 각 자동차의 중복을 확인하세요.');
        }else if ( /^,|,$/.test(carNames)) {
            throw new Error('[ERROR] 콤마의 위치를 확인해주세요');
        }else if (/,,/.test(carNames) || /,,,/.test(carNames)) {
            throw new Error('[ERROR] 콤마를 연속으로 사용하면 안됩니다.');
        }
        const CAR_LIST = NAME_ARRAY.map((carName) => {
            if (carName.length > 5) {
                throw new Error('[ERROR] 각 이름은 5자 이하만 가능합니다.');
            }
            return new Car(carName);
        });
        new Play().inputRaceTimes(CAR_LIST);
    }

    // 게임 시작 메서드
    async start() {
        MissionUtils.Console.print('자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분합니다.');
        const carNames = await MissionUtils.Console.readLineAsync('');
        this.inputCarName(carNames);
    }
}

export default CarName;
