/*Toggle button hide sidebar*/

var toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener('click', function() {

	console.log('toggleIcon is working'); /*for debugging*/

	var nav = document.querySelector('div.sidebar');
	nav.style.left = '-20%';

	var main = document.querySelector('div.rightside');
	main.style.width = '100%';
	
	var main = document.querySelector('div.rightside');
	main.style.marginLeft = '0';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.setAttribute('hidden', 'hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.removeAttribute('hidden');

});


var toggleIcon1 = document.querySelector('#toggleIcon1');

toggleIcon1.addEventListener('click', function() {

	console.log('toggleIcon1 is working'); /*for debugging*/

	var nav = document.querySelector('div.sidebar');
	nav.style.left = '0%';

	var main = document.querySelector('div.rightside');
	main.style.width = '80%';
	
	var main = document.querySelector('div.rightside');
	main.style.marginLeft = '20%';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.removeAttribute('hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.setAttribute('hidden', 'hidden');
	

});