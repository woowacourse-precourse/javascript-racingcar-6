import Cars from "../src/Cars.js";
describe("Cars 클래스 테스트", () => {
  it("유효한 차 이름이 포함된 경우", () => {
    const carNames = "pobi,crong,honux";
    const cars = new Cars(carNames);
    expect(cars.cars.length).toBe(3);
  });

  it("5자 이상의 차 이름이 포함된 경우", () => {
    const carNames = "pobi,crong,abcd12345";
    expect(() => new Cars(carNames)).toThrow("[ERROR] 차 이름은 5자 이하로 입력해주세요");
  });

  it("차 이름에 공백(띄어쓰기)이 포함된 경우", () => {
    const carNames = "pobi,crong, L";
    expect(() => new Cars(carNames)).toThrow("[ERROR] 차 이름은 공백을 포함할 수 없습니다.");
  });

  it("차 이름에 공백(탭)이 포함된 경우", () => {
    const carNames = "pobi,crong, L";
    expect(() => new Cars(carNames)).toThrow("[ERROR] 차 이름은 공백을 포함할 수 없습니다.");
  });


  it("참가자의 수가 30을 초과하는 경우", () => {
    const carNames = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh,ii";
    expect(() => new Cars(carNames)).toThrow("[ERROR] 참가자의 수가 너무 많습니다. 30명 이하로 입력하세요.");
  });

  it("carNames에서 중복된 이름이 정상적으로 처리되는지 확인", () => {
    const carNames = "동주,동인,동인,카리나,동주";
    const cars = new Cars(carNames);

    const expectedCarNames = ["동주(1)", "동인(1)", "동인(2)", "카리나", "동주(2)"];

    const actualCarNames = cars.cars.map(car => car.name);

    expect(actualCarNames).toEqual(expectedCarNames);
  });
});