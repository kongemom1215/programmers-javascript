https://school.programmers.co.kr/learn/courses/30/lessons/42576

# 완주하지 못한 선수 

- 입력 : 참여한 선수 배열과, 완주한 선수 배열
- 출력 : 완주하지 못한 선수는 한명뿐. 그 한명의 이름.
- 주의해야할 점 : 이름은 중복될 수 있음

Hash Map으로 이름 개수를 세고, 1개 차이나는 사람을 찾는다. 

## Hash

- `key-value` 쌍으로 데이터를 저장하는 구조 
- javascript 에서는 Object, Map을 사용 

### Hash를 사용하는 이유

- 알고리즘 문제에서 Hash를 쓴다는 건 key-value 구조를 빠르게 찾거나 세기 위함.
- 배열은 O(n)시간이 걸리지만, 해시는 O(1)에 가까운 속도로 찾아낸다.
- 언제 해시를 사용?
    - 값을 빠르게 찾고 싶을 때 
    - 중복을 빠르게 체크할 때 
    - 빈도를 셀 때 
    - 두 데이터가 같은 구성인지 비교할 떄 

### 수도 코드
- participant: 마라톤 참가자 목록
- completion: 완주한 선수 목록

```markdown
1. completion 배열을 순회하면서 이름별 개수를 해시맵에 저장
2. participant 배열을 순회하면서 :
    - 해시맵에 이름이 없거나 개수가 0이면 -> 그 사람이 완주하지 못한 선수 
    - 있으면 개수 1 감소 
```

### 코드
```js
function solution(participant, completion) {
    let hash = {};
    let answer;
    
    for(let goalPlayer of completion){
        hash[goalPlayer] = (hash[goalPlayer]|| 0) + 1;
    }
    
    for(let player of participant){
        if(!hash[player]) {
            answer = player;
            break;
        }
        else hash[player]--;
    }
    return answer;
}
```
