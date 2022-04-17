function draw(n) {
    let text = '';
    let and = 1; 
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let print = (j < i) ? '-' : Number(and) ;
            text += print;
            if (typeof print === 'Number') {
                and++;
            }
        }                       
        text += "\n";        
    }      
    for (let i=2; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let print = (j < i) ? '-' : Number(and) ;
            text += print;
            if (typeof print === 'Number') {
                and++;
            }                                   
        }                       
        text += "\n";        
    }
    console.log(text);
}

draw(2);
draw(3);
draw(4);