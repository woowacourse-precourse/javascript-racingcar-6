import { MissionUtils } from "@woowacourse/mission-utils";

const carNameValidation = (carName) =>{
    for (let i = 0; i < carName.length; i++) {
        if (carName[i].length > 6) {
            MissionUtils.Console.print('[ERROR] 자동차 이름이 5를 초과했습니다.');
            throw new Error("[ERROR]");
        }
    }
};

export default carNameValidation;