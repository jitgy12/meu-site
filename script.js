function adicionarValor(valor) {
    document.getElementById("tela").value += valor;
}

function limparTela() {
    document.getElementById("tela").value = "";
}

function calcularResultado() {
    try {
        let resultado = eval(document.getElementById("tela").value);
        document.getElementById("tela").value = resultado;
    } catch (error) {
        document.getElementById("tela").value = "Erro";
    }
}

function apagarUltimo() {
    let tela = document.getElementById("tela").value;
    document.getElementById("tela").value = tela.slice(0, -1);
}
