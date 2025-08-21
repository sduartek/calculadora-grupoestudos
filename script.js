function inserir(num) {
    if (document.querySelector(".tela").innerHTML.length < 15) {
        document.querySelector(".tela").innerHTML += num;
    }
}

function clean() {
    document.querySelector(".tela").innerHTML = "";
}

function limpaUm() {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.slice(0, - 1);
}

function somar() {
    let tela = document.querySelector(".tela").innerHTML;

    if (tela) {
        try {
            let resultado = new Function('return ' + tela)();
            document.querySelector(".tela").innerHTML = resultado;
        } catch (e) {
            document.querySelector(".tela").innerHTML = "Erro";
        }
    } else {
        document.querySelector(".tela").innerHTML = "Erro";
    }
}

function mudarSinal() {
    let tela = document.querySelector(".tela").innerHTML;
    if (tela) {
        document.querySelector(".tela").innerHTML = parseFloat(tela) * -1;
    }

}

function calcularPorcentagem() {
    let expressao = document.querySelector(".tela").innerHTML;
    if (!expressao) return; // Não faz nada se a tela estiver vazia

    // Regex para encontrar o padrão: [número] [operador] [último número]
    // Ex: "1500*30" ou "100+10"
    const match = expressao.match(/(\d+\.?\d*)\s*([+\-x*\/÷])\s*(\d+\.?\d*)$/);

    if (match) {
        const num1 = parseFloat(match[1]); // O primeiro número (ex: 1500)
        let operator = match[2];           // O operador (ex: *)
        const num2 = parseFloat(match[3]); // O número da porcentagem (ex: 30)
        
        // Converte operadores visuais para operadores de cálculo
        if (operator === 'x') operator = '*';
        if (operator === '÷') operator = '/';

        let resultado;

        // Se a operação for soma ou subtração, o cálculo é diferente
        // Ex: 100 + 10% = 100 + (10% de 100) = 110
        if (operator === '+' || operator === '-') {
            resultado = eval(`${num1} ${operator} (${num1} * ${num2 / 100})`);
        } 
        // Se for multiplicação ou divisão, o cálculo é direto
        // Ex: 1500 * 30% = 1500 * 0.3 = 450
        else {
            resultado = eval(`${num1} ${operator} (${num2 / 100})`);
        }
        
        document.querySelector(".tela").innerHTML = resultado;

    } else {
        // Se houver apenas um número na tela, divide por 100
        // Ex: Se a tela tiver "50" e apertar %, vira "0.5"
        document.querySelector(".tela").innerHTML = parseFloat(expressao) / 100;
    }
}

