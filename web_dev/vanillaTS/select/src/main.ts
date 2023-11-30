const popup = document.querySelector('.popup');
const show = document.querySelector('.show-btn');
const hide = document.querySelector('.close-btn');
const submit = document.querySelector('.submit-btn');

const selectBtn = document.querySelectorAll('.select-btn');
const btnText1 = document.querySelector('#btn-text1');
const btnText2 = document.querySelector('#btn-text2');
const options = document.querySelectorAll('.options');
const options1= document.querySelectorAll('#options1 .option');
const options2 = document.querySelectorAll('#options2 .option');



show?.addEventListener('click', ()=> {
    popup?.classList.add('active');
})

hide?.addEventListener('click', ()=> {
    popup?.classList.remove('active');
})



for (let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener('click', ()=> {
        options[i].classList.toggle('active');
    })
}

for (let i = 0; i < options1.length; i++) {
    options1[i].addEventListener('click', ()=> {
        btnText1!.innerHTML = options1[i].querySelector('.option-text')?.innerHTML!;
        options[0]?.classList.remove('active');
        console.log(btnText1?.innerHTML);
    })
}

for (let i = 0; i < options2.length; i++) {
    options2[i].addEventListener('click', ()=> {
        btnText2!.innerHTML = options2[i].querySelector('.option-text')?.innerHTML!;
        options[1]?.classList.remove('active');
        console.log(btnText2?.innerHTML);
    })
}


