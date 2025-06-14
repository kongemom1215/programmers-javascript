https://school.programmers.co.kr/learn/courses/30/lessons/42577

## 전화번호 목록 

- 입력 : 전화번호 목록 (각 전화번호는 길이가 다를 수 있음, 중복 X)
- 출력 : 어떤 번호가 다른 번호의 접두어(prefix)인 경우에 false return 
- ex) "119"는 "1195524421"의 접두어 이므로 return false;

## 문제 접근법
- 정렬을 통해 접두어가 인접하게 모이도록 정렬 -> i번째 번호가 i-1번째 번호로 시작하는지만 검사하면 됨.
- 접두어끼리 붙도록 정렬 후 이웃한 항목만 비교

### 수도 코드 
```markdown
1. 전화번호 목록을 정렬한다 (사전순)
2. 1번째부터 마지막 번호까지 반복하며:
   - 현재 번호가 이전 번호로 시작하는지 확인
   - 시작한다면 접두어이므로 false 반환
3. 전부 통과하면 true 반환
```

### 코드 
```js
function solution(phone_book) {
    let hash = {};
    phone_book.sort();
    
    for(let i=1; i<phone_book.length; i++){
        if(phone_book[i].startsWith(phone_book[i-1]))   return false;
    }
    
    return true;
}
```