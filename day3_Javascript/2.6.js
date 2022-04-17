function draw(n) {
    let text = '';
    for (let i=n; i>=1; i--) {
    for (let j=1; j<=n; j++) {
        let print = (i <=n - j) ? '-' : '*' ;
        text += print;
    }
        text += '\n';
    }
       console.log(text);
    }
    draw(2);
    draw(3);
    draw(4);