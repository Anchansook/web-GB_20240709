/*
    객체 : 키(key)와 값(value)로 구성된 속성들의 집합
    - 함수를 가질 수 있음 (메서드)
*/

/*
    객체 리터럴 : 자바스크립트에서 가장 일반적인 객체 생성 방법
    - {}를 사용하여 객체를 생성
*/
var emptyObj = {};

var hongGildong = {
    name: '홍길동',
    age: 23,
    address: '부산광역시',
    greeting: function() {
        console.log(`안녕 난 ${this.name} 이야!`);
    }
};
console.log(hongGildong);
console.log(hongGildong.name);
hongGildong.greeting();

var name = '이형';
var age = 68;
var address = '서울특별시 운현궁';

var goJong = {
    name,
    age,
    address
};
console.log(goJong);


console.log('==============================');

/*
    Object 생성자 : Object 클래스의 생성자로 빈 객체 생성
*/
var emptyObject = new Object();
console.log(emptyObject); // {}
emptyObject.name = '이형';
console.log(emptyObject); // { name: '이형' }
emptyObject.nmae = '고종';


console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용 가능
*/
function King(birth, name, myoName) {
    this.birth = birth;
    this.name = name;
    this.myoName = myoName;
}
var goJong2 = new King('1852-09-08', '이형', '고종');
console.log(goJong2); // King { birth: '1852-09-08', name: '이형', myoName: '고종' }


console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열로 표기함
    - 자바스크립트에서 유효한 변수명일 경우에는 따옴표 생략 가능
    &- 유효한 변수명이 아니면 반드시 따옴표를 사용해야 함
*/
var seojihoon = {
    'first name': '지훈',
    'last-name': '서',
    'age': 32
};
console.log(seojihoon); // { 'first name': '지훈', 'last-name': '서', age: 32 }


console.log('==============================');

/*
    속성 값 읽기 : 
    - . 표기법 & [] 표기법으로 접근 가능
    - . 표기법은 유효한 이름일 때만 사용 가능
    - [] 표기법은 모든 이름에서 사용 가능, 접근하려고 하는 속성을 동적으로 지정할 수 있음
    - 객체에 존재하지 않는 속성에 접근하려 하면 undefined를 반환
*/
console.log(seojihoon.age);
console.log(seojihoon['age']);
console.log(seojihoon[age]); // undefined
console.log(seojihoon['first name']);

var property = 'age';
console.log(seojihoon[property]);


console.log('==============================');

/*
    속성 값 변경 : 
    - 객체 속성에 접근하여 새로운 값을 할당하면 변경 가능
    &- 만약 존재하지 않는 속성에 접근하면 새로운 속성이 생성됨
*/



console.log('==============================');

/*
    속성 삭제 :
    - delete 연산자를 사용하여 속성 제거 가능
*/
delete emptyObject.nmae;
console.log(emptyObject);


console.log('==============================');

/*
    for-in 문 : 
    - 객체에 포함된 키를 순차적으로 접근할 수 있도록 함
    - 문자열로 된 속성의 키가 반환됨
*/
for (var key in seojihoon)
    console.log(seojihoon[key]);
/*
key : 속성키 반환
객체[속성키] : 값 반환
*/


console.log('==============================');

// & 얕은 복사
var soonJong = goJong;
// soonJong.name = '이척';

// console.log(soonJong); // { name: '이척', age: 68, address: '서울특별시 운현궁' }
// console.log(goJong); // { name: '이척', age: 68, address: '서울특별시 운현궁' }

// & 깊은 복사
soonJong = {
    name: goJong.name,
    age: goJong.age,
    address: goJong.address
};

soonJong.name = '이척';
console.log(soonJong); // { name: '이척', age: 68, address: '서울특별시 운현궁' }
console.log(goJong); // { name: '이형', age: 68, address: '서울특별시 운현궁' }