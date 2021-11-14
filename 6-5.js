//Задание 5.

//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
//Иначе говоря, умножает x на себя n раз и возвращает результат.


const st = (x, n) => {
    console.log(x, n);
    let step = '';

    if (n == 0) {
        step = 1;
        console.log(step);
    }

    if (n == 1) {
        step = x;
        console.log(step);
    }

    if (n > 1) {
        step = x;
        for (let i=2; i <= n; i=i+1) {
            step = step * x;
        }
        console.log(step);
    }

    if (n < 0) {
        step = x;
        for (let i=2; i <= (-n); i=i+1) {
            step = step * x;
        }
        console.log(1/step);
    }

}

st(7, 0);