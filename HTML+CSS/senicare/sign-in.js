var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

// 임의로 로그인 정보를 if 조건으로 받아서 로그인 유무 확인하는 함수
function onSignInButtonClickHandler(event) {
    var userId = userIdElement.value;
    var userPassword = userPasswordElement.value;

    if (userId !== 'qwer1234' || userPassword !== '1234') {
        messageElement.textContent = '로그인 정보가 일치하지 않습니다.';
        return;
    } 

    alert('로그인 성공!');
    messageElement.textContent = '';
};

// enter키 탭했을 때 비밀번호 input으로 포커스 옮기는 함수
function userIdKeyPressHandler(event) {
    if (event.key === 'Enter') userPasswordElement.focus();
};

// 비밀번호 input에서 enter 시 로그인 유무 확인하는 함수를 호출하기
function userPasswordKeyPressHandler(event) {
    if (event.key === 'Enter') onSignInButtonClickHandler();
};

signInButton.addEventListener('click', onSignInButtonClickHandler);
userIdElement.addEventListener('keypress', userIdKeyPressHandler);
userPasswordElement.addEventListener('keypress', userPasswordKeyPressHandler);