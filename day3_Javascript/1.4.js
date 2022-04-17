function draw(n) {
    let text = '';
        num = 0;
        for (let i=1; i<=n; i++){
        for (let j=0; j<n; j++){
            text += num + i;
        }
            text += '\n';
        }
        console.log(text);
    }
    draw(2);
    draw(3);
    draw(4);