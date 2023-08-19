const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === '=') {
        try {
            resultInput.value = eval(resultInput.value);
        } catch (error) {
            resultInput.value = 'Error';
        }
    } else if (buttonValue === 'C') {
        resultInput.value = '';
    } else {
        resultInput.value += buttonValue;
    }
}
