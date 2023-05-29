const form = document.getElementById('formatividade');
const imgaprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgreprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>';
let linhas = '';
const atividade = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt ("Digite a nota mínima para ser aprovado: "))

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionalinha (){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`)
    } else {

    atividade.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgaprovado : imgreprovado}</td>`
    linha += `</tr>`
    
    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ?spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i <notas.length; i++) {
        somaDasNotas +=notas[i];
    }

    return somaDasNotas/notas.length;
}