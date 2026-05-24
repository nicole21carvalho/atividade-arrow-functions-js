// Arrow function para calcular o quadrado
const calcularQuadrado = numero => numero * numero;

// O evento submit também foi modificado para arrow function
document.getElementById('numeroForm').addEventListener('submit', event => {
    event.preventDefault();

    const numero = parseFloat(document.getElementById('numero').value);
    const resultado = calcularQuadrado(numero);

    document.getElementById('resultado').textContent = `O quadrado de ${numero} é: ${resultado}`;
});
