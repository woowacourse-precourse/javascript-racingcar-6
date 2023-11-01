class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        const randomValue = Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
            this.position += 1;
        }
    }

    toString() {
        return `${this.name} : ${'-'.repeat(this.position)}`;
    }
}

module.exports = Car;
