function draw(n) {
    let text = '';
    for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
        let print = (i<=n-j) ? '-' : '*' ;
        text += print;
    }
        text += '\n';
    }
    for (let i=1+1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
        let print = (i<=j) ? '*' : '-' ;
        text += print;
    }
        text += '\n';
    }
       console.log(text);
    }
    draw(2);
    draw(3);
    draw(4);