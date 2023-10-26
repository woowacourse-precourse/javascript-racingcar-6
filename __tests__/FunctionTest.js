describe("기능 테스트", () => {
    test("createCarNameArr함수 테스트", () => {
        const input = `치이카와, 우사기, 하치와레`;
        const result = input.split(",");

        expect(createCarNameArr(input)).toContain(result);
    });

    test("getNumberOfGames함수 테스트", () => {
        const input = "1";
        const result = 1;

        expect(getNumberOfGames(input)).toContain(result);
    });

    test.each([``, `치이카와 우사기 하치와레`, `이름엄청길다,이름,이`])(
        "handleInvalidCarName함수 테스트",
        (value) => {
            expect(() => handleInvalidCarName.moving(value)).toThrow(
                "[ERROR] 자동차 이름이 잘못된 형식입니다."
            );
        }
    );

    test.each([``, `숫자`,`1,2`])(
        "handleInvalidNumberOfGames함수 테스트",
        (value) => {
            expect(() => handleInvalidNumberOfGames.moving(value)).toThrow(
                "[ERROR] 시도 횟수가 잘못된 형식입니다."
            );
        }
    );
});
