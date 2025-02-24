// objeto do usuário
const usuario = { nome: "Monique Amorim", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, horaReserva: null, horaDevolucao: null },
  { id: 2, formato: "padrao", status: true, acessivel: false, horaReserva: null, horaDevolucao: null },
  { id: 3, formato: "padrao", status: true, acessivel: false, horaReserva: null, horaDevolucao: null },
  { id: 4, formato: "padrao", status: false, acessivel: true, horaReserva: null, horaDevolucao: null },
  { id: 5, formato: "padrao", status: false, acessivel: true, horaReserva: null, horaDevolucao: null },
  { id: 6, formato: "duplo", status: true, acessivel: true, horaReserva: null, horaDevolucao: null },
  { id: 7, formato: "duplo", status: false, acessivel: true, horaReserva: null, horaDevolucao: null },
  { id: 8, formato: "duplo", status: false, acessivel: true, horaReserva: null, horaDevolucao: null },  
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  
  // obter tipo de armário selecionado pelo usuário no html.
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  // na lista, filtrar apenas os armários que estão disponíveis e que são acessiveis ao usuário.
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);
  
  // caso não exista armário disponível, retorna para o usuário mensagem.
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }
  
  // sortear um armário disponível
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
  // registrar hora da reserva
  const agora = new Date();
  armarioSorteado.horaReserva = agora.toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  });

  // calcular hora de devolução (24h depois)
  const horaDevolucao = new Date(agora.getTime() + 24 * 60 * 60 * 1000);
  armarioSorteado.horaDevolucao = horaDevolucao.toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  });

  // atualizar status do armário para reservado
  armarios.find(armario => armario.id === armarioSorteado.id).status = false;
  
  // atualizar pendência do usuário
  usuario.pendencia = true;
  
  // exibir resultado
  document.getElementById("resultado").innerText = `
    Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso!
    Hora da reserva: ${armarioSorteado.horaReserva}
    Devolução em até: ${armarioSorteado.horaDevolucao}
  `;

  console.log(usuario);
  console.log(armarios);

}
