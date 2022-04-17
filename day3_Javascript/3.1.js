
function draw(n) {
    let text = '';
   for (let i=n; i>=1; i--) {
       for (let j=1; j<=n; j++) {
           let print = (j < i) ? '-' : '*' ;
           text += print;                        
       }
       for (let j=(n-1); j>=1; j--) {
           let print = (j < i) ? '-' : '*' ;
           text += print;                        
       }                       
       text += "\n";        
   }       
   for (let i=2; i<=n; i++) {        
       for (let j=1; j<=n; j++) {
           let print = (j < i) ? '-' : '*' ;
           text += print;                       
       }
       for (let j=(n-1); j>=1; j--) {
           let print = (j < i) ? '-' : '*' ;
           text += print;                       
       }                       
       text += "\n";       
   }
   console.log(text);
}

draw(2);
draw(3);
draw(4);