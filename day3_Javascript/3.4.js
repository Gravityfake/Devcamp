function draw(n) {
  
    let print = [];
    
    for (let i = 1; i <= n; i++) {
      let text = [];
      for (let j = n; j > i; j--) {
        text.push("-");
      }
      for (let z = 0; z < i * 2 - 1; z++) {
        text.push("*");
      }
      for (let j = n; j > i; j--) {
        text.push("-");
      }
      
      print.push(text);
    }
    
    for (let i = 1; i <= n - 1; i++) {
      let text = [];
      for (let j = 0; j < i; j++) {
        text.push("-");
      }
      for (let z = (n - i) * 2 - 1; z > 0; z--) {
        text.push("*");
      }
      for (let j = 0; j < i; j++) {
        text.push("-");
      }
      
      print.push(text);
    }
    
    console.log(print);
  }
  
  draw(2);
  draw(3);
  draw(4);