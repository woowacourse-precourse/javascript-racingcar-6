import App from "../src/App.js";
import { Console,Random } from "@woowacourse/mission-utils";


test('사용자가 입력한 차들의 이름이 모든 기준을 만족하는지', () => {
    const app = new App();
    const invalidInput = ['car1', 'car2 1'];

    // 입력값이 유효한지 총 검사
    expect(() => app.checkInvalidCarName(invalidInput)).toThrow();
});

test('사용자가 입력한 차 이름의 길이가 5를 넘는지', () => {
    const app = new App();
    const invalidInput = ['car1', 'car2 1'];

    // 입력값 길이가 5 이상이면 오류
    expect(() => app.ckeckLength(invalidInput)).toThrow();
});

test('공백이 있는지', () => {
    const app = new App();
    const inSpace = 'car 1';
    const notInSpace = 'car1';

    // 공백이 있다면 오류
    expect(app.checkSpace(inSpace)).toBe(true);

    // 공백이 없는 문자열에 대한 테스트
    expect(app.checkSpace(notInSpace)).toBe(false);
});

test('마지막 자리를 제외한 문자열에 숫자가 포함되어 있는지', () => {
    const app = new App();
    const invalidInput = 'ca1r1';

    // 마지막 자리를 제외한 자리에 숫자가 있는지
    expect(() => app.checkLastName(invalidInput)).toThrow();
});


test('전진하는지 멈추는지', () => {
    const app = new App();
    app.makeRandomNumber = () => 5;

    app.gameStatus = ['car1:', 'car2:'];

    app.decideMove();

    // 값이 4 이상이면 전진하는지
    expect(app.gameStatus[0]).toBe('car1:-');
    expect(app.gameStatus[1]).toBe('car2:-');
});


