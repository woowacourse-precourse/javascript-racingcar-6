//자동차 생성
import {MissionUtils} from "@woowacourse/mission-utils";

class Car{
    //자동차 모델 정의
     constructor(name) {
         this.name = name; // 자동차 이름
         this.move = 0;  // 이동한 횟수
     }
     //자동차 전진 매서드
     moveFoward(){
         const RANDOM_VALUE = MissionUtils.Random.pickNumberInRange(0,9);
         if(RANDOM_VALUE >= 4){
             this.move++;
         }
     }
     //현재위치 반환
     getPosition(){
         return this.move;
     }
     // 이름을 반환
     getName(){
         return this.name;
     }
}
//자동차 관리
class RacingGame{
    constructor() {
        this.cars = [];// 자동차 이름 배열 초기화
    }
    addCar(name){
        //자동차 이름 추가
        if (this.cars.length >= 5){
        throw new Error ("[ERROR] 최대 5대의 차만 허용됩니다.")}
        this.cars.push(new Car(name));
    }
    raceOneRound(){
        this.cars.forEach((car)=> car.moveFoward());
    }
    getWinners(){
        // 1. 현재 모든 자동차 중 가장 높은 위치 값을 찾습니다.
        const MAX_POSIOTION = Math.max(...this.cars.map((car) => car.getPosition()));
        // 2. 가장 높은 위치 값과 동일한 위치에 있는 모든 자동차를 찾습니다.
        const WINNERS = this.cars.filter((car) => car.getPosition() === MAX_POSIOTION);
        // 3. 우승한 자동차들의 이름을 쉼표로 구분하여 문자열로 반환합니다.
        return WINNERS.map((car) => car.getName()).join(", ");
    }
}
export default {Car,RacingGame};

