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
const vagas = [
    {
      id: 5,
      title: 'Estágio em Desenvolvimento Web',
      modality: 'Estágio',
      description: 'Empresa procura estudante para estágio em front-end (HTML, CSS, JS).',
      contact: 'contato@empresa.com',
      area: 'Engenharia de Software',
      contractType: 'Home office',
      image: 'https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
      title: 'Vaga de Analista de Dados Jr.',
      modality: 'Efetivo',
      description: 'Procura-se profissional para análise de dados, experiência em Python e SQL desejada.',
      contact: 'rh@dados.com',
      area: 'Engenharia de Dados',
      contractType: 'Presencial',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 7,
      title: 'Estágio em Marketing Digital',
      modality: 'Estágio',
      description: 'Estágio para criação de conteúdo e gestão de redes sociais, domínio de inglês é diferencial.',
      contact: 'marketing@empresa.com',
      area: 'Engenharia de Produção',
      contractType: 'Hibrido',
      image: 'https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 8,
      title: 'Vaga para Desenvolvedor Back-end',
      modality: 'Efetivo',
      description: 'Buscamos dev para trabalhar com Node.js e banco de dados SQL em projetos ágeis.',
      contact: 'devs@empresa.com',
      area: 'Engenharia de Software',
      contractType: 'PJ Home office',
      image: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  
// Chama as funções ao carregar a página
document.addEventListener('DOMContentLoaded', () => {

   let currentIndexVagas = 0;
  const carousel = document.querySelector('.carousel-vagas');
  
  function criarCardVaga(item) {
    const card = document.createElement('div');
    card.classList.add('vaga-card');
  
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p><strong>Descrição:</strong> ${item.description}</p>
      <p><strong>Modalidade:</strong> ${item.modality}</p>
      <p><strong>Área relacionada:</strong> ${item.area}</p>
      <p><strong>Tipo de contrato:</strong> ${item.contractType}</p>
      <p><strong>Contato:</strong> <a href="mailto:${item.contact}">${item.contact}</a></p>
    `;
  
    return card;
  }
  
  
  function exibirVaga(index, direcao = 'next') {
    const oldCard = carousel.querySelector('.vaga-card.active-slide');
    const newCard = criarCardVaga(vagas[index]);
  
    newCard.classList.add('active-slide');
    newCard.style.zIndex = 2;
  
    if (direcao === 'next') {
      newCard.classList.add('slide-in-right');
    } else {
      newCard.classList.add('slide-in-left');
    }
  
    carousel.appendChild(newCard);
  
    if (oldCard) {
      oldCard.classList.remove('active-slide');
      oldCard.style.zIndex = 1;
  
      if (direcao === 'next') {
        oldCard.classList.add('slide-out-left');
      } else {
        oldCard.classList.add('slide-out-right');
      }
  
      setTimeout(() => {
        oldCard.remove();
        newCard.classList.remove('slide-in-right', 'slide-in-left');
      }, 500);
    } else {
      newCard.classList.remove('slide-in-right', 'slide-in-left');
    }
  
    currentIndexVagas = index;
  }
  
  function showNext() {
    let nextIndex = (currentIndexVagas + 1) % vagas.length;
    exibirVaga(nextIndex, 'next');
  }
  
  function showPrev() {
    let prevIndex = (currentIndexVagas - 1 + vagas.length) % vagas.length;
    exibirVaga(prevIndex, 'prev');
  }
  
  document.querySelector('.next-vagas').addEventListener('click', showNext);
  document.querySelector('.prev-vagas').addEventListener('click', showPrev);
  
  // Autoplay
  let isHovered = false;
  let intervalId;
  
  function startAutoplay() {
    stopAutoplay();
    intervalId = setInterval(() => {
      if (!isHovered) showNext();
    }, 5000);
  }
  
  function stopAutoplay() {
    clearInterval(intervalId);
  }
  
  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }
  
  const carouselContainer = document.getElementById('jobs-carousel-container');
  carouselContainer.addEventListener('mouseenter', () => isHovered = true);
  carouselContainer.addEventListener('mouseleave', () => isHovered = false);
  
  startAutoplay();
  exibirVaga(0);
    
  
    let currentIndex = 0; // Índice do evento atual
  
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
  
  function criarCard(item) {
      const card = document.createElement('div');
      card.classList.add('evento-card');
      card.setAttribute('data-id', item.id);
  
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.title;
  
      const title = document.createElement('h3');
      title.textContent = item.title;
  
      const description = document.createElement('p');
      description.textContent = item.description;
  
      const date = document.createElement('p');
      date.textContent = `Data: ${item.date}`;
  
      const time = document.createElement('p');
      time.textContent = `Hora: ${item.time}`;
  
      const location = document.createElement('p');
      location.textContent = `Local: ${item.location}`;
  
      card.append(img, title, description, date, time, location);
  
      return card;
  }
  
  let currentIndexEventos = 0;
  
  function showSlideEventos(index) {
      const carousel = document.querySelector('.carousel-eventos');
      const totalSlides = carousel.children.length;
  
      if (index < 0) currentIndexEventos = totalSlides - 1;
      else if (index >= totalSlides) currentIndexEventos = 0;
      else currentIndexEventos = index;
  
      carousel.style.transform = `translateX(-${currentIndexEventos * 100}%)`;
  }
  document.querySelector('.prev').addEventListener('click', () => {
      showSlideEventos(currentIndexEventos - 1);
  });
  document.querySelector('.next').addEventListener('click', () => {
      showSlideEventos(currentIndexEventos + 1);
  });
  document.querySelector('.prev-vagas').addEventListener('click', () => {
      showSlideVagas(currentIndexVagas - 1);
  });
  document.querySelector('.next-vagas').addEventListener('click', () => {
      showSlideVagas(currentIndexVagas + 1);
  });
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


    exibirEventosNoCarrossel();
    inicializarCarrossel();

    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const themeToggle = document.getElementById('theme-toggle');

    // === MENU LATERAL ===
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sideMenu.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            sideMenu.classList.remove('active');
        }
    });
    const menuItems = document.querySelectorAll('#side-menu li');
    const mensagens = [
        "Calma, isso é só de mentirinha! 😜",
        "Essa opção tá de férias 😎",
        "Não tá funcionando, mas parece bonito né? 🤭",
        "Você achou que era real? Hahaha não. 😂",
        "Isso aí é só pra enfeitar por enquanto 🤡"
    ];
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
            alert(msg);
            sideMenu.classList.remove('active');
        });
    });
    // === TEMA CLARO/ESCURO ===
    let currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`theme-${currentTheme}`);

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('theme-dark');

        document.body.classList.remove(isDark ? 'theme-dark' : 'theme-light');
        document.body.classList.add(isDark ? 'theme-light' : 'theme-dark');

        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    const mensagensSection = document.querySelector('.mensagens h1');
    const nomeUsuario = "Monique";
    const hora = new Date().getHours();
    let saudacao;
    if (hora >= 5 && hora < 12) {
      saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde";
    } else {
      saudacao = "Boa noite";
    }
    mensagensSection.textContent = `${saudacao}, ${nomeUsuario}!`;
    const avisos = document.querySelectorAll('.slider-aviso .aviso');
    let index = 0;
    function mostrarAviso(i) {
      avisos.forEach((aviso, idx) => {
        if (idx === i) {
          aviso.classList.add('active');
        } else {
          aviso.classList.remove('active');
        }
      });
    }
    mostrarAviso(index);
    setInterval(() => {
      index = (index + 1) % avisos.length;
      mostrarAviso(index);
    }, 4000); // troca a cada 4 segundos
    
    options.forEach(option => {
        option.addEventListener('click', () => {
          const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
          alert(msg);
          sideMenu.classList.remove('active');
        });
      });

 
});
