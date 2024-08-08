/*
    let
*/

/*
    블록 레벨 스코프 : 
    - 코드 블럭 내부에서 선언되어서 해당 코드 블럭에서만 사용 가능
*/
{
    var x = 10; 
}
console.log(x);

{
    let y = 10;
}
// console.log(y); - error


/*
    변수 중복 선언 불가 : 
    - 변수를 동일한 이름으로 여러 개 선언 불가능
*/
var x = 10;
var x = 20;

// let y = 10;
// let y = 20; - error


/*
    호이스팅 : var, function 선언문을 최상단에 선언한 것처럼 동작하는 것
    - let 키워드로 선언된 변수는 최상단(let의 최상단)에 선언은 되지만
        실제로 선언한 위치 이전까지는 일시적 사각지대로 빠트림
*/
console.log(z); // undefined
var z = 10;

// console.log(y); - error
// ReferenceError: Cannot access 'y' before initialization
let y = 10;

// console.log(y2); - error
// ReferenceError: y2 is not defined


/*
    & const
*/

/*
    선언과 초기화 : 
    - const 키워드로 선언된 변수는 재할당 불가능
    - '선언과 동시'에 반드시 '초기화'가 이루어져야 함
*/
const ASSIGNMENT = 10;

// ASSIGNMENT = 20; - 런타임 error
// TypeError: Assignment to constant variable.

// const INITIAL; - error
// SyntaxError: Missing initializer in const declaration


/*
    상수와 객체 : 
    - 코드의 가독성 향상을 위해 많이 사용됨
    - 객체를 사용할 때 변수에 할당 후 변경하지 못하게 하고 속성만 접근 가능하게 함
    - 일반적으로 object 타입들은 상수형 변수에 할당
*/
const king = { name: '이성계' };

// king = { name: '이방과' }; - error
// TypeError: Assignment to constant variable.

king.name = '이방과';


/*
    var, let, const
    - ES6 이상 버전에서는 var을 사용하지 않음
    - 재할당이 이뤄지는 변수에는 let을 사용
    - 대부분의 변수에서 const를 사용
*/