jQuery(function($){
  $("#phone").mask("+7(999) 999-9999",{placeholder:"*"});
});

window.addEventListener('scroll', function(){
	const header = document.querySelector('#navbar');
	header.classList.toggle('sticky', window.scrollY > 155)
});

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active');
            document.querySelector('#navbar a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active');
            document.querySelector('#navbar a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


$('.flick__slider').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  // autoPlay: 5000
});