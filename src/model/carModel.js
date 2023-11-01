class Car {
    // 생성자: 자동차 이름과 초기 위치 설정
    constructor(name) {
        this.name = name;
        this.movesNum = 0; // 초기 위치는 0
    }

    // move 메서드: 자동차를 한 칸 전진시킴
    move() {
        this.movesNum++;
    }
}
export default Car;