let list = document.querySelectorAll('.item'); // Seleciona todos os elementos com a classe 'item'
let next = document.getElementById('next'); // Seleciona o botão 'next' pelo ID
let prev = document.getElementById('prev'); // Seleciona o botão 'prev' pelo ID

let count = list.length; // Conta o número total de itens
let active = 0; // Índice do item atualmente ativo

next.onclick = () => {
    let activeOld = document.querySelector('.item.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }

    // Incrementa o índice do item ativo e garante que ele retorne ao início após o último item
    active = (active + 1) % count;

    // Adiciona a classe 'active' ao próximo item
    list[active].classList.add('active');
}

prev.onclick = () => {
    let activeOld = document.querySelector('.item.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }

    // Decrementa o índice do item ativo e garante que ele retorne ao final após o primeiro item
    active = (active - 1 + count) % count;

    // Adiciona a classe 'active' ao item anterior
    list[active].classList.add('active');
}
