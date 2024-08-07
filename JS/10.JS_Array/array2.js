/*
    배열 고차 함수
    - 배열의 불변성을 최대한 보장하여 부수 효과를 제거한 메서드
        , 배열을 이용한 편리한 기능을 제공 (편리↑ 성능↓)
*/
const array = [7, 11, 20, 1, 8, 3, 16, 2, 19, 9, 10, 4, 13, 12, 14, 17, 15, 5, 18, 6];

/*
    sort(비교 함수) : 배열의 요소를 적절하게 정렬
    - .sort()로 정렬하면 사전식 정렬을 하게 됨
*/
array.sort();
console.log(array);
/*
[
    1, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19,  2, 20,  3,
    4,  5,  6,  7,  8,  9
]
*/

// 오름차순 정렬의 비교 함수
var asc = function(x, y) {
    return x - y;
}
array.sort(asc);
console.log(array);

// 내림차순 정렬
array.sort(function(x, y) { return y - x; });
console.log(array);

var objects = [
    { a: 9, b: -5 },
    { a: -2, b: 0 },
    { a: 0, b: -3 },
    { a: 6, b: 5 }
];
console.log(objects);

// a 기준 오름차순 정렬
objects.sort(function(x, y) { return x.a - y.a });
console.log(objects);


console.log('==============================');

/*
    forEach(콜백 함수) : for문 대신 사용
    - 배열을 순회하면서 각 요소와 인덱스를 사용할 수 있도록 함
    - 원본 배열을 변경 X
    - break, continue 등의 작업을 수행할 수 없음
    - for문보다 성능이 많이 떨어짐, 가독성이 좋고 편리해서 자주 사용함
    &- async await 작업은 forEach 메서드로 사용 불가능
*/
array.forEach(function(item, index) {
    console.log(`index : ${index}, item : ${item}`);
});


console.log('==============================');

/*
    map(콜백 함수) : 
    - 
    - 
*/


console.log('==============================');

/*
    filter(콜백 함수) : 
    - 
    - 
*/


console.log('==============================');

/*
    find(value, index) : 
*/


console.log('==============================');

/*
    find(value, index) : 
*/


console.log('==============================');