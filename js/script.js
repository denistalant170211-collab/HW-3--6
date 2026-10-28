let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}



for (let j = 1; j <= 20; j++) {
    if (j % 2 !== 0) {
        continue;
    }
    console.log(j);
}



let n = 10;

for (let k = 1; ; k++) {
    if (k >= n) {
        break;
    }
    console.log(k);
}



let x = 1;

while (x <= 20) {
    if (x % 3 === 0) {
        x++;
        continue;
    }

    console.log(x);
    x++;
}



for (let m = 1; m <= 10; m++) {
    console.log(`7 * ${m} = ${7 * m}`);
}