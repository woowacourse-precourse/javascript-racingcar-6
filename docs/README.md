# :computer: [FE] JonghyunLEE12

###  

### :white_check_mark: 구현 로직 순서

- [x] ##### 경주할 자동차 이름 입력 받기.

  - [x] ##### 입력값(이름) 유효성 검사 진행.

- [x] ##### 시도할 횟수 입력 받기.

  - [x] ##### 입력값(횟수) 유효성 검사 진행.

- [x] ##### 시도할 횟수를 기준으로 각 차수별 실행 결과 출력

  - [x] ##### 0 - 9 무작위 값 범위 확인.

  - [x] ##### 자동차 전진 출력하기

  - [x] ##### 단독 우승 또는 공동 우승 확인

- [x] ##### 우승자 출력



#### 커밋 컨벤션

```
feat (feature)
fix (bug fix)
docs (documentation)
style (formatting, missing semi colons, …)
refactor
test (when adding missing tests)
chore (maintain)
```



#### 커밋메세지 영어에서 한글로 변경

우테코 프리코스 미션 중 `커밋 메시지를 의미 있게 작성한다` 라는 피드백이 있어,
해당 커밋에 작업한 내용에 대한 이해가 되도록 영어에서 한글로 작성하게 되었습니다.



#### :wrench: 첫번째 리팩토링

MVC 패턴을 기반으로 하던 중  `의존성원칙` 에 대한 중요성을 알게 되었습니다.

1. Model은 View 와 Controller의 의존하면 안된다.
2. View는 사용자에게 데이터를 보여주는 역할
3. Controller는 중개자로, Model 과 View 모두 의존 가능



`의존성원칙` 을 생각하며 코드 리팩토링 하였습니다.