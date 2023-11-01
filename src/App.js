import { MissionUtils } from "@woowacourse/mission-utils";
class App {
    async play() {
        await MissionUtils.Console.print(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)."
        );
        this.CarNameArray();
        await MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
        this.NumOfTimes;
        await MissionUtils.Console.print("실행 결과");
        for (let i = 0; i < this.NumOfTimes; i++) {
            this.CarRacing;
            ForwardStack();
        }
    }
    async CarNameArray() {
        const CarName = await MissionUtils.Console.readLineAsync();
        const CarNameArray = CarName.split(",");
        const SetCarName = new Set(CarNameArray);
        for (let i = 0; i < this.CarNameArray.length; i++) {
            if (
                CarNameArray[i] > 5 ||
                CarNameArray.length !== SetCarName.size ||
                CarNameArray === null ||
                CarNameArray.trim() === ""
            ) {
                throw new Error("[ERROR] 잘못된 형식입니다.");
            }
        }
        return CarNameArray;
    }
    async CarRacing() {
        const racingresult = "";
        for (let i = 0; i < this.CarNameArray.length; i++) {
            racingresult = await MissionUtils.Console.print(
                this.CarNameArray[i],
                " : ",
                this.CarSpeed
            );
            return racingresult;
        }
    }
    async CarSpeed() {
        const result = "";
        const RandomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (RandomNum > 3) {
            result = await MissionUtils.Console.print("-");
        }
        return result;
    }
    async ForwardStack() {
        const stack = new Array(this.CarNameArray);
        for (let i = 0; i < this.CarNameArray.length; i++) {
            if (this.CarSpeed === "-") {
                stack[i] += "-";
            }
        }
        return stack;
    }
    async NumOfTimes() {
        const NumOfTimes = await MissionUtils.Console.readLineAsync();
        if (
            NumOfTimes === null ||
            NumOfTimes.trim() === "" ||
            isNaN(NumOfTimes)
        ) {
            throw new Error("[ERROR] 잘못된 형식입니다.");
        }
        return NumOfTimes;
    }
}

export default App;
