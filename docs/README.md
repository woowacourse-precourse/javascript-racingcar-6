## 기능명세

### 1. Class App

    - nameList : 자동차 이름
    - tries: 시도 횟수
    - setCarName(): 자동차 이름 입력 받음
    - setTries(): 시도 횟수 입력받음
    - moveCar(): 자동차 이동 로직

### setCarName()

    [ ] 이름 입력 메세지 출력과 함께 player로부터 이름 입력 받기
    [ ] , 로 구분하기
    [ ] 구분한 것 nameList에 저장
        [ ] nameList 만큼 반복
            [ ] nameList의 i번째 항복의 length가 5 이하 라는 조건이 참일때만 nameList 에 저장

### setTries()

    [ ] 숫자 입력 메세지 출력과 함께 player로부터 숫자 입력 받기
    [ ] 입력 받은 값이 숫자가 아니라면 ERROR
    [ ] tries에 입력값 저장

### moveCar()

    [ ] nameList의 길이만큼 반복
        [ ] 자동차 몇 번 움직일건지 저장할 move`i`변수 생성
    [ ] tries 만틈 반복
        [ ] tempMove 선언
        [ ] `실행결과`출력
        [ ] nameList의 길이만큼 반복
            [ ] tempMove 0으로 초기화
            [ ] tempMove에 random Number 할당
            [ ] 만약 tempMove 가 4 이상이라면 move`i`에 tempMove 할당
        [ ] nameList[i] 인 자동차 이름과 move`i` 만큼 "-" 출력
