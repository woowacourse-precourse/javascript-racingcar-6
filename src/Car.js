class Car {
    constructor(name) {
        this._name = name;
        this._distance = '';
    }

    get name() {
        return this._name;
    }

    get distance() {
        return this._distance;
    }

    set distance(distance) {
        this._distance = distance;
    }

    getGameResult() {
        return `${this._name} : ${this._distance}`;
    }
}

export default Car;