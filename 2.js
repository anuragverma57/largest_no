let a = [];

for (let i = 1; i <= 5; i++) {
    a[i] = prompt("enter "+ i +" number");
}

let max=a[1];
for (let i = 1; i <= 5; i++) {
    if (max<a[i+1]) {
        max=a[i+1];
    }
}

alert("maximum among these 5 number is "+max);