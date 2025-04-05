const userInput = document.getElementById('input');
const container = document.querySelector('.container');

function appendToDisplay(value) {
    userInput.value += value;
}

function clearDisplay() {
    userInput.value = '';
    container.style.transition = 'transform 0.6s ease';
    container.style.transform = 'rotate(0deg)';
}

function equalReverse() {
    container.style.transition = 'transform 0.6s ease';
    container.style.transform = 'rotate(180deg)';
    // const image = document.getElementById('hiddenImg');
    // container.style.display = 'none'; 
    // image.style.display = 'block';
    // image.style.opacity = '0';
    // image.style.transition = 'opacity 1s ease';

    // setTimeout(() => {
    //     image.style.opacity = '1';
    // }, 10); 
}