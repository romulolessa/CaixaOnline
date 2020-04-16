//Abrir o caixa (valor incial de dinheiro no caixa)
//Add vendas de acordo com o movimento
//Exibição de Troco
//Exibir valor final do caixa 

let inputPagoCliente= document.getElementById("valorPagoCliente");
let valorReal= document.getElementById("valorReal");
let inputAbrirCaixa= document.getElementById("abertura");
let inputNomeProduto= document.getElementById("nomeProduto");
let inputValorProduto= document.getElementById("valorProduto");
let nomeproduto = inputNomeProduto.value;
let preco = inputValorProduto.value;

var armazenamento = [];
   
console.log(inputAbrirCaixa, inputNomeProduto, inputValorProduto, inputPagoCliente, valorReal);

function AbriCaixa(){
    var aberturaCaixa = document.getElementById("valorAbertura");
    var buttonAbertura = document.getElementById("abrir");
    var abricaixa = inputAbrirCaixa.value;

    valorInicial ="R$ " + abricaixa;
    aberturaCaixa.innerHTML = valorInicial;
    console.log("Valor em Caixa: " + inputAbrirCaixa.value)

    inputAbrirCaixa.style.display="none";
    buttonAbertura.style.display="none";
}
function CadProduto(nomeproduto, preco){
    var inputNomeProduto= document.getElementById("nomeProduto");
    var inputValorProduto= document.getElementById("valorProduto");
    var nomeproduto = inputNomeProduto.value;
    var preco = inputValorProduto.value;

    armazenamento.push({nome: nomeproduto, valor: preco})
    
    //criar uma objeto ou arry que armazina o nome e o preço do produto vendido
    console.log(armazenamento);
    return armazenamento;
}
function Venda(){
    var inputtroco = document.getElementById("troco");
    var valorproduto = CadProduto("preco");
    var PagoCliente = inputPagoCliente.value


    for(i of armazenamento){
        total =+ i.valor;
    }
    console.log(total)
    troco = PagoCliente - total
    
    inputtroco.innerHTML = troco;
    console.log("Troco: "+ troco);
}
/*function Venda(){
    var inputtroco = document.getElementById("troco");
    var valorproduto = CadProduto("preco");

    //criar um função que venda
    
    inputtroco.innerHTML = resultado;
    console.log("Troco: "+ resultado)
}
function CaixaFinal(){
    

    }
}*/

