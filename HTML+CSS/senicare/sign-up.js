var users = [
    {
        name: '이성계',
        id: 'teajo',
        password: 'qwer1234',
        telnumber: '01011111111'
    },
    {
        name: '이방과',
        id: 'jungjong',
        password: 'qwer1234',
        telnumber: '01022222222'
    },
    {
        name: '이방원',
        id: 'teajong',
        password: 'qwer1234',
        telnumber: '01033333333'
    }
];

var authNumberBoxElement = document.getElementById('auth-number-box');

var userNameElement = document.getElementById('user-name');
var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var userPasswordCheckElement = document.getElementById('user-password-check');
var userTelnumberElement = document.getElementById('user-telnumber');
var authNumberElement = document.getElementById('auth-number');

var userNameMessageElement = document.getElementById('user-name-message');
var userIdMessageElement = document.getElementById('user-id-message');
var userPasswordMessageElement = document.getElementById('user-password-message');
var userPasswordCheckMessageElement = document.getElementById('user-password-check-message');
var userTelnumberMessageElement = document.getElementById('user-telnumber-message');
var authNumberMessageElement = document.getElementById('auth-number-message');

var userIdButtonElement = document.getElementById('user-id-button');
var userTelnumberButtonElement = document.getElementById('user-telnumber-button');
var authNumberButtonElement = document.getElementById('auth-number-button');
var signUpButtonElement = document.getElementById('sign-up-button');

var userName = '', userId = '', userPassword = '', userPasswordCheck = '', userTelnumber = '', authNumber = ''; 
var isDuplicatedId = true, isPasswordMatch = false, isEqualPassword = false, isSendTel = false, isTelAuth = false;

var isPossible = false;

//% 정보들 체크
function checkPossible() {
    var isAllEnter = userName && userId && userPassword && userPasswordCheck && userTelnumber && authNumber;
    var isAllCondition = !isDuplicatedId && isPasswordMatch && isEqualPassword && isSendTel && isTelAuth;
    isPossible = isAllEnter && isAllCondition;

    if (isPossible) signUpButtonElement.className = 'button primary full-width';
    else signUpButtonElement.className = 'button disable full-width';
};

//% 유저 이름 
function userNameInputHandler(event) {
    userName = event.target.value;

    if (userName) {
        userNameMessageElement.textContent = '';
        userNameMessageElement.className = 'message';
    } else {
        userNameMessageElement.textContent = '이름을 입력해주세요.';
        userNameMessageElement.className = 'message error';
    }

    checkPossible();
};

//% 아이디 input 감지해서 버튼 활성화 | 비활성화 시키는 함수
// + input 내용을 비우면 class 상태를 기본 상태로 변경
function userIdInputHandler(event) {
    isDuplicatedId = true;
    // 처음엔 무조건 중복이다. 라고 되어있는
    userId = event.target.value;

    userIdMessageElement.textContent = '';
    userIdMessageElement.className = 'message';

    // if (userId) userIdButtonElement.className = 'input-button active';
    // else userIdButtonElement.className = 'input-button disable';

    userIdButtonElement.className = 'input-button ' + (userId ? 'active' : 'disable');

    checkPossible();
};

//% 비밀번호 유효성 검사
function userPasswordInputHandler(event) {
    var pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
    //& ?=.* : 반드시 포함
    //& /^ $/ : 시작과 끝
    userPassword = event.target.value;

    //& 비우는 것 & 기본 상태를 위로 해둬야 잘 먹힘
    userPasswordMessageElement.textContent = '';
    userPasswordMessageElement.className = 'message';

    isPasswordMatch = pattern.test(userPassword);
    //& test() 
    // : 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별
    //   그 여부를 true 또는 false로 반환

    if (!isPasswordMatch && userPassword) {
        userPasswordMessageElement.textContent = '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요.';
        userPasswordMessageElement.className = 'message error';
        // return; - 밑에 이어져서 나올 내용이 없을 땐 필요 없음
    }

    checkPossible();
};

