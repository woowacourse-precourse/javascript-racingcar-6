import Distance from "./Distance";

class Race {

    #fuel;

    #distance = new Distance();

    racing(distanceBoard, laps){
        while(laps) {
            this.#drive(distanceBoard);
            this.#outputView.print('\n');
            laps --;
        }
    }

    #drive(distanceBoard) {
        distanceBoard.forEach((distance) => {
            this.#gasStation();
            this.#getFuel(distance);
        })
        
        return this.#distance.sortBoard(distanceBoard);
    }

    #gasStation() {
        this.#fuel = pickRandomNumber();
    }

    #getFuel(distance) {
        if(this.#fuel > 4) {
            distance += 1;
        }
    }
}

export default Race;