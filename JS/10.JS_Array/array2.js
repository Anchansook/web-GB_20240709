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
    map(콜백 함수) : 콜백 함수의 반환값들로 이루어진 새로운 배열을 생성해서 반환
    - 원본 배열 변경 X
    - forEach는 단순히 요소나 인덱스를 가지고 작업만 진행(반환값 X)
    , map은 요소나 인덱스를 가지고 작업한 결과로 새로운 배열을 반환(반환값 O)
*/
// & item을 안 쓰더라도 매개변수에는 넣어줘야 함
var mapArray = array.map(function(item, index) {
    return index;
});
console.log(mapArray);

// 그대로 복사
// & 아래에 for문으로 변경한 map 로직
var newArray = array.map(function(item) { return item; });
console.log(newArray);


console.log('==============================');

/*
    filter(콜백 함수) : 콜백 함수의 반환값이 true인 배열의 요소의 값만 추출한 새로운 배열을 생성
    - 배열의 특정 케이스만 필터링 조건으로 추출해서 새로운 배열을 만들고 싶을 때 사용
    - 원본 배열 변경 X
*/
// & 아래에 for문으로 변경한 filter 로직
var evenArray = array.filter(function(item, index) {
    return item % 2 === 0;
});
console.log(evenArray);

// * 위 메서드들은 남발 X, for문을 활용

// # map을 일반 for문으로 구성
// 1. 빈배열 생성
var newArray = [];
// 2. for문 작성
for (var index in array) {
    var item = array[index];

    // 3. 빈배열에 요소 추가
    newArray.push(item * item);
}

// # filter 일반 for문으로 구성
// 1. 빈배열 생성
var newArray = [];
// 2. for문 작성
for (var index in array) {
    var item = array[index];

    // 3. 짝수만 추출해서 요소 추가
    if (item % 2 === 0) newArray.push(item);
}


console.log('==============================');

/*
    find(콜백 함수) : 콜백 함수의 '결과가 true인 첫 번째 요소'를 반환
*/
var result = array.find(function(item, index) {
    return item % 2 === 1;
});
console.log(result);


console.log('==============================');

/*
    findIndex(콜백 함수) : 콜백 함수 '결과가 true인 첫 번째 요소의 인덱스'를 반환
*/
var result = array.findIndex(function(item, index) {
    return item % 2 === 1;
});
console.log(result);


console.log('==============================');