var executar_contagem = false;
var contagem = 1;
self.addEventListener('message', function (e) {
  var data = e.data;
  switch (data.cmd) {
    case 'contar':
      if (executar_contagem == false) {
        executar_contagem = true;
        contar(contagem); // Inicia a contagem do zero
      }
      break;
    case 'zerarContagem':
      contagem = 1;
      break;
    case 'inverterExecutarContagem':
      executar_contagem = !executar_contagem;
      break;
    default:
      self.postMessage('Comando Desconhecido');
  }
}, false);

function contar(x) {
  if (!executar_contagem) return;

  self.postMessage(`Contagem: ${x}`);
  contagem = x + 1;
  setTimeout(() => contar(contagem), 1000);
}