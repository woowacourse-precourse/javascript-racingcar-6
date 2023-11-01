import { 
    Random 
} 
from "@woowacourse/mission-utils";

class Car{
    constructor(name){
        this.name = name;
        this.distance = 0;
    }

    canMove(){
        const randomValue = Random.pickNumberInRange(0, 9);
        return (randomValue >= 4);
    }

    move(){
        if(this.canMove()){
            this.distance += 1;
        }
    }

    returnDistanceString(){
        let distance = ``;
        for(var i = 0; i < this.distance; i++){
            distance += `-`;
        }
        return `${this.name} : ` + distance;
    }
}

export default Car;