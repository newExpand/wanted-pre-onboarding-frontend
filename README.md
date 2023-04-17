# 원티드 프리온보딩(프론트엔드) - 선발 과제

원티드 프리온보딩 4월 프론트엔드 인턴십 사전과제 입니다.

## 개발 요건 및 유의사항 정리

1. **회원가입과 로그인 기능 구현**

✅ /signup 경로에 회원가입 기능 구현<br>
✅ /signin 경로에 로그인 기능 구현<br>
✅ 이메일 input, 비밀번호 input, 제출 button 포함된 UI 구성<br>
✅ 이메일 input에 data-testid="email-input" 속성 부여<br>
✅ 패스워드 input에 data-testid="password-input" 속성 부여<br>
✅ 회원가입 페이지에는 회원가입 button에 data-testid="signup-button" 속성 부여<br>
✅ 로그인 페이지에는 로그인 button에 data-testid="signin-button" 속성 부여<br>

2. **이메일과 비밀번호의 유효성 검사 구현**

✅ 이메일 조건: @ 포함<br>
✅ 비밀번호 조건: 8자 이상<br>
✅ 유효성 검사 통과하지 못하면 button에 disabled 속성 부여<br>
✅ 실제 사용하는 계정 대신 테스트용 이메일, 패스워드 사용 권장<br>

3. **회원가입 완료 후 리다이렉트 처리**

⬜ 회원가입 버튼 클릭 시 회원가입 진행<br>
⬜ 회원가입이 정상적으로 완료되면 /signin 경로로 이동<br>

4. **정상적인 로그인 시 JWT 저장 및 리다이렉트 처리**

⬜ 로그인 API의 응답에 JWT가 포함되어 있음<br>
⬜ 응답받은 JWT는 로컬 스토리지에 저장<br>
⬜ 정상적인 로그인 시 /todo 경로로 이동<br>

5. **로그인 여부에 따른 리다이렉트 처리**

⬜ 로컬 스토리지에 토큰이 있을 때 /signin 또는 /signup 페이지에 접속하면 /todo 경로로 리다이렉트<br>
⬜ 로컬 스토리지에 토큰이 없을 때 /todo 페이지에 접속하면 /signin 경로로 리다이렉트<br>

6. **투두 리스트 구현**

⬜ /todo 경로에 접속하면 투두 리스트의 목록을 볼 수 있어야 함.<br>
⬜ 목록에서는 TODO의 내용과 완료 여부가 표시되어야 함.<br>
⬜ TODO의 완료 여부는 체크박스를 통해 표현해야 함.<br>
⬜ TODO는 li 태그를 이용해서 감싸야 함.<br>
⬜ 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어야 함.<br>
⬜ TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여해야 함.<br>
⬜ TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여해야 함.<br>
⬜ 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되어야 함.<br>
⬜ TODO를 추가한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 함.<br>
⬜ TODO의 체크박스를 통해 완료 여부를 수정할 수 있어야 함.<br>
⬜ TODO 우측에 수정버튼과 삭제 버튼을 만들어야 함.<br>
⬜ 수정 버튼에는 data-testid="modify-button" 속성을 부여해야 함.<br>
⬜ 삭제 버튼에는 data-testid="delete-button" 속성을 부여해야 함.<br>
⬜ 투두 리스트의 삭제 기능을 구현해야 함.<br>
⬜ 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되어야 함.<br>
⬜ 투두 리스트의 수정 기능을 구현해야 함.<br>
⬜ TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되어야 함.<br>
⬜ 수정모드에서는 TODO의 내용을 변경할 수 있어야 함.<br>
⬜ 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경되어야 함.<br>
⬜ 수정 input창에는 data-testid="modify-input" 속성을 부여해야 함.<br>
⬜ 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되어야 함.<br>
⬜ 제출버튼에는 data-testid="submit-button" 속성을 부여해야 함.<br>
⬜ 취소버튼에는 data-testid="cancel-button" 속성을 부여해야 함.<br>
⬜ 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 되어야 함.<br>
⬜ 취소버튼을 누르면 수정한 내용을 초기화하고, 수정모드를 비활성화 해야 함.
