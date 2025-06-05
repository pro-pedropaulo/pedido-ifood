// Script inicial
console.log('Aplicação iniciada');

const lanches = [
    {
        nome: 'Hambúrguer Clássico',
        imagem: 'https://via.placeholder.com/150',
        descricao: 'Um delicioso hambúrguer com queijo, alface e tomate.'
    },
    {
        nome: 'Cheeseburger',
        imagem: 'https://via.placeholder.com/150',
        descricao: 'Hambúrguer com bastante queijo para os amantes de cheddar.'
    },
    {
        nome: 'Veggie Burger',
        imagem: 'https://via.placeholder.com/150',
        descricao: 'Opção vegetariana com grão de bico e temperos especiais.'
    }
];

function renderizarLanches() {
    const container = document.getElementById('lanches-container');
    lanches.forEach(lanche => {
        const card = document.createElement('div');
        card.className = 'lanche-card';
        card.innerHTML = `
            <img src="${lanche.imagem}" alt="${lanche.nome}">
            <h2>${lanche.nome}</h2>
            <p>${lanche.descricao}</p>
            <button>Adicionar ao carrinho</button>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarLanches);
