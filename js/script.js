function geometricMean() {
    let a = prompt("Введите число a (неотрицательное):");
    let b = prompt("Введите число b (неотрицательное):");
    a = Number(a);
    b = Number(b);
    let result = Math.sqrt(a * b);
    alert("Среднее геометрическое: " + result);
}

function firstDigit() {
    let num = prompt("Введите трёхзначное число:");
    num = Number(num);
    let firstDigit = Math.floor(num / 100);
    alert("Первая цифра: " + firstDigit);
}

function calculateOdd() {
    let numberA = document.getElementsByClassName('input-w3_1-number_a')[0].value;
    let numberB = document.getElementsByClassName('input-w3_1-number_b')[0].value;
    numberA = Number(numberA);
    numberB = Number(numberB);
    if (numberA === numberA && numberB === numberB) {
        let result = ' False';
        if (numberA % 2 === 0 && numberB % 2 === 0) {
            document.getElementsByClassName('output-w3_1-number')[0].textContent = result;
        } else {
            result = ' True'
            document.getElementsByClassName('output-w3_1-number')[0].textContent = result;
        }
    } else {
        document.getElementsByClassName('output-w3_1-number')[0].textContent = "Введите числа";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('input-w3_1-number_a')[0].addEventListener('input', calculateOdd);
    document.getElementsByClassName('input-w3_1-number_b')[0].addEventListener('input', calculateOdd);
});

function DistributionSmallLarge() {
    let numberA = document.getElementsByClassName('input-w3_2-number_a')[0].value;
    let numberB = document.getElementsByClassName('input-w3_2-number_b')[0].value;
    numberA = parseFloat(numberA);
    numberB = parseFloat(numberB);
    if (numberA === numberA && numberB === numberB) {
        let backup = 1;
        if (numberA < numberB) {
            document.getElementsByClassName('output-w3_2-number_a')[0].textContent = ' ' + numberA;
            document.getElementsByClassName('output-w3_2-number_b')[0].textContent = ' ' + numberB;
        } if (numberA > numberB) {
            backup = numberA
            numberA = numberB
            numberB = backup
            document.getElementsByClassName('output-w3_2-number_a')[0].textContent = ' ' + numberA;
            document.getElementsByClassName('output-w3_2-number_b')[0].textContent = ' ' + numberB;
        } else {
            document.getElementsByClassName('output-w3_2-number_a')[0].textContent = ' ' + numberA;
            document.getElementsByClassName('output-w3_2-number_b')[0].textContent = ' ' + numberB;
        }
    } else {
        document.getElementsByClassName('output-w3_2-number_a')[0].textContent = " Введите числа";
        document.getElementsByClassName('output-w3_2-number_b')[0].textContent = " Введите числа";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('input-w3_2-number_a')[0].addEventListener('input', DistributionSmallLarge);
    document.getElementsByClassName('input-w3_2-number_b')[0].addEventListener('input', DistributionSmallLarge);
});

function work3Task3() {
    let numberA = document.getElementsByClassName('input-w3_3-number_a')[0].value;
    let numberB = document.getElementsByClassName('input-w3_3-number_b')[0].value;
    let numberX = document.getElementsByClassName('input-w3_3-number_x')[0].value;
    let numberY = 1;
    numberA = Number(numberA);
    numberB = Number(numberB);
    numberX = Number(numberX);
    if (numberA === numberA && numberB === numberB && numberX === numberX) {

        if (numberX <= 3) {
            numberY = numberA * numberX + Math.pow(1, 4);
            document.getElementsByClassName('output-w3_3-number_y')[0].textContent = ' ' + numberY;
        } else if (3 < numberX && numberX <= 5) {
            numberY = 1 / (2 * Math.pow(numberX, 2) + numberB * Math.log(numberX))
            document.getElementsByClassName('output-w3_3-number_y')[0].textContent = ' ' + numberY;
        } else if (numberX > 5) {
            numberY = numberA * Math.cos(numberB) + Math.pow(numberX, 2)
            document.getElementsByClassName('output-w3_3-number_y')[0].textContent = ' ' + numberY;
        }
    } else {
        document.getElementsByClassName('output-w3_3-number_y')[0].textContent = 'Введите числа';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('input-w3_3-number_a')[0].addEventListener('input', work3Task3);
    document.getElementsByClassName('input-w3_3-number_b')[0].addEventListener('input', work3Task3);
    document.getElementsByClassName('input-w3_3-number_x')[0].addEventListener('input', work3Task3);
});

