# 장바구니 만들기

# 사용 패키지
|파트|패키지명|용도|
|:--:|:--:|:--:|
|FrontEnd|Vue 3|프론트엔드 서버 구성|
|FrontEnd|Vue-CLI|프론트엔드 서버 구조 자동 설정|
|FrontEnd|Vue-Router|페이지 라우터 설정|
|FrontEnd|Vuex|상태 관리|
|FrontEnd|Axios|HTTP 통신|
|BackEnd|express|백엔드 서버 구성|
|BackEnd|morgan|서버 로그 체크|
|BackEnd|nodemon|서버 자동 재실행|
|BackEnd|cookie-parser|쿠키 설정|
|BackEnd|express-session|세션 설정|
|BackEnd|bcrypt|비밀번호 암호화|
|BackEnd|cors|cors 이슈 fix|
|BackEnd|dotenv|데이터 환경변수화|
|BackEnd|mysql2|Mysql DBMS 연결|
|BackEnd|passport|로그인 구현|
|BackEnd|passport-local|local-Strategy 사용|

# REST 주소 설계
|HTTP 메소드|주소|역할|
|:--:|:--:|:--:|
|GET|/api|로그인 체크|
|POST|/api/auth/login|로그인|
|POST|/api/auth/register|유저 회원가입|
|DELETE|/api/auth/logout|로그아웃|
|GET|/api/products|상품 정보 제공|
|POST|/api/carts|장바구니에 상품 등록|
|GET|/api/carts|장바구니에 등록된 상품 정보 제공|
|DELETE|/api/carts|장바구니에서 선택된 상품 제거|
|POST|/api/order|장바구니에 등록된 상품 주문|


## ~ 2022.07.26. 개발 사항
* Vue CLI를 이용해 FrontEnd 서버 구축
* FrontEnd - 헤더 컴포넌트 약식 구현 (Header.vue)
* FrontEnd - 라우팅 작업
* FrontEnd - 로그인 화면 구현(Login.vue)
* FrontEnd - Robot 폰트 적용
* FrontEnd - 상품 화면 구현 중..(Products.vue)


## ~ 2022.07.28. 개발 사항
* FrontEnd - 상품 선택 화면 80% (Products.vue)


## ~ 2022.08.03. 개발 사항
* FrontEnd - 상품 선택 화면 구현 (Products.vue)
* FrontEnd - 장바구니 화면 구현 (Cart.vue)
* FrontEnd - 회원가입 모달창 생성 (Login.vue)
* FrontEnd - 주문 모달창 생성 (Cart.vue)
* FrontEnd - 회원가입 모달창 완성 (Login.vue)
* FrontEnd - 주문 모달창 완성 (Cart.vue)
* 모든 화면은 추후 재수정 할 것


## ~ 2022.08.04. 개발 사항
* FrontEnd - 홈, 로그인 화면 통합 (Home.vue)
* BackEnd - 데이터베이스 생성, 테이블 정의
* BackEnd - REST 주소 설계


## ~ 2022.08.08. 개발 사항
* BackEnd - 서버 구조 설계 (controller, routes, models, public ...)
* BackEnd - Cors 이슈 해결 (cors 의존성 추가)
* FrontEnd - axios로 backend와 통신 (/api/)


## ~ 2022.08.09. 개발 사항
* FrontEnd - 회원가입 입력 값 체크 기능 구현(정규식)


## ~ 2022.08.10.
* BackEnd - express 서버와 Mysql 연결
* BackEnd - user 컨트롤러, 모델 생성 및 구현
* BackEnd - 회원가입 기능 구현
* BackEnd - bcrypt를 이용한 비밀번호 암호화 구현
* BackEnd - 이메일 중복 체크 구현
* BackEnd - products 컨트롤러, 모델 생성 및 구현
* BackEnd - 상품 정보 불러오기 구현
* BackEnd - Products 테이블에서 size 컬럼 삭제(DB)


## ~ 2022.08.13.
* BackEnd - 로그인 구현 중 발생한 버그로 아직도 고생 중..
* FrontEnd - Vuex로 중앙에서 상태 관리 시작
* FrontEnd - Credentials 이슈 fixed (axios에 {withCredentials: true} 전달)
* BackEnd - cors 미들웨어로 Credentials 이슈 fixed

## ~ 2022.08.14.
* BackEnd - 로그인 구현 성공..
* FrontEnd - 로그인된 사용자만 다른 페이지에 접근 가능하도록 설정
* FrontEnd - 새로고침 되면 State 초기화 되는 현상 fixed (localStorage 이용)

## ~ 2022.08.15.
* BackEnd - DB cart 테이블 product_id 컬럼 추가
* BackEnd - DB cart 테이블 count 컬럼 추가
* BackEnd - carts 컨트롤러, carts 모델 구현
* BackEnd - 장바구니 상품 추가 구현
* BackEnd - 장바구니 정보 불러오기 구현


# 데이터베이스 테이블 정의
