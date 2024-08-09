/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
let variable: string;
variable = '문자열';
// variable = 1234; - error

function func(arg1: string, arg2: number): string {
    return '문자열';
};

const arrowFunc = (arg1: string, arg2: number): string => {
    return '문자열';
};


/*
    typescript의 타입
    - string : 문자열
    - number : 숫자
    - boolean : 논리
    - null : null
    - undefined : 정의되지 않음
    - object : 객체
    - array : 배열
    - enum : 열거형
    - void : 함수에서 반환값이 없음
    - any : 모든 타입
*/
const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

let string1: string = '';
let string2: String = '';
string2 = string1;
// string1 = string2; - error //& 인터페이스형은 기본형 타입에 넣을 수 없음

enum Color {
    RED = '#ff0000', GREEN = '#00ff00', BLUE = '#0000ff'
}
const color: Color = Color.RED;
console.log(color); // 값 없을 땐 인덱스로 나옴, 값이 있을 땐 값이 나옴

let anyType: any = 10;

const voidFunc = (): void => {
    return;
    // void타입 함수는 그냥 return은 가능, return에 값은 넣지 못함
};

const func2 = (arg: string): string => {
    return '';
};

let funcType: (arg: string) => string; 
funcType = func2;
// funcType = voidFunc; - error


/*
    타입추론 :
    - 타입을 선언하지 않고 변수에 값이 초기화되는 순간에 할당된 값에 따라서 변수의 타입이 결정
*/
let stringVariable = '';
// stringVariable = 10; - error

const func3 = (arg: number) => {
    if (arg === 1) return 1;
    return '';
};
//& 타입 지정 없을 시 return의 타입으로 타입이 결정


/*
    타입 변환 :
    - as 키워드로 형변환 가능 (객체일 때 자주 사용), '<>연산자'로 형변환 가능
*/
const PI: any = '3.14';
let piNumber: number = PI as number; 
piNumber = Number(PI); // 완전한 형변환 (수평)
piNumber = <number>PI;


/*
    유니온 타입
    - 복수의 타입을 지정하는 방법, | 사용
*/
let union: number | string;
union = 10;
union = '10';
// union = false; - error
// const number1: number = union as number; - error 아님!


/*
    리터럴 타입
    - '지정한 리터럴 값만' 가질 수 있는 타입
*/
let day: '낮' | '밤';
day = '낮';
day = '밤';
// day = '아침'; - error
