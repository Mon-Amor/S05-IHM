class AulasComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.hoje = "ter"; // Alterar conforme o dia atual
    }

    connectedCallback() {
        this.index = parseInt(this.getAttribute("index")) || 0; // Pega o índice do atributo
        this.loadData();
    }

    async loadData() {
        try {
            const response = await fetch('aulas.json');
            const aulas = await response.json();
            this.render(aulas);
        } catch (error) {
            console.error('Erro ao carregar os dados das aulas:', error);
        }
    }

    render(aulas) {
        // Filtra as aulas do dia específico
        const aulasDia = aulas.filter(a => a.data === this.hoje);

        // Pegamos a aula correspondente ao index passado
        const aulaSelecionada = aulasDia[this.index]; 

        // Criando o arquivo de estilo
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'styles_componente.css';
        this.shadowRoot.appendChild(link);

        if (aulaSelecionada) {
            this.shadowRoot.innerHTML = `
                <div class="comp-aula">
                    <div class="label-prova p_label" style="background-color: ${this.getProvaColor(aulaSelecionada.prova)}; 
                                                         display: block; 
                                                         width: 90%; 
                                                         margin: 10px auto;
                                                         padding: 15px 30px;
                                                         border-radius: 25px; 
                                                         font-size: 18px; 
                                                         text-align: center;">
                        PROVA: <b>${aulaSelecionada.prova}</b>
                    </div>
                    
                    <div class="titulo_aula">${aulaSelecionada.disciplina}</div>
                    <p class="p">Local e Horário: <b>${aulaSelecionada.local} - ${aulaSelecionada.horario}</b></p>
                    
                    <div class="labels" style="display: flex; justify-content: space-between; gap: 10px;">
                        <div class="label-frequencia p_label" style="background-color: ${this.getFrequenciaColor(aulaSelecionada.frequencia)}; 
                                                                  display: inline-block; 
                                                                  padding: 10px 20px; 
                                                                  border-radius: 25px; 
                                                                  font-size: 16px; 
                                                                  flex: 1;">
                            FALTAS: <b>${aulaSelecionada.frequencia}</b>
                        </div>
                        
                        <div class="label-nota p_label" style="background-color: ${this.getNotaColor(aulaSelecionada.nota)}; 
                                                              display: inline-block; 
                                                              padding: 10px 20px; 
                                                              border-radius: 25px; 
                                                              font-size: 16px;
                                                              flex: 1;">
                            CR: <b>${aulaSelecionada.nota}</b>
                        </div>
                    </div>
                </div>
            `;
        } else {
            this.shadowRoot.innerHTML = "<p>Não há aulas disponíveis.</p>";
        }
    }

    getNotaColor(nota) {
        if (nota < 6) return 'red';
        if (nota < 8) return 'orange';
        return 'green';
    }

    getProvaColor(dataProva) {
        const hoje = new Date();
        const provaDate = new Date(dataProva);
        const diffDays = Math.ceil((provaDate - hoje) / (1000 * 60 * 60 * 24));

        if (diffDays <= 7) return 'red';
        if (diffDays <= 14) return 'orange';
        return 'green';
    }

    getFrequenciaColor(frequencia) {
        const [faltas, totais] = frequencia.split('/').map(Number);
        const porcentagemFaltas = (faltas / totais) * 100;

        if (porcentagemFaltas < 50) return 'green';
        if (porcentagemFaltas < 75) return 'orange';
        return 'red';
    }
}

customElements.define('aulas-component', AulasComponent);
