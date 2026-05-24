// Arrow functions para cada operação
const calcularQuadrado = numero => numero * numero;

const calcularCubo = numero => numero * numero * numero;

const calcularRaizQuadrada = numero => Math.sqrt(numero);

// Arrow function para adicionar o resultado na lista
const adicionarResultadoNaLista = texto => {
    const lista = document.getElementById('listaResultados');
    const item = document.createElement('li');

    item.textContent = texto;
    lista.appendChild(item);
};

// Evento submit tratado com arrow function
document.getElementById('calculadoraForm').addEventListener('submit', event => {
    event.preventDefault();

    const numero = parseFloat(document.getElementById('numero').value);
    const operacao = document.getElementById('operacao').value;

    let resultado;
    let textoOperacao;

    if (operacao === 'quadrado') {
        resultado = calcularQuadrado(numero);
        textoOperacao = 'quadrado';
    } else if (operacao === 'cubo') {
        resultado = calcularCubo(numero);
        textoOperacao = 'cubo';
    } else if (operacao === 'raiz') {
        if (numero < 0) {
            adicionarResultadoNaLista('Não é possível calcular a raiz quadrada de número negativo.');
            return;
        }

        resultado = calcularRaizQuadrada(numero);
        textoOperacao = 'raiz quadrada';
    } else {
        adicionarResultadoNaLista('Selecione uma operação válida.');
        return;
    }

    adicionarResultadoNaLista(`O resultado da operação ${textoOperacao} de ${numero} é: ${resultado.toFixed(2)}`);
});
