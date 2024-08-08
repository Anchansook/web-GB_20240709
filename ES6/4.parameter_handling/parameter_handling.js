/*
    매개변수 기본값 : 
    - 함수 호출 시 매개변수를 전달하지 않으면 사용할 '기본값을 지정'할 수 있음
*/
const add = (a = 5, b = 10) => a + b;
console.log( add() );
console.log( add(50, 99) );


console.log('========================================');

/*
    rest 매개변수 : 
    - 함수 선언 시 매개변수 앞에 ...을 붙여서 정의한 매개변수
    - 함수에 전달받는 매개변수를 배열로써 받음
    - 다른 매개변수와 같이 rest 매개변수를 사용할 땐 rest 매개변수를 제일 마지막에 선언해야 함 
*/
const restFunction = (...arg) => {
    console.log(arg);
};
restFunction(1, 2, 3, 4, 5);

const restFunction2 = (arg1, ...args) => { // 권장 X
    console.log(arg1);
    console.log(args);
};
restFunction2(1, 2, 4, 5, 7, 8);
/*
1
[ 2, 4, 5, 7, 8 ]
*/


console.log('========================================');

/*
    # spread 연산자 : 
    - ...을 사용하여 대상의 요소를 하나씩 분리
    - 연산자의 '피연산자는 반드시 반복 가능한 객체'(배열, 객체, 문자열, ...)
*/
const numbers = [1, 2, 3, 4];
console.log(numbers); // [ 1, 2, 3, 4 ]
console.log(...numbers); // 1 2 3 4


console.log('========================================');

// 배열 복사에 사용
const newNumbers = [...numbers]; // => [1, 2, 3, 4]
console.log(newNumbers);

newNumbers[0] = 20;
console.log(numbers); // [ 1, 2, 3, 4 ]
console.log(newNumbers); // [ 20, 2, 3, 4 ]


console.log('========================================');

// 배열 연결에 사용
const numbers2 = [5, 6, 7, 8];
let newNumbers2 = [...numbers, ...numbers2]; // => [1, 2, 3, 4, 5, 6, 7, 8]
console.log(newNumbers2);
newNumbers2 = [...numbers2, ...numbers]; // => [5, 6, 7, 8, 1, 2, 3, 4]
console.log(newNumbers2);
