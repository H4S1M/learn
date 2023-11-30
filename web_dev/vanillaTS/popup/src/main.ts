const popup = document.querySelector('.popup');
const show = document.querySelector('.show-btn');
const hide = document.querySelector('.close-btn');
const submit = document.querySelector('.submit-btn');


show?.addEventListener('click', ()=> {
    popup?.classList.add('active');
    console.log(submit)
})

hide?.addEventListener('click', ()=> {
    console.log('test')
    popup?.classList.remove('active');
})
