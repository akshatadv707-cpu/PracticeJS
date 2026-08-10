

type Payment = {kind :"cash", amount:number} | {kind:"card",last4:string} 

function describe(p:Payment):string{
    switch(p.kind)
    {
        case 'cash': return `paid ${p.amount}`;
        case 'card': return `paid by card` ${p.last4};

    }
}

console.log(describe(kind : cash : amount: 20)

console.log(describe(kind : card : last4: 8800)

