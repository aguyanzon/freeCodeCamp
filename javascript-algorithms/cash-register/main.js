function checkCashRegister(price, cash, cid){
    let unitAmount = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
    }

    let change = (cash * 100 - price * 100);
    let cidTotal = 0;

    for(let element of cid){
        cidTotal += element[1]*100;
    }

    if (change > cidTotal) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    else if (change === cidTotal) {
        return {status: "CLOSED", change: cid};
    }

    else {
       let answer = [];
       cid = cid.reverse();
       for(let elem of cid) {
           let newArray = [elem[0], 0]
           elem[1] = elem[1]*100;
           while (change >= unitAmount[elem[0]] && elem[1] > 0) {
               change -= unitAmount[elem[0]];
               elem[1] -= unitAmount[elem[0]];
               newArray[1] += unitAmount[elem[0]]/100;
            }

            if(newArray[1] > 0){
                answer.push(newArray);
            }
        }
        
        if (change > 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }

        return {status: 'OPEN', change: answer}
    }
}




