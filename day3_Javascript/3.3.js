function draw(n) {
  
  let print =[];
  for (let i=1; i<=n; i++) {
    let text=[];
    for (let j=1; j<=n; j++) {
      if (i>= j) {
        
        text.push("*");
      } else {
        
        text.push("-");
      }
    }
   
    print.push(text);
  }
  
  console.log(print);
}


draw(2);
draw(3);
draw(4);
