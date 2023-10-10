const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
// const centerBtn = document.querySelector('#center');
const boxDiv = document.querySelector('.box');

leftBtn.addEventListener('click', ()=>{
    // boxDiv.style.left = '5px';
    // boxDiv.style.right = '';
    boxDiv.style.transform = 'translateX(-200%)';
    boxDiv.style.backgroundColor = 'blue';
});

rightBtn.addEventListener('click', () =>{
    // boxDiv.style.right = '5px';
    // boxDiv.style.left = '';
    boxDiv.style.transform = 'translateX(200%)';
    boxDiv.style.backgroundColor = 'green';
});

// centerBtn.addEventListener('click', () =>{
//     boxDiv.style.transform = 'translateX(0%)';
// })

