function move(){
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if (number >= 4){ 
        return true;
    } else return false;
}

export default move