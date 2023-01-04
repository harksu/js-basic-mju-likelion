## **실행 방법**

1. npm install
2. npm start

## **Main Point**

최대한의 클린코드와, 기본적으로 요구되는 모든 코드적 기능 구현을 최우선으로 하여 코드를 작성하였습니다 :)
확장하려고하면 얼마든지 할 수 있지만, 프로젝트의 규모가 이번의 목적이 아니기 때문에 보다 완성도를 높이기 위해서 코드를 작성하였고 사실 바닐라 자바스크립트가 너무 오랜만이라서 코드가 다소 난잡할 수 있지만 그래도 직접 박치기하면서 코드 짜니까 오랜만에 즐거웠습니다.
특히 그냥 단순히 화살표 함수를 사용하는 것이 습관이 되어서 아무 생각없이 사용을 하다가, 이벤트 리스너에 콜백 함수로 적용하는 부분에서 이상한 에러로 잠시 애를 좀 먹어서 이 부분이 공부가 더 잘되었던 것 같습니다.
새벽에 작성하니까 뭐라고 하는지 하나도 모르겠네요

## **Main Point - typescript**

뭔가 todolist하면 생각나는게, 'CRUD를 이용할 수 있는 미니 프로젝트의 바이블'이라고 생각합니다.  
그렇기 때문에 단순히 함수로만 나누어서 파일 분리를 제대로 하지 않았었는데, 함수는 하나의 기능만을 수행하고 최소한의 크기를 가져야 한다는 클린 코딩 컨벤션과 1차 세션의 피드백을 지키고자 최대한 **종속성을 제거하고 이름에 맞는 기능만을 수행하는 함수를 만드는데 초점을 두어 리팩토링을 진행하였습니다.**

첫 번째로 수정한 피드백 사항은, update기능에서 element간의 순서 종속성을 제거하는 것이였습니다.  
단순히 제가 작성한 코드이기때문에 순서를 확실히 보장한다는 오만에서 비롯된 코드였으나, 추후 수정 및 확장성에 대비해서 id를 부여하였고 양자역학 다음으로 고유성에 적합하다고 생각하는 시간 값과 배열의 길이를 조합하여 해쉬코드를 작성하였습니다.

두 번째로 수정한 피드백 사항은, 함수의 기능에 맞는 네이밍 컨벤션 준수입니다.  
기능은 다 작동하지만, 협업에 있어서 누군가 제 코드를 작성할 때 가독성을 제공하기 위함과 추후 리팩토링을 진행할 때 제 자신을 위해서라도 네이밍과 코드 스타일링에 조금씩 신경쓰면서 작업하고자 하는 자세를 지니려고 합니다.

typescript가 이번이 처음이라서, 기존에 알고 있던 로직임에도 불구하고 리팩토링이 생각보다 오래걸렸습니다.  
타입을 선언하지만 할당은 하지 않아 계속해서 나오는 undefined를 이해하지 못하였고, 출력 경로 설정을 잊어먹어서 다시 되돌리는등의 실수와 '보다 더 깔끔하게 만들 수 있었을 것 같은데' 라는 아쉬움이 남습니다.

이번 과제를 통해서 네이밍 컨벤션과 코드 컨벤션 및 함수의 종속성, 폴더 구조에 대해서 공부를 해야 할 필요성을 느꼈고 이는 앞으로 공부하면서 보완해 나갈 예정입니다.

## **Main Point - webpack**

웹팩을 적용하면서 느꼈던 건, 작업하는데 있어선 확실히 여러개의 파일로 나누어 모듈화하는 방식이 더 효율적이라고 생각하면서도 '이러면 너무 복잡해지는거 아닌가?' 라는 의문에 대한 1차적인 해소였습니다. 물론 조금 더 공부하고 적용해보면서 익숙해져야 진가를 알겠지만, 여러개의 파일을 압축하여 실행한다면 확실히 실행의 속도적인 측면에서 이점으로 작용할 것이라고 생각합니다.

webpack 또한 처음 사용하는거였는데, 그러다 보니 config파일에 대한 이해가 다소 부족하여 우선은 구글링을 통하여 적용하고 학습하는 방식으로 적용했습니다.

bundling하는 과정에서, import구문에 js확장자를 포함하여 모듈을 찾을 수 없는 이슈가 있었으며(컴파일 전에는 ts파일만이 존재하므로 js파일이 없기 때문에 발생한 문제였습니다) 엔트리 포인트를 통하여 1차적으로 js 파일로 변환후의 실행해주지만 기존의 html 파일에도 script 파일을 module로 명시하여 실행이 2번되는 이슈가 있었습니다.

추가 과제를 통해서 느낀 점은, 웹팩을 통해서 프로젝트를 진행할 때 웹팩의 작동방식과 typesciprt와의 연동 과정(ts->js->bundling ? ts -> bundling -> js?) 등을 조금 더 공부해야 될 것 같습니다.

## **Commit convention**

Feat: 새로운 기능 추가  
Fix: 버그 수정  
Docs: 문서,주석 수정  
Style: 코드 포맷 변경, 세미콜론 누락, 코드 변경 없음  
Refactor: 프로덕션 코드 리팩터링  
Test: 테스트 추가, 테스트 코드 리팩터링, 프로덕션 코드 변경 없음  
Chore: 빌드 테스크 업데이트, 패키지 매니저 환경설정, 프로덕션 코드 변경 없음  
Merge : 합병 및 깃 충돌 해결 커밋 메시지

## **Branch convention**

기능 구현 -> 작업자 이름*Featuring*컴포넌트명 or 페이지명  
스타일링 -> 작업자 이름*Styling*컴포넌트명 or 페이지명  
테스트 -> 작업자 이름*Testing*컴포넌트명 or 페이지명  
리팩터링 -> 작업자이름*Refactoring*컴포넌트명 or 페이지명

## **폴더구조**는 다음과 같습니다.

```
├── 📂 dist //타입스크립트의 컴파일 및 번들링 후 자바스크립트,html파일 저장 폴더입니다
│
│
├── 📂 store // localstorage에 저장 및 로드 되는 데이터를 여기서 관리하고자 합니다.
│   ├── 📂 data
│   │   ├── 📝 getTodo.ts
│   │   └── 📝 saveTodo.ts
│   ├── 📝 key.ts
│   └── 📝 todoArray.ts //todo 객체를 보관하는 파일입니다.
│
├── 📂 todo //투두 리스트 구현에 필요한 핵심 기능들을 수행하는 함수들의 폴더입니다
│   ├── 📝 addTodo.ts
│   ├── 📝 createTodo.ts
│   ├── 📝 deleteTodo.ts
│   └── 📝 updateTodo.ts
│
├── 📝 todo.ts,type.ts //초기 실행하는 init함수,dom 객체 선택 및 타입을 지정하는 파일입니다 (타입을 별도로 빼려다가, 하나밖에 없어서 우선은 여기다가 두었습니다)
│
└── 🛠package.json,README.md,gitignore,tsconfig.json ...

```
