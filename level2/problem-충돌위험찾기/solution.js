function solution(points, routes) {
    let answer = 0;
    let allRoute = [];
    
    routes.forEach((route) => {
        let moveLog = [];
        let move = [...points[route[0] - 1]]; // 얕은복사
        let targetList = route.slice(1);

        moveLog.push([...move]); // 시작 좌표 복사해서 push

        targetList.forEach((targetNo) => {
            let targetPoint = points[targetNo - 1];
            let row = targetPoint[0] - move[0];
            let col = targetPoint[1] - move[1];

            for (let i = 0; i < Math.abs(row); i++) {
                move[0] += row > 0 ? 1 : -1;
                moveLog.push([...move]); // 현재 좌표 복사해서 push
            }

            for (let i = 0; i < Math.abs(col); i++) {
                move[1] += col > 0 ? 1 : -1;
                moveLog.push([...move]);
            }
        });

        allRoute.push(moveLog);
    });
    console.log(JSON.stringify(allRoute))
    
    const maxLength = Math.max(...allRoute.map(inner => inner.length));
    for(let i=0; i<maxLength; i++){
        let stageList = allRoute
                            .map(route => route[i])
                            .filter(inner => inner != null);
console.log(JSON.stringify(stageList))
        let setObj = {};
        stageList.forEach((stage) => {
            let str = stage.join();
            if(setObj[str] == undefined) 
                setObj[str] = 1;
            else
                setObj[str]++;
        });
        
        for(let key in setObj){
            if(setObj[key] > 1)
                answer ++;
        }
    }
    
    return answer;
}
