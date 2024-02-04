import Car from "../src/Car";
import Validator from "../src/Validator";
import App from "../src/App";
import InputOutput from "../src/InputOutput";

describe('문자열 테스트',() => {
    test('Test the entered car name', () => {
        const carNameList = "pobi,woni,jun"
        const result = carNameList.split(",");
        expect(result).toEqual(["pobi", "woni", "jun"]);
    });;
    

    test('자동차 전진 체크', () => {
        const car = new Car('car');
        car.tryAdvance();
        car.tryAdvance();
        car.tryAdvance();
        car.tryAdvance();
        car.tryAdvance();
        car.tryAdvance();
        car.tryAdvance();
        console.log(car.getMovedDistance());
        expect(car.getMovedDistance()).toEqual(expect.stringMatching(/^-+$/));
    });;

    test("자동차 이름 에외 처리 테스트",() => {
        const app = new App();
        const carNameList = ["pobiwoni","jun"];
        expect(() => app.makingCar(carNameList)).toThrow("[ERROR]")
    });

    test("자동차 이름 에외 처리 테스트",() => {
        const app = new App();
        const carNameList = [" ","jun"];
        expect(() => app.makingCar(carNameList)).toThrow("[ERROR]")
    });

    test("자동차 이름 에외 처리 테스트",() => {
        const app = new App();
        const carNameList = ["1234","jun"];
        expect(() => app.makingCar(carNameList)).toThrow("[ERROR]")
    });
    
    test("자동차 이름 에외 처리 테스트",() => {
        const app = new App();
        const carNameList = [""];
        expect(() => app.makingCar(carNameList)).toThrow("[ERROR]")
    });
})

