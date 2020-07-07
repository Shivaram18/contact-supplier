let readMoreBtn = document.querySelector('.rnr__read__more');
let rnrModalBox = document.querySelector('#rnr__modal__container');
let closeBtn =  document.querySelector('.close__btn');

readMoreBtn.addEventListener('click', ()=> {

    rnrModalBox.style.display = 'block';
    
})


closeBtn.addEventListener('click', () => {
    rnrModalBox.style.display = 'none';

})
