class Game {
    static async setRacingCars() {
        let carStringNames = await Console.readLineAsync(RACING.NAMING_GUIDE)
        let carArrayNames = carStringNames.split(',')

        let cars = []

        await checkName(carArrayNames)

        carArrayNames.forEach(name => {
            cars.push(new Car(name))
        })

        return cars
    }

    static async setGameMoveCount() {
        const moveCount = Number(await Console.readLineAsync(RACING.QUESTION_COUNT))

        await checkNumber(moveCount)

        return moveCount
    }
}