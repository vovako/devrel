document.addEventListener('click', function(evt) {
	const target = evt.target
	console.log(target);

	if (target.classList.contains('menu__item')) {
		const active = target.parentElement.querySelector('.active')
		active.classList.remove('active')
		target.classList.add('active')

		const iframe = document.querySelector('.app-content')
		iframe.src = target.dataset.src

		const titleElem = document.querySelector('.header__title')
		titleElem.textContent = target.textContent
	}
})