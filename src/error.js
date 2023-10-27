import { MissionUtils } from '@woowacourse/mission-utils';

const ERROR = {
    INVALID_INPUT: ' [ERROR] 잘못된 형식의 입력입니다.',
    OVERSIZE_CAR_NAME: '[ERROR] 5자 이하의 자동차 이름을 입력해주세요.',
    INVALID_CAR_NAME: '[ERROR] 자동차 이름 안에 숫자가 포함되어 있습니다.',
    INVALID_CAR_NAME_SPACE: '[ERROR] 차 이름으로 공백이 들어왔습니다.',
    INVALID_INPUT_SPACE: "[ERROR] 입력값에 공백이 존재합니다.",
    INVALID_INPUT_FIRST: "[ERROR] 입력하신 차종들중 첫자리에 공백이 존재하는 차가 있습니다.",
    INVALID_INPUT_FINAL: "[ERROR] 입력하신 차종들중 끝자리에 공백이 존재하는 차가 있습니다.",
}

export default ERROR;