//% 비밀번호 확인
function userPasswordCheckInputHandler(event) {
    userPasswordCheck = event.target.value;

    isEqualPassword = userPassword === userPasswordCheck;

    if (isEqualPassword || !userPasswordCheck) {
        userPasswordCheckMessageElement.textContent = '';
        userPasswordCheckMessageElement.className = 'message';
    } else {
        userPasswordCheckMessageElement.textContent = '비밀번호가 일치하지 않습니다.';
        userPasswordCheckMessageElement.className = 'message error';
    }

    checkPossible();
};

//% 전화번호 확인
// + 처음엔 인증번호 창이 안 보이도록 -> 전화번호 인증 버튼 누른 후 인증번호 창 보이게
function userTelnumberInputHandler(event) {
    isSendTel = false;
    authNumberBoxElement.style.display = 'none';
    authNumberElement.value = '';

    var pattern = /^[0-9]{11}$/;
    userTelnumber = event.target.value;

    var isMatched = pattern.test(userTelnumber);

    if (!userTelnumber) {
        userTelnumberMessageElement.textContent = '';
        userTelnumberMessageElement.className = 'message';
        userTelnumberButtonElement.className = 'input-button disable';
    } else if (isMatched) {
        userTelnumberMessageElement.textContent = '';
        userTelnumberMessageElement.className = 'message';
        userTelnumberButtonElement.className = 'input-button active';
    } else {
        userTelnumberMessageElement.textContent = '숫자 11자 입력해주세요.';
        userTelnumberMessageElement.className = 'message error';
        userTelnumberButtonElement.className = 'input-button disable';
    }

    checkPossible();
};

//% 인증번호 확인 버튼 활성화 여부
function authNumberInputHandler(event) {
    isTelAuth = false;
    authNumber = event.target.value;
    if (authNumber) authNumberButtonElement.className = 'input-button active';
    else authNumberButtonElement.className = 'input-button disable';

    checkPossible();
};

//% 아이디 존재 여부에 따른 메세지를 출력하는 함수
function userIdButtonClickHandler(event) {
    if (!userId) return;

    // some() : 배열에서 적어도 하나의 요소가 존재하는지 확인
    isDuplicatedId = users.some((item, index) => {
        return item.id === userId;
    }); 

    if (isDuplicatedId) {
        userIdMessageElement.textContent = '이미 존재하는 아이디입니다.';
        userIdMessageElement.className = 'message error';
    } else {
        userIdMessageElement.textContent = '사용 가능한 아이디입니다.';
        userIdMessageElement.className = 'message primary';
    }

    checkPossible();
};

//% 전화번호 인증 버튼 눌렀을 때 이벤트 함수
function userTelnumberButtonClickHandler(event) {
    var pattern = /^[0-9]{11}$/;

    var isMatched = pattern.test(userTelnumber);
    if (!isMatched) return;

    isSendTel = true;
    userTelnumberMessageElement.textContent = '인증번호가 전송되었습니다.';
    userTelnumberMessageElement.className = 'message primary';
    authNumberBoxElement.style.display = 'flex';

    checkPossible();
};

//% 인증번호 확인 버튼 누른 후 상태여부 (임의로 인증번호 넣어둠)
function authNumberButtonClickHandler() {
    if (!authNumber) return;

    isTelAuth = authNumber === '2684';

    if (isTelAuth) {
        authNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
        authNumberMessageElement.className = 'message primary';
    } else {
        authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        authNumberMessageElement.className = 'message error';
    }

    checkPossible();
};

//% 회원가입 버튼
function signUpButtonClickHandler(event) {
    if (!isPossible) return;
    alert('회원가입!');
    location.href = './sign-in.html';
};

userNameElement.addEventListener('input', userNameInputHandler);
userIdElement.addEventListener('input', userIdInputHandler);
userPasswordElement.addEventListener('input', userPasswordInputHandler);
userPasswordCheckElement.addEventListener('input', userPasswordCheckInputHandler);
userTelnumberElement.addEventListener('input', userTelnumberInputHandler);
authNumberElement.addEventListener('input', authNumberInputHandler);

userIdButtonElement.addEventListener('click', userIdButtonClickHandler);
userTelnumberButtonElement.addEventListener('click', userTelnumberButtonClickHandler);
authNumberButtonElement.addEventListener('click', authNumberButtonClickHandler);
signUpButtonElement.addEventListener('click', signUpButtonClickHandler);

//& JS에선 값을 직접 바꿔줘야 함 EX) false -> true

