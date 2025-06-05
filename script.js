// Script inicial
console.log('Aplicação iniciada');

const lanches = [
    {
        nome: 'Hambúrguer Clássico',
        imagem: 'https://via.placeholder.com/150',
        descricao: 'Um delicioso hambúrguer com queijo, alface e tomate.',
        preco: 18.5
    },
    {
        nome: 'Cheeseburger',
        imagem: 'https://via.placeholder.com/150',
        descricao: 'Hambúrguer com bastante queijo para os amantes de cheddar.',
        preco: 20.0
    },
    {
        nome: 'Veggie Burger',
        imagem: 'https://via.placeholder.com/150',
        descricao: 'Opção vegetariana com grão de bico e temperos especiais.',
        preco: 19.0
    }
];

const carrinho = [];

function renderizarLanches() {
    const container = document.getElementById('lanches-container');
    lanches.forEach(lanche => {
        const card = document.createElement('div');
        card.className = 'lanche-card';
        const botao = document.createElement('button');
        botao.textContent = 'Adicionar ao carrinho';
        botao.addEventListener('click', () => adicionarAoCarrinho(lanche));
        card.innerHTML = `
            <img src="${lanche.imagem}" alt="${lanche.nome}">
            <h2>${lanche.nome}</h2>
            <p>${lanche.descricao}</p>
        `;
        card.appendChild(botao);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarLanches);

function adicionarAoCarrinho(item) {
    carrinho.push(item);
}

function abrirCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';
    let total = 0;
    carrinho.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        lista.appendChild(li);
        total += produto.preco;
    });
    document.getElementById('total-carrinho').textContent = `Total: R$ ${total.toFixed(2)}`;
    document.getElementById('modal-carrinho').classList.remove('hidden');
}

function fecharCarrinho() {
    document.getElementById('modal-carrinho').classList.add('hidden');
}

document.getElementById('ver-carrinho').addEventListener('click', abrirCarrinho);
document.getElementById('fechar-carrinho').addEventListener('click', fecharCarrinho);