function work3Task4() {
    let numberA = document.getElementsByClassName('input-w3_4-number_a')[0].value;
    let numberB = document.getElementsByClassName('input-w3_4-number_b')[0].value;
    let numberX = document.getElementsByClassName('input-w3_4-number_x')[0].value;
    let numberY = 1;
    numberA = Number(numberA);
    numberB = Number(numberB);
    numberX = Number(numberX);

    if (numberA === numberA && numberB === numberB && numberX === numberX) {
        if (numberX == 3) {
            numberY = Math.pow(numberA * numberX + 1, 4);
            document.getElementsByClassName('output-w3_4-number_y')[0].textContent = ' ' + numberY;
        } else if (numberX == 4) {
            numberY = 1 / (2 * Math.pow(numberX, 2) + numberB * Math.log(numberX))
            document.getElementsByClassName('output-w3_4-number_y')[0].textContent = ' ' + numberY;
        } else if (numberX == 6) {
            numberY = numberA * Math.pow(Math.cos(numberB + numberX), 2)
            document.getElementsByClassName('output-w3_4-number_y')[0].textContent = ' ' + numberY;
        } else {
            document.getElementsByClassName('output-w3_4-number_y')[0].textContent = ' Введите правильные данные Х';
        }
    } else {
        document.getElementsByClassName('output-w3_4-number_y')[0].textContent = 'Введите числа';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('input-w3_4-number_a')[0].addEventListener('input', work3Task4);
    document.getElementsByClassName('input-w3_4-number_b')[0].addEventListener('input', work3Task4);
    document.getElementsByClassName('input-w3_4-number_x')[0].addEventListener('input', work3Task4);
});

function findMinusPlus() {
    let numberA = document.getElementsByClassName('input-w4_1-number_a')[0].value;
    let numberB = document.getElementsByClassName('input-w4_1-number_b')[0].value;
    if (numberA > numberB) {
        let result = ' ';
        for (i = numberB; i <= numberA; i++) {
            if ((i >= 0) && (result != 'TRUE')) {
                result = 'TRUE'
            } else if (result != 'TRUE') {
                result = 'FALSE'
            }
        }
        document.getElementsByClassName('output-w4_1-number')[0].textContent = ' ' + result;
    } else if (numberA < numberB) {
        let result = ' ';
        for (let i = numberA; i <= numberB; i++) {
            if ((i >= 0) && (result != 'TRUE')) {
                result = 'TRUE'
            } else if (result != 'TRUE') {
                result = 'FALSE'
            }
        }
        document.getElementsByClassName('output-w4_1-number')[0].textContent = ' ' + result;
    } else {
        document.getElementsByClassName('output-w4_1-number')[0].textContent = ' Введите правильные данные';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('input-w4_1-number_a')[0].addEventListener('input', findMinusPlus);
    document.getElementsByClassName('input-w4_1-number_b')[0].addEventListener('input', findMinusPlus);
});

function calcSumOfSquares() {
    let numberA = document.getElementsByClassName('input-w4_2-number_a')[0].value;
    let numberB = document.getElementsByClassName('input-w4_2-number_b')[0].value;
    if (numberA < numberB) {
        let sum = 0;
        sum = Number(sum);
        for (let i = numberA; i <= numberB; i++) {
            sum = i ** 2 + sum;
        }
        document.getElementsByClassName('output-w4_2-sum')[0].textContent = ' ' + sum;
    } else {
        document.getElementsByClassName('output-w4_2-sum')[0].textContent = ' Введите правильные данные';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('input-w4_2-number_a')[0].addEventListener('input', calcSumOfSquares);
    document.getElementsByClassName('input-w4_2-number_b')[0].addEventListener('input', calcSumOfSquares);
});
