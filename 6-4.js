function outputNumber(a, b) {
    let SetInterval = setInterval(function() {
        if (a <= b) {
            console.log(a);
            a++;
        } else {
            clearInterval(SetInterval);
        }
    }, 1000);
}

outputNumber(5, 15);