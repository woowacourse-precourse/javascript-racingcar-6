# 미션 - 자동차 경주

## 🛠️ 구현할 기능 목록 정리

- [x] app - 경주할 자동차 이름 입력받기
- [x] app - 경주할 자동차 이름 입력 유효성 검사
- [x] app - 경주할 자동차 이름 입력을 통해 자동차 객체 생성
- [x] app - 시도할 횟수 입력받기
- [x] app - 시도할 횟수 입력 유효성 검사
- [x] 자동차 - 랜덤한 숫자 결정하기
- [x] 자동차 - 랜덤한 숫자를 통해 전진 판별
- [x] app - 시도 횟수 만큼 자동차들 전진 반복
- [x] app - 시도 횟수 마다 자동차 실행 결과 출력
- [x] app - 모든 시도 이후 최종 우승자 판별
- [x] app - 최종 우승자 출력

## 🧐 추가 고려사항

- 각 자동차의 이름은 영어 대소문자만 가능하다. (특수문자 입력, 특히 공백문자나 ','가 이름에 들어갈 경우의 혼란 방지)
- 각 자동차의 이름은 중복되지 않아야 한다. (중복 이름이 있는 경우 과정 및 결과에 대한 혼란 방지)
- 시도 횟수는 1 이상의 자연수여야 한다.

## 📜 파일 트리

📦javascript-racingcar-6  
 ┣ 📂__tests__  
 ┃ ┣ 📂controller  
 ┃ ┃ ┗ 📜RacingController.test.js  
 ┃ ┣ 📂model  
 ┃ ┃ ┗ 📜RacingCar.test.js  
 ┃ ┣ 📂validate  
 ┃ ┃ ┗ 📜RacingCarValidator.test.js  
 ┃ ┣ 📂view  
 ┃ ┃ ┣ 📜inputView.test.js  
 ┃ ┃ ┗ 📜outputView.test.js  
 ┃ ┣ 📜ApplicationTest.js  
 ┃ ┗ 📜StringTest.js  
 ┣ 📂src  
 ┃ ┣ 📂constants  
 ┃ ┃ ┣ 📜consoleMessages.js  
 ┃ ┃ ┗ 📜errorMessages.js  
 ┃ ┣ 📂controller  
 ┃ ┃ ┗ 📜RacingController.js  
 ┃ ┣ 📂error  
 ┃ ┃ ┗ 📜CustomErrors.js  
 ┃ ┣ 📂model  
 ┃ ┃ ┗ 📜RacingCar.js  
 ┃ ┣ 📂validate  
 ┃ ┃ ┗ 📜RacingCarValidator.js  
 ┃ ┣ 📂view  
 ┃ ┃ ┣ 📜InputView.js  
 ┃ ┃ ┗ 📜OutputView.js  
 ┃ ┣ 📜App.js  
 ┃ ┗ 📜index.js  
 ┣ 📜.gitignore  
 ┣ 📜.npmrc  
 ┣ 📜README.md  
 ┣ 📜package-lock.json  
 ┗ 📜package.json  