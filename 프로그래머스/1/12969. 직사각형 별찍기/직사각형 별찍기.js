process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = Array.from({length: a}, ()=> '*').join('')
    Array.from({length: b}, ()=> row).forEach((v)=> console.log(v))
});