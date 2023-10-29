//입력받은 자동차의 이름에 대한 객체 생성
export const setCars = (name) => {
    const nameArray = name.split(',');
    const cars = {};

    nameArray.forEach((name) => {
        cars[name] = 0;
    });
};