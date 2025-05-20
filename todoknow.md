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


## 고차함수 (배열편)

### forEach() - 단순 순회(리턴X)
```js
[1, 2, 3].forEach((v, i) => {
  console.log(i, v);
});
```
break/continue 불가 → 조건문으로 탈출 제어해야 함

###