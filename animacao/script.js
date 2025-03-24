// Lista de eventos do Inatel
const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

// Função para gerar os cards de eventos dinamicamente
function gerarCardsDeEventos(eventos) {
    const container = document.querySelector('.noticias'); // Seção de notícias onde os cards serão inseridos
    container.innerHTML = ''; // Limpar o conteúdo existente

    eventos.forEach(event => {
        // Criar o elemento card
        const card = document.createElement('div');
        card.classList.add('card'); // Atribui a classe 'card' ao div do evento

        // Criar o elemento de imagem
        const img = document.createElement('img');
        img.src = event.image; // Usando a chave 'image' do objeto
        img.alt = event.title;  // Usando a chave 'title' para o alt da imagem

        // Criar o conteúdo de informação
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info'); // Atribuindo a classe 'info' à div

        // Criar o título
        const title = document.createElement('h3');
        title.textContent = event.title; // Usando a chave 'title'

        // Criar a descrição
        const description = document.createElement('p');
        description.textContent = event.description; // Usando a chave 'description'

        // Criar as informações adicionais (data, hora e local)
        const details = document.createElement('p');
        details.innerHTML = `<span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}`; // Adicionando data, hora e local com ícones

        // Adicionar o título, descrição e detalhes à div 'info'
        infoDiv.appendChild(title);
        infoDiv.appendChild(description);
        infoDiv.appendChild(details);

        // Adicionar a imagem e a div 'info' ao card
        card.appendChild(img);
        card.appendChild(infoDiv);

        // Adicionar o card ao container de notícias
        container.appendChild(card);
    });
}

// Chamar a função para gerar os cards de eventos
gerarCardsDeEventos(eventos);
// Função para trocar o tema
function changeTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

// Carregar o tema salvo no localStorage
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'theme-light';
    document.body.className = savedTheme;
};
