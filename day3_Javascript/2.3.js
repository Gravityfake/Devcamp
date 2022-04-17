function draw(n) {
    let text = '';       
    for (let i=1; i<=n; i++) {
        for (let x=1; x<=n; x++) {
            let print = (x > i) ? '-' : '*' ;
            text += print;                        
        }                       
        text += '\n';        
    }
    for (let i=n-1; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let print = (i >= j) ? '*' : '-' ;
            text += print;                        
        }                       
        text += '\n';         
  }
     console.log(text);
}

draw(2);
draw(3);
draw(4);