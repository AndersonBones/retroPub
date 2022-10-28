

window.addEventListener('scroll',()=>{
    


    if(window.scrollY > 600) {
        document.querySelector('header').classList.add('fixed-top');
        document.querySelector('header').classList.add('animate__slideInDown');
       
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } 

    else{
        document.querySelector('header').classList.remove('animate__slideInDown');
        document.querySelector('header').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
    } 
    
})


$('.owl-carousel').owlCarousel({
    center:true,
    loop:true,
    nav:false,
    dots:false,
    autoplayTimeout:3000,
    touchDrag:true,
    autoplay:true,
    responsive:{
        600:{
            items:4     
        },
        400:{
            items:3
        }
    }
})