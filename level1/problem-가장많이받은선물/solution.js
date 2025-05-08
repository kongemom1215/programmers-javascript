function solution(friends, gifts) {
    var answer = 0;
    let giftInfo = new Object();
    let giftGrade = new Object();

    friends.forEach((friend) => {
        giftInfo[friend] = {};
        giftGrade[friend] = 0;
        
        friends.forEach((f) => {
            if(f != friend) 
                giftInfo[friend][f] = 0;
        });
    });
    
    gifts.forEach((gift) => {
        let [giver, receiver] = gift.split(" ");
        
        giftInfo[giver][receiver]++;
        giftGrade[giver]++;
        giftInfo[receiver][giver]--;
        giftGrade[receiver]--;
    });
    
    for (const giver in giftInfo) {
        let takeGift = 0;
        for (const [receiver, value] of Object.entries(giftInfo[giver])) {
            if(value > 0) {
                takeGift++;
            } else if(value == 0 && giftGrade[giver] > giftGrade[receiver]) {
                takeGift++;
            }
        }
        
        answer = Math.max(answer, takeGift);
    }
    
    return answer;
}
