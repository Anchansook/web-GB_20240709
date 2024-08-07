var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

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

function userIdKeyPressHandler(event) {
    if (event.key === 'Enter') userPasswordElement.focus();
};

function userPasswordKeyPressHandler(event) {
    if (event.key === 'Enter') onSignInButtonClickHandler();
};

signInButton.addEventListener('click', onSignInButtonClickHandler);
userIdElement.addEventListener('keypress', userIdKeyPressHandler);
userPasswordElement.addEventListener('keypress', userPasswordKeyPressHandler);