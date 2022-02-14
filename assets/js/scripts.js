let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const INCREMENT = document.getElementById('adicionar');
const DECREMENT = document.getElementById('subtrair');

INCREMENT.addEventListener('click', increment);
DECREMENT.addEventListener('click', decrement);

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	checkValue();
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
  checkValue();
}

function checkValue() {
    if(CURRENT_NUMBER.innerHTML <= -10) {
        DECREMENT.disabled = true;
    } else if(CURRENT_NUMBER.innerHTML >= 10) {
        INCREMENT.disabled = true;
    } else {
        INCREMENT.disabled = false;
        DECREMENT.disabled = false;
    }
		if( CURRENT_NUMBER.innerHTML < 0 ) {
		    CURRENT_NUMBER.style.color = "red";
		}
        else {
            CURRENT_NUMBER.style.color = "black";
        }
}



// const Element = {
// 	type: 'span',
// 	value: 'Nome',
// 	disabled: 'false',
// 	style: {
// 		color: '',
// 		fontSize: '',
// 	}
// }

// INCREMENT.disabled = true;
// CURRENT_NUMBER.style.color: 'red';