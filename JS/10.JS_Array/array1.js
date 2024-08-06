/*
    배열 : 여러 데이터를 하나의 변수에 저장하고자 할 때 사용
*/

/*
    배열 리터럴 : 
    - 0개 이상의 값을 쉼표로 구분하여 []로 묶어 표현
    - 배열[인덱스]로 요소에 접근 가능, 존재하지 않는 인덱스에 접근하면 undefined 반환
    - 각 요소의 데이터 타입이 서로 달라도 됨
*/
var emptyArray = [];
console.log(emptyArray, typeof emptyArray, emptyArray[0]); // [] object undefined

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

var funcs = [
    function() { console.log('함수1') },
    function() { console.log('함수2') }
];
console.log(funcs); // [ [Function (anonymous)], [Function (anonymous)] ]
funcs[0](); // 함수1


console.log('==============================');

/*
    배열의 요소 추가
    - 배열[인덱스] = 값; : 요소 추가 가능, 지정한 인덱스 값이 존재하면 변경
    - 뛰어넘은 인덱스 값에는 empty 요소가 추가됨
*/
emptyArray[1] = 10; 
console.log(emptyArray, emptyArray[0]); // [ <1 empty item>, 10 ] undefined


console.log('==============================');

/*
    배열의 요소 삭제
    - delete 연산자를 사용하여 제거 가능
*/
delete emptyArray[1];
console.log(emptyArray); // [ <2 empty items> ] : 생성된 크기는 그대로임, 값만 제거


console.log('==============================');

/*
    배열의 순회
    - for-in 문을 사용하여 index값을 가지고 순회 가능
*/
var fruits = ['apple', 'banana', 'cacao'];
for (var index = 0; index < fruits.length; index++)
    console.log(fruits[index]);

for (var index in fruits)
    console.log(fruits[index]);


console.log('==============================');

/*
    - for-in 방식은 index를 사용하여 한 번 더 접근을 해야하기 때문에 
        단순히 읽어들이는 작업만 할 때는 적합하지 않을 수 있음
    - for-of 방식을 사용하여 배열의 요소를 복사해서 직접 사용할 수 있음
*/
for (var item of fruits) 
    console.log(item);


console.log('==============================');

/*
    배열의 길이 : 배열.length
*/

// & 얕은 복사
var newFruits = fruits;
// 둘 다 [ '사과', 'banana', 'cacao' ]

// & 깊은 복사
var newFruits = [];
for (var index in fruits) 
    newFruits[index] = fruits[index];
// [ '사과', 'banana', 'cacao' ] [ 'apple', 'banana', 'cacao' ]

// & 깊은 복사2
var newFruits = [];
for (var item of fruits)
    newFruits.push(item);

// & 깊은 복사3
var newFruits = [...fruits];

newFruits[0] = '사과';
console.log(newFruits, fruits); 

console.log('==============================');

/*
    배열 메서드
*/

/*
    indexOf(element) : 
    - 
    - 
*/


console.log('==============================');

/*
    includes(element) :
    - 
*/


console.log('==============================');

/*
    push(element) :
    - 
*/


console.log('==============================');

/*
    pop() :
    - 
*/


console.log('==============================');

/*
    shift() :
    - 
*/


console.log('==============================');

/*
    reverse() :
    - 
*/


console.log('==============================');

/*
    concat(array or item) : 
    - 
*/


console.log('==============================');

/*
    slice(start, end) : 
    - 
*/


console.log('==============================');

/*
    splice(start, eleteCount, items...) :
    - 
*/




