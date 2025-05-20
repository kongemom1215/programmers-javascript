## for문 

### for...of 

1. 문자열
```js
const str = "foo";

for (let i of str) {
  console.log(i);
}

// 결과
// "f"
// "o"
// "o"
```

2. 배열 
```js
const arr = ["a", "b", "c"];

for (let i of arr) {
  console.log(i);
}

// 결과
// "a"
// "b"
// "c"
```

### for...in

1. 문자열
```js
const str = "foo";

for (let i in str) {
  console.log(i);
}

// 결과
// "0"
// "1"
// "2"
```

2. 객체 
```js
const obj = {
  a : "에이",
  b: "비",
  c: "씨씨",
};

for (let i in obj) {
  console.log(i);
}

for (let i in obj) {
  console.log(obj[i]);
}
// 결과
// "a"
// "b"
// "c"
// "에이"
// "비"
// "씨"
```


## 얕은 복사 깊은복사
객체나 배열을 복사할 때

### 얕은 복사
값을 그대로 복사하되, 참조로 가져옴 => 원본의 중첩된 값이 바뀌면 복사본도 바뀜
```javascript
// 객체
let copy = Object.assign({}, original);
let copy = { ...original };

// 배열
let copy = original.slice();
let copy = [...original];
let copy3 = Array.from(arr);
```

### 깊은 복사
값을 새로 복사한다. 원본과 완전 분리된 독립된 복제본
```javascript
let deep = JSON.parse(JSON.stringify(obj));
```


## 배열

### 배열 생성
```javascript
// 기본
let arr = [1, 2, 3];

// 크기를 정한 배열
let arr = new Array(5);     // [ <5 empty items> ]
let arr = Array(5);         // 위와 동일

// 값을 미리 채운 배열
let arr = Array(5).fill(0); 

// Array.from
let arr = Array.from({ length: 5 }, (_, i) => i);   // [0, 1, 2, 3, 4]
let arr = Array.from({ length: 5 }, (v, i) => i); // 위와 동일함
let arr = Array.from([1, 2, 3], (x) => x + x); // [2, 4, 6]
let arr = Array.from({ length: 3 }, () => Array(4).fill(0)); // 2차원 배열

// 문자열 > 배열
let arr= Array.from("foo"); // ["f", "o", "o"]
let str = "hello";
let arr = str.split("");  // ['h', 'e', 'l', 'l', 'o']

// Set > 배열
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set); // [ "foo", "bar", "baz" ]
let set = new Set([1, 2, 3]);
let arr = [...set]; 

// Map > 배열
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map); // [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values()); // ['a', 'b'];
Array.from(mapper.keys()); // ['1', '2'];
```

### 배열 메서드
1. `slice(n, m)` : n번째 인덱스에서 m-1 인덱스까지의 배열
```javascript
let arr = [1, 2, 3, 4, 5];
let copy = arr.slice(1, 4);  // [2, 3, 4]
```
- 원본 안 바뀜
- 얕은 복사

2. `shift` & `unshift`
```js
let arr = [1, 2, 3];

arr.shift();     // 1 제거됨 → [2, 3]
arr.unshift(0);  // 0 추가됨 → [0, 2, 3]
```
shift는 O(n) → 앞 요소 다 밀어야 해서 느릴 수 있음!

3. `pop` & `push`
```js
let arr = [1, 2, 3];

arr.pop();      // 3 제거됨 → [1, 2]
arr.push(4);    // 4 추가됨 → [1, 2, 4]
```
시간 복잡도 효율적 → O(1)

4. `splice` - 삽입/삭제
```js
array.splice(start, deleteCount, item1, item2, ...)
```
| 인자                | 설명                          |
| ----------------- | --------------------------- |
| `start`           | 배열에서 **시작 인덱스**             |
| `deleteCount`     | **삭제할 요소 개수**               |
| `item1, item2...` | 삭제한 자리에 **삽입할 요소들** (생략 가능) |
- 특정 요소 삭제
```js
let arr = [10, 20, 30, 40];
let deleted = arr.splice(1, 2);

console.log(arr);     // 👉 [10, 40]
console.log(deleted); // 👉 [20, 30]
```
- slice와 차이 (실제 참조값을 삭제제)
```js
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
num.slice(5,10); // [5,6,7,8,9]
console.log(num); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
nums.splice(5, 3); // [5,6,7]
console.log(num); // [0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
```
- 요소 삽입만 
```js
let arr = [1, 2, 3];
arr.splice(1, 0, 99);  // 1번 자리에 아무것도 삭제 안 하고 99 삽입

console.log(arr); // 👉 [1, 99, 2, 3]
```
- 요소 삭제 + 삽입
```js
let arr = ['a', 'b', 'c'];
arr.splice(1, 1, 'z');

console.log(arr); // 👉 ['a', 'z', 'c']
```
- 배열 끝에서 제거 
```js
let arr = [1, 2, 3, 4];
arr.splice(-2, 1); // 끝에서 두 번째부터 1개 삭제

console.log(arr); // 👉 [1, 2, 4]
```

