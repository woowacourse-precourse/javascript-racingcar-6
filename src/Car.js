class Car(){
    #name;
    #position = [];

    construct(name){
        this._name = name;
    }

    getPosition(){
        return this._position;
    }

    setPosition(){
        this._position.push('-');
    }

    getName(){
        return this._name;
    }
}

export default Car;