function draw(n) {
    text = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i >= j) {
          text += i;
        } else {
          text += "-";
        }
      }
      text += "\n";
    }
  
    for (let i = n - 1; i >= 1; i--) {
      for (let j = 1; j <= n; j++) {
        if (i < j) {
          text += "-";
        } else {
          text += i;
        }
      }
      text += "\n";
    }
    console.log(text);
  }
  
  draw(2);
  draw(3);
  draw(4);