splice()는 원본 배열을 직접 바꿈


5. join()
배열을 문자열로 만드는 함수
```js
let arr = ['a', 'b', 'c'];

arr.join();        // 👉 "a,b,c"
arr.join('');      // 👉 "abc"
arr.join('-');     // 👉 "a-b-c"
arr.join(' 💗 ');  // 👉 "a 💗 b 💗 c"
```


## 고차함수 (배열편)

### forEach() - 단순 순회(리턴X)
```js
[1, 2, 3].forEach((v, i) => {
  console.log(i, v);
});
```
break/continue 불가 → 조건문으로 탈출 제어해야 함

### map() - 각 요소 변형해서 새 배열 생성
```js
let squared = [1, 2, 3].map(x => x * x);
console.log(squared); // 👉 [1, 4, 9]
```
원본은 그대로, 변형된 배열을 반환

### filter() - 조건 걸러서 새 배열
```js
let evens = [1, 2, 3, 4].filter(x => x % 2 === 0);
console.log(evens); // 👉 [2, 4]
```

### reduce() - 누적/통계용
1. 합계
```js
let sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 👉 10
```
초기값을 마지막 인자로 줘야함 `0`, `{}`, `[]` 등  
`acc`는 누적값, `cur`는 현재값

2. 객체로 누적시키기
```js
let obj = ['a', 'b', 'a'].reduce((acc, key) => { 
  acc[key] = (acc[key] || 0) + 1; // acc[key]가 undefined거나 falsy하면 0을 쓰고, 그 뒤에 + 1을 한다는 뜻!
  return acc;
}, {});
console.log(obj); // 👉 { a: 2, b: 1 }
```

## 객체 유틸 함수

### Object.keys(obj)
객체의 모든 키를 배열로 반환
```js
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj); // 👉 ['a', 'b', 'c']
for (let key of Object.keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}
```

### Object.values(obj)
객체의 모든 값을 배열로 반환
```js
const obj = { a: 1, b: 2, c: 3 };
Object.values(obj); // 👉 [1, 2, 3]
let sum = Object.values(obj).reduce((a, b) => a + b, 0);
console.log(sum); // 👉 6
```

### Object.entries(obj)
객체의 [key, value] 쌍을 배열로 반환
```js
Object.entries(obj); // 👉 [['a', 1], ['b', 2], ['c', 3]]
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

### 배열 > 객체
```js
let entries = [['a', 1], ['b', 2]];
let obj = Object.fromEntries(entries); // 👉 { a: 1, b: 2 }
```


## 정렬

### 기본문법
```js
array.sort([compareFunction])
```
원본 배열을 변경함!

### 기본 정렬 (문자 기준)
```js
let arr = [4, 100, 2];
arr.sort();
console.log(arr); // 👉 [100, 2, 4] ❌ 문자열로 변해서 이상함
```
근데 대문자가 먼저 정렬된다는 문제도 있음 (해결 : 소문자로 바꿔서 정렬)

### 숫자 정렬 (오름/내림차순)
```js
let nums = [4, 100, 2];

// 오름차순
nums.sort((a, b) => a - b); // 👉 [2, 4, 100]

// 내림차순
nums.sort((a, b) => b - a); // 👉 [100, 4, 2]
```

### 객체 배열 정렬
```js
let users = [
  { name: 'Anna', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Chris', age: 30 }
];

// 나이순 정렬 (오름차순)
users.sort((a, b) => a.age - b.age);
```


## 대소문자

- 대문자로 : `toUpperCase()`
- 소문자로 : `toLowerCase()`


## Map , Set

| 자료구조  | 저장 구조           | 중복        | 주요 사용처          |
| ----- | --------------- | --------- | --------------- |
| `Map` | 키-값 (key-value) | ❌ 중복 키 불가 | 빠른 조회, 해시맵, 카운팅 |
| `Set` | 값만 저장 (unique)  | ❌ 중복값 불가  | 중복 제거, 존재 확인    |


### Map 사용법
```js
let m = new Map();

// 추가
m.set('a', 1);
m.set('b', 2);

// 값 가져오기
m.get('a'); // 👉 1

// 존재 확인
m.has('a'); // 👉 true

// 삭제
m.delete('a');

// 크기
m.size; // 👉 1

// 반복 (key, value)
for (let [k, v] of m) console.log(k, v);
```

### Set 사용법
```js
let s = new Set();

// 추가
s.add(1);
s.add(2);
s.add(2); // 중복은 무시됨

// 삭제
s.delete(1);

// 포함 여부
s.has(2); // 👉 true

// 전체 삭제
s.clear();

// 크기
s.size; // 👉 1

// 반복
for (let val of s) console.log(val);

// 배열 중복 제거
let arr = [1, 2, 2, 3];
let unique = [...new Set(arr)]; // 👉 [1, 2, 3]
```