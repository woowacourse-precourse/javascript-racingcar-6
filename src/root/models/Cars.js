import Car from "./Car.js";

class Cars {
    constructor(carNameArray) {
        this.carList = carNameArray.map(name => new Car(name));
        this.winner = []
    }

    getCarCount(){
        return this.carList.length;
    }
    getCarDistance(number){
        return this.carList[number].distance;
    }
    getCarName(number){
        return this.carList[number].name;
    }

    printEachStep(){
        for(var i = 0; i < this.getCarCount(); i++){
            this.carList[i].printDistance();
        }
    }
    moveAllCars(){
        for (var i = 0; i < this.getCarCount(); i++) {
            this.carList[i].move();
        }
    }

    findWinner(){
        let maxDistance = 0;
        for (var i = 0; i < this.getCarCount(); i++) {
            if (maxDistance < this.getCarDistance(i)){
                maxDistance = this.getCarDistance(i);
            }
        }
        for (var i = 0; i < this.getCarCount(); i++) {
            if (maxDistance === this.getCarDistance(i)) {
                this.winner.push(this.getCarName(i))
            }
        }
        return this.winner;
    }

    getWinnerString(){
        let winnerString = ``;
        for (var i = 0; i < this.winner.length; i++){
            winnerString += this.winner[i];
            if(this.winner.length >= 2 && i  < this.winner.length - 1)
                winnerString += `, `;
        }
        return winnerString
    }
}

export default Cars;