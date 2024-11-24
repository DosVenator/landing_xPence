const menuButton = document.querySelector('.menu_button');
const menu = document.querySelector('.nav.burger');


menuButton.addEventListener('click', function () {
    menu.classList.toggle("active");
})

// const popupButton = document.querySelector('[data-buttons-pop]');
// const popup = document.querySelector('[data-popup]');
// const popupClose = document.querySelector('[data-popup-close]');
// const popupWindow = document.querySelector('[data-popup-window]');

// popupButton.addEventListener('click', function () {
//     popup.classList.add('active');
// })
// popupClose.addEventListener('click', function () {
//     popup.classList.remove('active');
// })
// popup.addEventListener('click', function () {
//     popup.classList.remove('active');
// })

// popupWindow.addEventListener('click', function (event){
//     event.stopPropagation();
// })

const popupButtonAll = document.querySelectorAll('[data-popup-button]');
const popupAll = document.querySelectorAll('[data-popup]');


console.log(popupAll);
console.log(popupButtonAll);

popupButtonAll.forEach(function (element) {
	element.addEventListener('click', function (e) {
		console.log(e);
		console.log(e.target.dataset.popupButton);
		let popupButtonData = e.target.dataset.popupButton;
		document.querySelector('#' + popupButtonData).classList.add('active');
	});
});
popupAll.forEach(function (element) {
	console.log(element);
	element.querySelector('[data-popup-close]').addEventListener('click', function () {
		element.classList.remove('active');
	});

	element.addEventListener('click', function () {
		element.classList.remove('active');
	});

	element.querySelector('[data-popup-window]').addEventListener('click', function (event) {
		event.stopPropagation();
	});
});
