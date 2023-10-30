import App from '../src/App.js';

describe('기능 구현 테스트', () => {
    const app = new App();
    test('입력받은 이름으로 object를 생성한다.', () => {
        const names = ['yoo', 'vin'];
        const result = app.createCars(names);
        expect(result).toEqual({
            yoo: 0,
            vin: 0,
        });
    });
});
