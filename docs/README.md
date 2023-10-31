### 기능 구현 목록

1. 자동차 이름 입력
1) 사용자 입력값을 다룰 파일 별도로 만들기 (UserInput.js)
2) App.js 파일과 연결하기
3) 입력값 array 형태로 만들기
- 입력한 값은 ','로 구분함 (split 사용)
4) 입력값을 저장할 장소 만들기(별도 파일, constructor 사용)

2. 유효성검사1(자동차 이름 입력)
- 별도 파일 만들기 (Valication.js)
- 5글자까지만 입력 가능
- 공란 입력시 오류
- 중복 단어 사용 불가

3. 게임 횟수 입력
- 게임 횟수 입력받기

4. 유효성검사2(게임 횟수 입력)
- 숫자만 입력 가능

5. 입력 값으로 게임 실행
1) 게임실행 별도 파일 만들기
- 사용자가 입력한 값을 외부 파일의 함수로 보내려면 아래와 같이 불러와함
let score = new Score
score.getScore(this.cars)
2) 자동차 전진 (getScore())
- 자동차 이름별로 0-9 사이에의 랜덤 값 부여하기
- 차이름(array 요소)마다 부여한 랜덤값이 4인 경우 '-' 출력되게 하기
(forEach 사용)
- '-'을 저장할 공간 부여해서 저장하기
(constructor {this.score}와 element.score += '-')
- '이름: -' 형식 출력하기
(constructor {this.name, this.score} 사용)
3) 입력한 게임 횟수만큼 '자동차 전진' 반복
- 입력한 게임횟수만큼 getScore()를 반복실행하는 playGame() 함수 만들기
- UserInput.js 파일에서 입력값 받아오기(게임횟수, 차이름)

6. 실행 결과로 우승자 출력
1) 실행결과의 score값이 최대값인 요소 고르는 함수 만들기 (getWinner)
- playGame(count,names)에서 받아온 'names'에는 차이름, score 정보 모두 들어있음
2) 실행결과(currentScore) array 형태 정리하기
- 형태정리: array.forEach 사용
[ Save { name: '이름1', score: '' },
  Save { name: '이름2', score: '--' },
  Save { name: '이름3', score: '--' } ]
=> [{이름1, 점수1}, {이름2, 점수2}, {이름3, 점수3}]
- 최대값 비교를 위해 score 값을 숫자로 변환
(score.length: '-' 문자열 길이 세기)
3) score 최대값 구하기 (max_val)
- arr.map.reduce 사용
4) array 각 요소의 score값과 이전에 구한 최대값 비교하기
- 우승자 이름을 담는 새로운 array 만들기
- 각 요소의 score 값과 최대값이 같으면(forEach 사용)
새로 만든 array에 요소의 이름(this.name) 넣기(array.push)
- 우승자 출력

7. 테스트 오류 수정
1) await 함수로 선언된 함수를 사용하려면, 그 함수를 사용하는 상위함수가 async 함수여야함
UserInput.js 내부
- userInputPlayNumber()의 상위함수인 getCarNames() 함수를 async 함수로 만들기, await this.userInputPlayNumber() (await 붙이기)
- getCarNames() 함수를 호출하는 userInputCarName() 함수는 이미 async 함수, getCarNames() 앞에 await
App.js 내부
- userInputCarName() 함수를 호출하는 play() 함수는 이미 async 함수, userInputCarName() 앞에 await

2) 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우
Score.js 
getScore() 함수 내용 중
if (MissionUtils.Random.pickNumberInRange(1, 9) >= 4) ㄴ으로 수정

