    let theme=document.querySelector('.content');
    let buttons = document.querySelectorAll('.button button');
    let ball = document.querySelector('.sbutton');
    let left = 2;
    let body=document.querySelector('body');

    function appendToResult(value) {
     document.getElementById('result').value += value;
    }

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
     const result = eval(document.getElementById('result').value);
     document.getElementById('result').value = result;
}



buttons[0].addEventListener('click',()=>{
left=2;
ball.style.left=left+'px';
theme.classList.remove('theme2');
theme.classList.remove('theme3');
body.style.backgroundColor='hsl(222, 26%, 31%)';

})
buttons[1].addEventListener('click',()=>{
left=18;
ball.style.left=left+'px';theme.classList.remove('theme3');
theme.classList.add('theme2');

body.style.backgroundColor='hsl(0, 0%, 90%)';

})
buttons[2].addEventListener('click',()=>{
left=34;
ball.style.left=left+'px';
theme.classList.add('theme3');
body.style.backgroundColor='hsl(268, 75%, 9%)';
})





