// Lista de eventos do Inatel
const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '2025-05-12',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '2025-01-12',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '2025-05-18',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '2025-05-04',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

let currentIndex = 0; // Índice do evento atual
let intervalId; // ID do intervalo para poder controlá-lo

// Função para exibir os eventos no carrossel
function exibirEventosNoCarrossel() {
    const carousel = document.querySelector('.carousel');
    carousel.innerHTML = ''; // Limpa antes de renderizar

    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('evento-card');

        // Criando imagem
        const img = document.createElement('img');
        img.src = event.image;
        img.alt = event.title;

        // Criando título
        const title = document.createElement('h3');
        title.textContent = event.title;

        // Criando descrição
        const description = document.createElement('p');
        description.textContent = event.description;

        // Criando data
        const date = document.createElement('p');
        date.textContent = `Data: ${event.date}`;

        // Criando hora
        const time = document.createElement('p');
        time.textContent = `Hora: ${event.time}`;

        // Criando local
        const location = document.createElement('p');
        location.textContent = `Local: ${event.location}`;

        // Montando o card com todas as informações
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(time);
        card.appendChild(location);

        // Adicionando o card ao carrossel
        carousel.appendChild(card);
    });

    console.log("Eventos carregados no carrossel:", eventos);
}
// Função para controlar a navegação do carrossel
function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = carousel.children.length;

    // Limita o índice para o número de slides
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Move o carrossel
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Função para navegação anterior
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Função para navegação seguinte
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Função para avançar o slide automaticamente
function avancarSlide() {
    showSlide(currentIndex + 1);
}

// Função para pausar o carrossel quando o mouse passar sobre ele
function pausarCarrossel() {
    clearInterval(intervalId); // Para o intervalo quando o mouse passar sobre o carrossel
}

// Função para reiniciar o carrossel quando o mouse sair
function reiniciarCarrossel() {
    intervalId = setInterval(avancarSlide, 5000); // Reinicia o intervalo após 5 segundos
}

// Função que inicializa o carrossel
function inicializarCarrossel() {
    // Exibe o primeiro slide
    showSlide(currentIndex);

    // Configura o intervalo para avançar os slides a cada 5 segundos
    intervalId = setInterval(avancarSlide, 5000);

    // Adiciona os event listeners para parar e reiniciar o carrossel ao passar o mouse
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseover', pausarCarrossel);
    carousel.addEventListener('mouseout', reiniciarCarrossel);
}

// Chama as funções ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    exibirEventosNoCarrossel(); // Exibe os eventos no carrossel
    inicializarCarrossel(); // Inicializa o carrossel (com navegação automática)
});