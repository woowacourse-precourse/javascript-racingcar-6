import App from "../src/App.js";

describe("App 테스트", () => {
    describe("getCarName 테스트", () => {
        test("받은 데이터 객체의 배열로 변경", () => {
            const result = App.getCarName("lee,yun,lim");

            expect(result).toEqual(
                [
                    Car { name: 'lee', count: 0 },
                    Car { name: 'yun', count: 0 },
                    Car { name: 'lim', count: 0 }
                ]
            );
        });
    });
});