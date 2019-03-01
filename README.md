# movieql

- Movie API with Graphql

- graphql 예제 따라해보기



## graphql 로 해결할 수 있는 두가지

- Over-fetching : 요청한 영역보다 많은 정보를 서버에서 받는 일

- Under-fetching : 한페이지에서 한번에 여러번의 쿼리를 요청해야 하는 일

요청한 것만 정확하게 받을 수 있다. 



## 예제를 도와주는 도구 설치

### graphql-yoga

- 그래프큐엘을 빠르고 쉽게 사용할 수 있도록 도와주는 도구 
- react로 치자면 create-react-app 과 비슷하다.

### nodemon 

- 파일이 수정 후 save 될 때마다 서버를 재시작 해주는 툴.
- package.json의 scripts 부분에 start  : nodemon 이렇게 하고 yarn start 로 실행해주면, main이라고 지정되어있는 파일(index.js 등)이 수정될때마다 앱을 재시작하게 도와준다.
- 그래프큐엘은 변경되더라도 재시작이 되지 않는다. 

### babel-node

- node-js의 import 구문과 같은 걸 사용할수 있게 해줌
- babel-cli가 선행적으로 깔려 있어야 함.



## 구조

- graphqlserver : 그래프큐엘을 실행하는 서버, 다음 두가지를 인자로 받는다. 
   - typeDefs : 타입을 정의한 문서(스키마) - 형식
   - resolvers : 데이터를 요청에 의해 실제로 전달해주는 객체 - 내용