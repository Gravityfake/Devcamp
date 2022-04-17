function draw(n) {
    let text = '';
    for (let i=0; i<n; i++) {
        for (let i=0; i<n; i++) {
            text += '*';
        }
        text += '\n';
    }
    console.log(text);
    }
    draw(2);
    draw(3);
    draw(4);