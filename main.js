

const popupWrapper = document.querySelector('.popup-wrapper')
const popupBox = document.querySelector('.popup-box')
const popupCloser = document.querySelector('.closer')

const popupTrigger = document.querySelector('.open-btn')


popupTrigger.addEventListener('click', function(e){
	popupWrapper.classList.add('active')
})

popupCloser.addEventListener('click', function(e){
	popupWrapper.classList.remove('active')
})
