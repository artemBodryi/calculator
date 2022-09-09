const calc = document.querySelector('.calc');
const screen = document.querySelector('.screen p');

calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('btn')) return;

    const value = event.target.innerText;

switch (value){
    case 'C':
        screen.innerText = '';
        break;
    case '=':
        if (screen.innerText.search(/[^0-9*/+-.]/mi) != -1) return;
        screen.innerText = eval(screen.innerText).toFixed(0);
        break;
    default:
        screen.innerText += value;
}

    
})