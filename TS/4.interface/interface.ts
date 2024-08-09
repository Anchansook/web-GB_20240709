/*
    인터페이스 : 
    - 객체 및 클래스의 타입으로 사용됨
    - 인터페이스에 선언된 속성 또는 메서드의 구현을 강제
    - interface 키워드로 선언
*/

/*
    변수(객체)의 타입으로써 인터페이스
*/
interface King {
    name: string;
    tombName: string;
    birth: string;
    death: string;
}

interface Human {
    name: string;
    address: string;
}

const teajo: King = {
    name: '이성계',
    tombName: '태조',
    birth: '1335-11-04',
    death: '1408-06-27'
};

const jungjong: King & Human = { // | or &
    name: '이방과',
    tombName: '정종',
    birth: '1357-07-26',
    death: '1419-10-15',
    address: '함흥시'
};


console.log('==================================================');

/*
    클래스의 타입으로써 인터페이스 
    : '클래스' 생성하면서 구현할 인터페이스를 'implements 키워드'를 사용해서 구현
*/
interface IMath {
    add: (x: number, y: number) => number;
}

class CMath implements IMath {
    add = (x: number, y: number) => {
        return x + y;
    };
}


console.log('==================================================');

/*
    선택적 속성 :
    - '? 키워드'로 인터페이스의 속성을 선택적으로 구현하도록 할 수 있음
*/
interface King2 {
    name: string;
    tombName?: string;
    birth: string;
    death?: string;
}

const teajong: King2 = {
    name: '이방원',
    birth: '1367-05-16',
    tombName: '태종'
};


console.log('==================================================');