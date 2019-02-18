# movieql
- Movie API with Graphql

- graphql 예제 따라해보기

## 

### graphql 로 해결할 수 있는 두가지

- Over-fetching : 요청한 영역보다 많은 정보를 서버에서 받는 일

- Under-fetching : 한페이지에서 한번에 여러번의 쿼리를 요청해야 하는 일

요청한 것만 정확하게 받을 수 있다. 



### nodemon 

- 파일이 수정 후 save 될 때마다 서버를 재시작 해주는 툴.
- package.json의 scripts 부분에 start  : nodemon 이렇게 하고 yarn start 로 실행해주면, main이라고 지정되어있는 파일(index.js 등)이 수정될때마다 앱을 재시작하게 도와준다.



### babel-node

- node-js의 import 구문과 같은 걸 사용할수 있게 해줌
- babel-cli가 선행적으로 깔려 있어야 함.