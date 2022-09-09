let a = ''; //first num
let b = ''; //second num
let sign = ''; //operation
let finish = false; // calculating

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operations = ['+', '/', 'x', '-'];

const screen = document.querySelector('.screen p');

function clear() {
    a = ''; //first number
    b = ''; //second number
    sign = ''; //sign
    result = false; //early result without b-num
    screen.textContent = a;
}

document.querySelector('.c').onclick = clear;

document.querySelector('.buttons').onclick = (event) => {
    //if we pushed empty space
    if (!event.target.classList.contains('.btn')) return;
    //pushed clear btn 
    if (event.target.classList.contain('.c')) console.log('clean');;

    screen.textContent = '';

    //getting pushed btn
    const key = event.target.textContent;

    // num btn was pushed
    if (digits.includes(key)) {
        if (b === '' && sign === ''){
            a += key;
            screen.textContent = a;
        }
        else if (a === '' && b === '' && finish) {
            b = key;
            result = false;
            screen.textContent = b;
        }
        else {
            b += key;
            screen.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // if operation was pushed 
    if (operations.includes(key)) {
        sign = key;
        screen.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //if equal was pushed 
    if (key === '='){
        if (b ==='') b = a;
        switch (sign){
            case '+':
                a = (+a) + (+b);
                return;
            case '-':
                a = a - b;
                return;
            case "x":
                a = a * b;
                return;
            case '/':
                a = a / b;
                return;
        }
        result = false;
        screen.textContent = a;
        console.log(a, b, sign);
    }


}












function myFunction(){
    alert('its working mazafaka')
}

