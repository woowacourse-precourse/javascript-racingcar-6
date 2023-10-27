class Car{
    #name;
    #position = [];

    constructor(name){
        this.#name = name;
    }

    getPosition(){
        return this._position;
    }

    setPosition(){
        this._position.push('-');
    }

    getName(){
        return this.#name;
    }
}

export default Car;