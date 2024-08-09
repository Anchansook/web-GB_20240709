/*
    클래스 정의 : class 키워드를 사용하여 선언
    - constructor를 이용하여 멤버 변수를 선언 및 초기화할 수 있음
    - 생성자에서 this를 이용해서 멤버 변수를 지정할 수 있음
    - new 연산자로 인스턴스를 생성할 수 있음
*/
// 왕 클래스 : 이름 / 묘명 / 생일 / 사망일
// class King {
//     constructor() {
//         this.name = '이성계';
//         this.tombName = '태조';
//         this.birth = '1335-11-04';
//         this.death = '1408-07-27';
//     }
// }
// const teajo = new King();
// console.log(teajo);


console.log('==================================================');

/*
    constructor: 
    - 인스턴스를 생성하고 클래스의 필드를 초기화하는 용도로 사용되는 특수한 메서드 (생성자)
    - '생성자 안'에 'this 키워드'를 사용하여 클래스의 '멤버 변수'를 '선언'하고 '초기화'할 수 있음
    - 생성자의 매개변수로 각 속성의 값을 받아와서 초기화
    - 자바스크립트의 생성자는 오버로딩이 안됨
*/
class King {
    // constructor() {} - runtime error
    constructor(name, tombName, birth, death) {
        this.name = name;
        this.tombName = tombName;
        this.birth = birth;
        this.death = death;
    }
}

const jungjong = new King('이방과', '정종', '1357-07-26', '1419-10-15');
console.log(jungjong);


console.log('==================================================');

/*
    클래스의 필드 선언 : ES6+의 클래스가 가질 수 있는 제어자
    - 퍼블릭 필드
    - 프라이빗 필드
    - 정적(스테틱) 퍼블릭 필드
    - 정적(스테틱) 프라이빗 필드
*/ 
class Sample1 {
    // 퍼블릭 필드
    publicField;
    // 프라이빗 필드
    #privateField;
    // 정적 퍼블릭 필드
    static staticPublicField = '정적 퍼블릭 필드';
    // 정적 프라이빗 필드
    static #staticPrivateField = '정적 프라이빗 필드';

    constructor(publicField, privateField) {
        this.publicField = publicField;
        this.#privateField = privateField;
        // 정적 변수는 this. 으로 접근 불가능
        // 아래에 지정한 this.staticPublicField는 인스턴스 변수
        this.staticPublicField = publicField;
        // this.#staticPrivateField = privateField; - error
    }
}

const sample1Instance = new Sample1('퍼블릭', '프라이빗');

console.log(sample1Instance); // Sample1 { publicField: '퍼블릭', staticPublicField: '퍼블릭' }
// console.log(sample1Instance.#privateField); - error
console.log(Sample1.staticPublicField); // undefined, 정적 필드는 값을 초기화해야 사용 가능 -> 값이 나옴


console.log('==================================================');

/*
    getter, setter : 
    - 
    - 
*/



console.log('==================================================');

/*
    인스턴스 메서드와 정적 메서드 : 
    - 
    - 
*/



console.log('==================================================');

/*
    클래스 상속 : 
    - 
    - 
    - 
*/


