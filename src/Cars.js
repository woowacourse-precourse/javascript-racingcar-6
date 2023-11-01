import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";
class Cars {
    constructor(carNameString){
        this.carNameString=carNameString;
        const carNames=this.carNameSplit(this.carNameString);
        this.cars=carNames.map(carName=>{return new Car(carName);});
        this.checkValid(this.cars);
    }
    carNameSplit(carNameString){
        const CAR_NAMES=carNameString.split(",");
        CAR_NAMES.filter(CAR_NAME=>{this.checkEachValid(CAR_NAME)});
        const nameTotalCounts = {};
        const nameCurrentCounts= {} ;
        CAR_NAMES.forEach(carName => {
            if (!nameTotalCounts[carName]) {
                nameTotalCounts[carName] = 1;
            return carName;
            } else {
            nameTotalCounts[carName]++;
            }
        });
        
        const PROCESSED_CAR_NAMES=CAR_NAMES.map(carName=> {
            if (nameTotalCounts[carName]===1){
                return carName;
            } else {
                if(!nameCurrentCounts[carName]){
                    nameCurrentCounts[carName]=1;
                    return `${carName}(${nameCurrentCounts[carName]})`;
                }
                else{
                    nameCurrentCounts[carName]++;
                    return `${carName}(${nameCurrentCounts[carName]})`;
                }
            }
        }
        );
        return PROCESSED_CAR_NAMES;
    }
    checkLength(car){
        if(car.length>5){ 
            throw new Error("[ERROR] 차 이름은 5자 이하로 입력해주세요");
        }
        return;
    }
    checkWhiteSpace(car){
        if(/\s/.test(car)) {
            throw new Error("[ERROR] 차 이름은 공백을 포함할 수 없습니다.");
        }
        return;
    }
    checkEachValid(car){
            this.checkLength(car);
            this.checkWhiteSpace(car);
    }
    checkValid(cars){
        if(cars.length>30){
             throw new Error("[ERROR] 참가자의 수가 너무 많습니다. 30명 이하로 입력하세요.");
        }
        return;
    }
}
export default Cars;