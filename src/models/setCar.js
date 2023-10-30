import { runByCount } from "./runRace";

//입력받은 자동차의 이름에 대한 객체 생성
export const setCars = (name, count) => {
    const nameArray = String(name).split(',');
    const cars = {};

    nameArray.forEach((name) => {
        cars[name] = '';
    });

    runByCount(cars, count);
};
