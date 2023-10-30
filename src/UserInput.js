import { MissionUtils } from "@woowacourse/mission-utils";
import Save from './ValueSave.js'
import Validation from "./Validation.js";

export default class User {
    async userInputCarName() {
        const inputCarName = await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) : \n'
        );
        this.getCarNames(inputCarName);
    }

    getCarNames(userInput) {
        this.cars = [];
        let names = userInput.split(',');
        names.map((element) => {
            this.cars.push(new Save(element))
        });
        // console.log(this.cars)
        this.checkName(names)
    }

    checkName(names) {
        try {Validation.carNameValidation(names)
        } catch(e) {
          throw(e)
        }
        console.log(names)
    } 
}