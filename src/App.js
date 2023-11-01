import {MissionUtils} from "@woowacourse/mission-utils";

class App {
    async setRacingList () {
        const { readLineAsync } = MissionUtils.Console
        const cars = []
        const inputCarName = await readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")
        const carNames = inputCarName.split(',')

        carNames.forEach((name)=> {
            this.checkingError(name)
            cars.push({name, distanceDriven:0})
        })
        return cars
    }

    checkingError (name) {
        let errorMessage = new Error("[ERROR] 잘못된 데이터를 입력했습니다.")
        if(name.length > 5 || name.length <= 0){
            throw errorMessage
        }
    }

    addDistanceDriven(cars) {
        cars.forEach((car) => {
            MissionUtils.Random.pickNumberInRange(0,9) >= 4 ? car.distanceDriven++ : car.distanceDriven
        })
        return cars
    }

    writeDrivenLine(cars) {
        const { print } = MissionUtils.Console
        cars.forEach((car) => {
            let drivenLine = '-'.repeat(car.distanceDriven)
            print(`${car.name} : ${drivenLine}`)
        })
        print('\n')
    }

    async playRacingGame(cars) {
        const { print, readLineAsync } = MissionUtils.Console
        const playCount = await readLineAsync("시도할 횟수는 몇 회인가요?\n")

        print("실행결과")
        for(let i = 0; i < playCount; i++){
            this.addDistanceDriven(cars)
            //출력부분
            this.writeDrivenLine(cars)
        }
        return cars
    }

    checkingWinner(cars) {
        const distanceArr = cars.map(car => car.distanceDriven);
        const checkingWinners = Math.max(...distanceArr);
        return cars.filter(item => item.distanceDriven === checkingWinners)
    }

    async play() {
        const racingCarList = await this.setRacingList()
        const result = await this.playRacingGame(racingCarList)


    }
}

export default App;
