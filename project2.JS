window.addEventListener("scroll", function(){
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY>0)
})



//faq
const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        let icon = faq.querySelector('.fas-icon i')
        if(icon.className==='fas fa-plus'){
            icon.className='fas fa-minus'
        } else{
            icon.className='fas fa-plus'
        }
    })
})



