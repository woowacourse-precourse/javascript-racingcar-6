import {MissionUtils} from "@woowacourse/mission-utils";
//자동차 이름 입력창
const INPUT_CARNAMES = () => {
    const CARNAMES = MissionUtils.Console.readLineAsync("자동차 이름을 입력하세요 (쉼표,로 구분) :");
    //,를 기준으로 배열 생성 (input_carnames 라는 배열)
    return CARNAMES.split(",");
}
//레이스 횟수 입력창
const INPUT_RACECOUNT = () =>{
    const COUNT = MissionUtils.Console.readLineAsync("시도할 횟수를 입력하세요:");
   // 예외사항 에러 발생
    if(isNaN(COUNT) || COUNT < 1 ) {
        throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }
    //올바를 경우 값 반환
    return COUNT;
}
//우승자 결과 출력
const DISPLAY_RACERESULT = (result) => {
    MissionUtils.Console.print(`최종 우승자: ${result}`);
}
export {INPUT_CARNAMES,INPUT_RACECOUNT,DISPLAY_RACERESULT};