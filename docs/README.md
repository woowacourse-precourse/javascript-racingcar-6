# 1. 1주차 회고
## 1.1 목표 성취도 
- 🟢 깃 
- 🟢 JS 
- 🔴 Node.js 
- 🟢 기능 목록 작성 
- 🟡 작성한 단위에 맞게 개발 및 커밋 

<br />
 
## 1.2 공통 피드백
- 🔴 요구사항 정확히 준수  (test 통과 x)
- 🟢 커밋 메세지 의미있게 작성하기 
- 🟢 git 업로드 x (node_modules 폴더, .vscode 폴더) 
- 🟢 PR 브랜치 확인 (sthgml) 
- 🟢 PR 한 번 만들면 머지 전까지는 추가 커밋하면 반영됨 
- 🟡 변수, 함수 네이밍에 공들일 것 (연속된 숫자, Info, Data, a, an, the 사용 x, 축약 x) 
- 🟡 공백 
  - 🟡 for, if, while 문 사이 한 칸 씩 띄우기 
  - 🟡 문맥을 분리하는 부분에 한 줄씩 띄우기 
- 🟢 들여쓰기 : space와 tab을 혼용하지 않는다 
- 🟢 eslint, prettier 사용하기 
- 🔴 EOL확인하기 (End of line) 
- 🔴 디버깅용 console.log 삭제하기 
- 🟢 함수를 구현하기 전, 자스 기본 제공 api인지 확인하기 

<br />
 
## 1.3 내가 앞으로 할 일 ✅ ❌
- [x]숫자 야구 게임 설명 영상 시청 
  > - (야구게임의 app임을 명시)baseball/app.js
  > - 다른 기능 함수로 분리할 때 폴더구조도 분리
  >   - 메서드의 이름(파라미터) : 메서드의 아이덴티티 (시그니처)
  > - 객체 지향
  >   - 기능을 가진 클래스를 인스턴스 화 한다. 
  >     - (숫자 만드는 객체 - NumberGenerator) 
  >     - (숫자 비교하는 객체 - Judge)
  >     - (자리 맞는지 확인하는 객체 - Judgement)
  >   - 필요한 기능을 역할에 맞는 인스턴스가 수행하게 한다. 
  >     - (숫자 만드는 메서드 - NumberGenerator.createRandomNumbers())
  >     - (숫자 비교하는 메서드 - Judge.compare([1,2,3],[2,3,4]))
  >     - (자리 맞는지 확인하는 메서드 - Judgement.isRightNumber(), Judgement.isRightPlace())
  >   - 각 결과를 조합한다 : 협력; 
  >     -(볼, 스트라이크 개수 구하는 메서드 - Judge.compare() 안에 Judgement.isRightNumber() + Judgement.isRightPlace()를 조합하여 볼과 스트라이크 개수 구하기)
- [x] 기능 목록 작성  
- [ ] ESlint 설치 및 사용법 공부
- [x] [EOL 확인](https://avocado12-note.tistory.com/11)

<br />
 
<br />
 
# 2. 2주차 
## 2.1 기능 목록
- [x] 사용자한테 입력 받기 (getUserInput())
  - [x] 출전 선수 목록 (players)
  - [x] 몇 번의 이동을 할 것인지 입력 받기 (moveNumber)
- [x] 입력 유효성 검사 (Inspector)
  - [x] 쉼표로 구분이 되어 있는지 (isSplited())
  - [x] 각 이름이 5자 이하인지 -(isUnderFive())-
  - [x] 두 명 이상인지
  - [x] 숫자인지 isNumber (JS함수 혹은 정규표현식 사용)
- [x] 경주 시작 (Race)
  - [x] 0 - 9의 랜덤 숫자 구하기 (NumberGenerator.getRandomNumber())
  - [x] 숫자에 따라 전진 혹은 유지 구분하기 (isSuccess())
  - [x] 전진 기능 구현 (moveForwards())
  - [x] players 수만큼 반복 (printResult())
  - [x] 입력한 횟수만큼 반복 (compete())
- [x] 경주 끝 (Award) 
  - [x] 우승자 구하기 (getWinner())
  - [x] 여러명일 경우 쉼표로 나누기

<br />
 
## 2.2 구현 하면서 지킬 것
- 객체 지향 적으로 프로그래밍 하기 
  - 인덴트 2개 까지만
- 작성한 단위대로 커밋 
- 컨벤션 확인
  - 변수, 함수 네이밍에 공들일 것 (연속된 숫자, Info, Data, a, an, the 사용 x, 축약 x)
  - 공백  
    - for, if, while 문 사이 한 칸 씩 띄우기
    - 문맥을 분리하는 부분에 한 줄씩 띄우기

<br />
 
## 2.3 구현 후에 확인 할 것
- [x] 작동 확인 
- [ ] 테스트 코드 작성
  - [ ] Car.js
    - [ ] isSuccess()
    - [ ] getResultMessage(success)
    - [ ] moveForwards()
  - [ ] Inspector.js
    - [ ] isSplitable(string)
    - [ ] isNumber(num)
  - [x] NumberGenerator.js
    - [x] getRandomNumber()
  - [ ] Prompter.js
    - [ ] getUserInput()
  - [ ] Race.js
    - [ ] compete()
    - [ ] printResult()
    - [ ] handleMoveForwards(car)
    - [ ] getWinner()
- [x] 디버깅용 console.log 삭제하기 
- [x] EOL확인하기 (End of line) 
- [x] 컨벤션 확인
  - [x] 변수, 함수 네이밍에 공들일 것 (연속된 숫자, Info, Data, a, an, the 사용 x, 축약 x)
  - [x] 공백  
    - [x] for, if, while 문 사이 한 칸 씩 띄우기
    - [x] 문맥을 분리하는 부분에 한 줄씩 띄우기

## 99. 커밋 컨벤션
| ✨ feat | 기능 추가, 삭제, 변경 |
| --- | --- |
| 🐛 fix | 버그, 오류 수정 |
| 📝 docs | README.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음) |
| 🎨 style | CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경) |
| ♻️ refactor | 코드 리팩토링 |
| 🧪 test | 테스트 코드 추가, 삭제, 변경 등 (코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당) |
| ⚙️ config | npm 모듈 설치 등 |
| 🌱 chore | 패키지 매니저 설정할 경우, etc 등 (ex. gitignore) |
| 💬 comment | 필요한 주석 추가 및 변경 |
| 🚚 rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| 🗑️ remove | 파일을 삭제하는 작업만 수행한 경우 |