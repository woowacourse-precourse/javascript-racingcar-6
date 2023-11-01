import { ERROR } from "../../src/constants/constants";
import { Cars } from "../../src/domain/cars";
import { CarsDto } from "../../src/domain/dto/carsDto";

describe("Cars의 비즈니스 로직", () => {
  test("성공적으로 Cars를 생성할 수 있다", async () => {
    // given
    const input = ["고양이", "콩순이", "뽀야미"];

    // when
    const cars = new Cars(input);
    const carsDto = cars.makeCarsDto();

    // then
    expect(carsDto.cars[0].name).toBe("고양이");
    expect(carsDto.cars[1].name).toBe("콩순이");
    expect(carsDto.cars[2].name).toBe("뽀야미");

    expect(carsDto.cars[0].distance).toBe(0);
    expect(carsDto.cars[1].distance).toBe(0);
    expect(carsDto.cars[2].distance).toBe(0);
  });

  test("중복된 자동차를 입력했을 때 예외 처리", async () => {
    // given
    const input = ["콩순이", "콩순이", "뽀야미"];
    // when
    try {
      new Cars(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(ERROR.NAME_DUPLICATION_ERROR);
    }
    // then
  });

  test("자동차 이름의 범위가 1~5자리가 아닐 때 예외처리", async () => {
    // given
    // when
    // then
  });
});
