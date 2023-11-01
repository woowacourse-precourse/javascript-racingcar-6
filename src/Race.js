import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
class Race { 
    constructor(cars,number){
        cars.forEach(car => {
            if (!(car instanceof Car)) {
                throw new Error("[ERROR] 경주에 맞는 올바른 차량 타입이 아닙니다.");
            }
        });
        this.cars=cars;
        this.number = number;
        this.currentNumber = 0;
    }
    start(){
        Console.print("실행 결과");
        while(this.currentNumber<this.number){
            this.cars.forEach(car=>{car.drive();Console.print([car.name," : ","-".repeat(car.distance)].join(""));}
            );
            Console.print("\n");
            this.currentNumber=this.currentNumber+1;
        }
        const winners= this.chooseWhoIsWinner();
        Console.print(["최종 우승자 : ",winners.join(", ")].join(""));
    }
    chooseWhoIsWinner(){

        const maxDistance=Math.max(...this.cars.map(car => car.distance));
        this.winners=this.cars.filter(car=>car.distance===maxDistance);
    
        return this.winners.map(winner=>winner.name);
    }
}


export default Race;


