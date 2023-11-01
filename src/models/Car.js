import { 
    Console,
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

    printDistance(){
        let distance = ``;
        for(var i = 0; i < this.distance; i++){
            distance += `-`;
        }
        Console.print(`${this.name} : ` + distance);
    }
}

export default Car;