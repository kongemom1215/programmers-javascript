## 이진탐색
반절 나눠서 찾기기
```js
function lowerBound(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}
```

## 투포인터
배열의 양 끝을 가리키는 두개의 포인터를 움직이며 푼다다
```js
let left = 0;
let right = arr.length - 1;

while (left < right) {
  let sum = arr[left] + arr[right];

  if (sum === target) {
    // 정답!
  } else if (sum < target) {
    left++;
  } else {
    right--;
  }
}
```

## 슬라이딩 윈도우
일정한 범위(윈도우)를 유지하면서 배열이나 문자열을 순회하며 값을 계산한다.
```js
function maxWindowSum(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i]; // 첫 윈도우

  let max = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];  // 오른쪽 추가, 왼쪽 제거
    max = Math.max(max, sum);
  }
  return max;
}

console.log(maxWindowSum([2, 1, 5, 1, 3, 2], 3)); // 👉 9 (5+1+3)
``` 

## DFS
```js
function getPermutations(arr, r) {
  const result = [];
  const visited = Array(arr.length).fill(false);

  function dfs(path) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(arr[i]);
      dfs(path);
      path.pop();
      visited[i] = false;
    }
  }

  dfs([]);
  return result;
}

console.log(getPermutations([1, 2, 3], 2));
```

## 문자열 등장 횟수 세기
```js
let count = {};
for (let ch of str) {
  count[ch] = (count[ch] || 0) + 1;
}
```


| 알고리즘     | 설명             | 필수 여부           |
| -------- | -------------- | --------------- |
| 정렬       | 기본 중 기본        | ✅               |
| 이분 탐색    | 정렬 + 탐색        | ✅               |
| 투 포인터    | 정렬된 배열에서 구간 찾기 | ✅               |
| 슬라이딩 윈도우 | 고정 길이 구간 최적화   | ✅               |
| DFS/BFS  | 그래프, 경로 탐색     | ✅               |
| DP       | 최적 부분 구조       | ⛔ PCCP에서는 낮은 빈도 |
| 그리디      | 최대/최소 선택       | ✅               |
| 구현       | 조건 따라 꼼꼼히 처리   | ✅               |
