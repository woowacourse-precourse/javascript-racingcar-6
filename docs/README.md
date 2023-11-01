## 기능명세

### 1. Class App

    - nameList : 자동차 이름
    - tries: 시도 횟수
    - winner : 우승자의 인덱스 번호 저장
    - setCarName(): 자동차 이름 입력 받음
    - setTries(): 시도 횟수 입력받음
    - moveCar(): 자동차 이동 로직
    - showWinner() : 최종 우승자 출력

### setCarName()

    [x] 이름 입력 메세지 출력과 함께 player로부터 이름 입력 받기
    [x] , 로 구분하기
    [x] 구분한 것 nameList에 저장
        [x] nameList 만큼 반복
            [x] nameList의 i번째 항복의 length가 6 이상일 때 ERROR

### setTries()

    [x] 숫자 입력 메세지 출력과 함께 player로부터 숫자 입력 받기
    [x] 입력 받은 값이 숫자면 tries에 입력값 저장
    [x] 숫자가 아니라면 ERROR

### moveCar()

        [x] moveArray에 nameList의 길이만큼 0 입력. 이 때 moveArray는 tempMove 값을 저장할 배열
        [x] printArray에 nameList의 길이만큼 0 입력. 이 때 printArray는 "-" 출력 개수를 저장 할 배열
        [x] `실행결과`출력

    [x] tries > moveTries 일때까지 반복
        [x] nameList의 길이만큼 반복
            [x] tempMove 에 0부터 9 사이의 random Number 할당
            [x] tempMove 가 4 미만이면 0을, 4 이상이면 1을 재할당
            [x] moveArray의 i번째에 tempMove 할당

        [x] nameList의 길이만큼 반복
            [x] movement 변수에 moveArray의 i번째 할당
            [x] printArray[i]에 movement를 누적
            [x] progress 변수에 printArray[i]에 있는 수 만큼 "-" 저장
            [x] name : progress 형태로 출력
        [x] moveTries 1 증가

    [x] winnerNumber에 printAarry의 최댓값 저장
    [x] winner 빈 리스트로 초기화
    [x] printArray 길이만큼 반복
        [x] printArray의 i번째와 winnerNumber가 같을 때
            [x] winner에 index 번호 삽입

### showWinner()

    [x] winnerMessage에 "최종 우승자 :" 메세지 저장
    [x] winner의 길이만큼 반복
        [x] winnerMessage에 nameList의 x번째 항목을 더함. 이 때 x는 winner의 i번째 요소임
        [x] winnerMessage 출력
