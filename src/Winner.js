function winner(CARS){
    const SCORE = CARS.map((car) => car.num)
    const HIGH_SCORE = Math.max(...SCORE);
    const FILTER_CAR = CARS.filter((car) => car.num === HIGH_SCORE)
    const WINNER = FILTER_CAR.map((car)=> car.name).join(',')
    
    return WINNER
}

export default winner