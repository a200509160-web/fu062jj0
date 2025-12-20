const items_1 = document.querySelectorAll('.knowledge-1');
const items_2 = document.querySelectorAll('.knowledge-2');
const items_3 = document.querySelectorAll('.knowledge-3');
let current = 0;
const Time = 8000;


function rKnowledge() {
    items_1[current].classList.remove('active-1');
    items_2[current].classList.remove('active-1');
    items_3[current].classList.remove('active-1');

    current = (current + 1) % 3;

    items_1[current].classList.add('active-1');
    items_2[current].classList.add('active-1');
    items_3[current].classList.add('active-1');
    
}

const rotationInterval = setInterval(rKnowledge, Time);

