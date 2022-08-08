# 장바구니 만들기

## ~ 2022.07.26 개발 사항
* Vue CLI를 이용해 FrontEnd 서버 구축
* FrontEnd - 헤더 컴포넌트 약식 구현 (Header.vue)
* FrontEnd - 라우팅 작업
* FrontEnd - 로그인 화면 구현(Login.vue)
* FrontEnd - Robot 폰트 적용
* FrontEnd - 상품 화면 구현 중..(Products.vue)

## ~ 2022.07.28 개발 사항
* FrontEnd - 상품 선택 화면 80% (Products.vue)

## ~ 2022.08.03 개발 사항
* FrontEnd - 상품 선택 화면 구현 (Products.vue)
* FrontEnd - 장바구니 화면 구현 (Cart.vue)
* FrontEnd - 회원가입 모달창 생성 (Login.vue)
* FrontEnd - 주문 모달창 생성 (Cart.vue)
* FrontEnd - 회원가입 모달창 완성 (Login.vue)
* FrontEnd - 주문 모달창 완성 (Cart.vue)
* 모든 화면은 추후 재수정 할 것

## ~ 2022.08.04 개발 사항
* FrontEnd - 홈, 로그인 화면 통합 (Home.vue)
* BackEnd - 데이터베이스 생성, 테이블 정의
* BackEnd - REST 주소 설계

## ~ 2022.08.08 개발 사항
* BackEnd - 서버 구조 설계 (controller, routes, models, public ...)
* BackEnd - Cors 이슈 해결 (cors 의존성 추가)
* FrontEnd - axios로 backend와 통신 (/api/)



# 데이터베이스 테이블 정의


# REST 주소 설계
|HTTP 메소드|주소|역할|
|:--:|:--:|:--:|
|GET|/api|로그인 체크|
|POST|/api/auth/login|로그인|
|POST|/api/auth/register|유저 회원가입|
|GET|/api/auth/logout|로그아웃|
|GET|/api/products|상품 정보 제공|
|POST|/api/products|장바구니에 상품 등록|
|GET|/api/carts|장바구니에 등록된 상품 정보 제공|
|DELETE|/api/carts|장바구니에서 선택된 상품 제거|
|POST|/api/order|장바구니에 등록된 상품 주문|