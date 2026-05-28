const jogos = [
  {
    codigo: '001',
    nome: 'Subnautica 2',
    descricao: 'Subnautica é um jogo de ação e aventura',
    imagem: 'subnautica2.jpg'
  },
  {
    codigo: '002',
    nome: 'Valorant',
    descricao: 'Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa',
    imagem: 'vava.png'
  },
  {
    codigo: '003',
    nome: 'Resident Evil Requiem',
    descricao: 'Resident Evil Requiem é um jogo eletrônico de survival horror',
    imagem: 'resident.jpg'
  },
  {
    codigo: '004',
    nome: 'Forza Horizon 6',
    descricao: 'Forza Horizon 6 é um jogo de corrida',
    imagem: 'forza.jpg'
  },
  {
    codigo: '005',
    nome: 'Counter-Strike 2',
    descricao: 'Counter-Strike 2, também conhecido como CS2, é um jogo tático multijogador de tiro em primeira pessoa',
    imagem: 'cs.jpg'
  },
  {
    codigo: '006',
    nome: 'Overwatch',
    descricao: 'Overwatch é um jogo eletrônico multijogador de tiro em primeira pessoa',
    imagem: 'ow.jpg'
  }
];

const container = document.getElementById('container-cards');
const inputFiltro = document.getElementById('filtro');
const checkboxNome = document.getElementById('filtrarPorNome');

function renderizarCards(lista) {
  container.innerHTML = '';

  lista.forEach(jogo => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${jogo.imagem}" alt="${jogo.nome}">
      <h3>${jogo.nome}</h3>
      <p><strong>Código:</strong> ${jogo.codigo}</p>
      <p>${jogo.descricao}</p>
    `;

    container.appendChild(card);
  });
}

function filtrarJogos() {
  const texto = inputFiltro.value.toLowerCase();
  const somenteNome = checkboxNome.checked;

  const resultado = jogos.filter(jogo => {
    if (somenteNome) {
      return jogo.nome.toLowerCase().includes(texto);
    }

    return (
      jogo.nome.toLowerCase().includes(texto) ||
      jogo.codigo.toLowerCase().includes(texto) ||
      jogo.descricao.toLowerCase().includes(texto)
    );
  });

  renderizarCards(resultado);
}

inputFiltro.addEventListener('input', filtrarJogos);
checkboxNome.addEventListener('change', filtrarJogos);

// Exibe todos os jogos ao carregar a página
renderizarCards(jogos);