function draw(n) {
    let text = '';
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j+=n) {
            text += (i*2);
        }
        text += "\n";
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);