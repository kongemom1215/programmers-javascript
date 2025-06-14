function solution(record) {
    let answer = [];
    let userMap = new Map();
    
    record.forEach((action) => {
        let actionSplt = action.split(" ");
        switch(actionSplt[0]){
            case "Enter":
                userMap.set(actionSplt[1], actionSplt[2]);
                answer.push(actionSplt[1] + "|Enter");
                break;
            case "Leave":
                answer.push(actionSplt[1] + "|Leave");
                break;
            case "Change":
                userMap.set(actionSplt[1], actionSplt[2]);
                break;
        }
    });
    
    answer.forEach((msg, idx) => {
        let splt = msg.split("|");
        if(splt[0] != userMap.get(splt[0]))     msg = msg.replace(splt[0], userMap.get(splt[0]));
        if(splt[1] === "Enter")                 msg = msg.replace("|Enter", "님이 들어왔습니다.")
        else                                    msg = msg.replace("|Leave", "님이 나갔습니다.")
        
        answer[idx] = msg;
    });
    
    return answer;
}