import CarList from "../src/CarList";

describe("CarList 메소드 테스트", () => {
  test("자동차 이름이 여러개 입력했을 때 split 되는 지 체크", () => {
    const carList = new CarList();
    carList.setCarList("park,gyu,han");
    expect(carList.getCarList()[0].name).toBe("park");
  });
});
