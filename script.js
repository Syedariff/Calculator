let numb = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.oper');
let sum = document.querySelector('.grid__items--equal');
let clear = document.getElementById('clear');
let backSpace = document.getElementById('back');

// Display numbers
for (let i = 0; i < numb.length; i++) {
	numb[i].addEventListener('click', function() {
   		document.form.textInput.value  += this.value; 
	});
}

// Display operators
for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', function() {
		document.form.textInput.value += this.value;
	});
}

// sum of numbers
sum.addEventListener('click', function() {
	let equal = document.form.textInput.value;
	if(equal) {
		document.form.textInput.value = eval(equal);		
	}	
})

// Clear all 
clear.addEventListener('click', function() {
	document.form.textInput.value = '';
});	

// backSpace
backSpace.addEventListener('click', function() {
	let back = document.form.textInput.value;
	document.form.textInput.value = back.substr(0, back.length-1);
});