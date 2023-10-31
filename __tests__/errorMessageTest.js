import { Car } from "../src/App.js";

describe ('Car class', () => {
    test ('자동차 이름이 5자를 넘을 경우 에러 발생', () => {
        const invalidCarName = 'yeojin';
        let errorMessage = null;

        try {
            new Car(invalidCarName);
        } catch (error) {
            errorMessage = error.message;
        }

        expect(errorMessage).toBe('[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.');
    });
});