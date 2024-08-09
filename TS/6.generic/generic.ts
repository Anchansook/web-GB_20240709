/*
    제너릭 : 
    - 선언 시점이 아니라 컴파일 시점에 타입을 결정하는 방법론
    - 타입을 명시하지 않고 여러 타입을 사용할 수 있도록 하여 
        코드의 안전성과 재사용성을 높일 수 있음 
*/
// interface Human {
//     name: string;
//     info: any;
// }

// const human: Human = {
//     name: '홍길동',
//     info: '오래오래 살았음'
// };

interface Human<T> {
    name: string;
    info: T;
}

const human: Human<string> = {
    name: '홍길동',
    info: '오래오래 살았음'
};

human.info.slice(0, 1);

console.log('==================================================');