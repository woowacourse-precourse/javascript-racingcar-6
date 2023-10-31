# 미션 - 자동차 경주 - frontend/jinjuseo

## 기능 목록

### 0. play()
    - 자동차 배열 : carList
        - 자동차 이름 입력 받고 이름 배열 - carNameList
        - 자동차 이름 유효성 테스트 -> 통과? carList 배열에 넣기
    - 시도 횟수 : TRY_NUM
        - 시도 횟수 입력 받고 유효성 테스트
    - TRY_NUM 값 만큼 반복
        - tryCarGame 
        - printTryResult
    - 우승자 이름 배열 : winners    
        - 우승자 이름 배열 리턴받기 : getWinners 
    - printWinners : 우승자 출력
### 1. inputCarNames() - 자동차 이름 입력받기
### 2. isValidCarNames(carNames) - 자동차 이름 입력값 유효성 검사
### 3. isValidCarName(carName) - 자동차 이름 유효성 검사
### 4. inputTryNum() - 시도할 횟수 입력받기
### 5. isValidTryNum(tryNum) - 시도 횟수 유효성 검사
### 6. tryCarGame(carList) - 경주 게임 시도(1회)
### 7. printTryResult(carList) - 실행 결과 출력(1회)
### 8. getRandomNumber() - 랜덤값 리턴하는 함수
### 9. getWinners(carList) - 우승자 배열 리턴 함수
### 10. printWinners(winnerList) - 우승자 출력

## Car 클래스 

### 변수
    - name : 자동차 이름
    - position : 자동차의 현재 위치
### 함수
    - move() : 해당 자동차 위치 1 증가
    - 변수별 setter, getter 
