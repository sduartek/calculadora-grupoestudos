function inserir(num) {
    document.querySelector(".tela").innerHTML += num;
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
    document.querySelector(".tela").innerHTML = eval(tela);
    if (tela) {
        document.querySelector(".tela").innerHTML = eval(tela);
    } else {
        document.querySelector(".tela").innerHTML = "erro"
    }

    function mudarSinal(){
        let tela = document.querySelector(".tela").innerHTML;
        if (tela) {
            
        }

    }
}