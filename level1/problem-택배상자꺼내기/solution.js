function solution(n, w, num) {
    var answer = 0;
    let boxArr = Array.from({length: w}, () => []);
    
    const numInfo = []; // boxArr의idx, 숫자의 idx 
    for(let i = 0; i < n; i++){   // box 개수 
        let arrIdx = i % w;
        if(Math.floor(i/w) % 2 == 0){ // 우로
            boxArr[arrIdx].push(i+1);
        } else { // 좌로
            boxArr[w-1-arrIdx].push(i+1);
        }
        
        if(num == i+1){
            numIdx = (Math.floor(i/w) % 2 == 0)? [arrIdx, boxArr[arrIdx].length] : [w-1-arrIdx, boxArr[w-1-arrIdx].length];
        }
    }
    
    answer = boxArr[numIdx[0]].length - numIdx[1] + 1; // 본 상자 포함
    
    return answer;
}