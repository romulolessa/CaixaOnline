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

var armazenamento = [{}];
   
console.log(inputAbrirCaixa, inputNomeProduto, inputValorProduto, inputPagoCliente, valorReal);

// inicio do codigo 
var buttonAbertura = document.getElementById("abrir");
var buttonCadastrarProduto = document.getElementById(`cadastrarProduto`);
var buttonFeharCompra = document.getElementById("fecharCompra");

//comecando abertura da funcao de abrir caixa;
buttonAbertura.addEventListener("click",function(){
    var inputAbrirCaixa = document.getElementById("abertura");
    var aberturaCaixa = document.getElementById("valorAbertura");
    var valorAbertura = inputAbrirCaixa.value;

    aberturaCaixa.innerHTML = ('R$ '+valorAbertura);

    inputAbrirCaixa.style.display="none";
    buttonAbertura.style.display="none";

    console.log("Valor em Caixa: " + inputAbrirCaixa.value)
});
buttonCadastrarProduto.addEventListener(`click`, function(){
    var inputNomeProduto= document.getElementById("nomeProduto");
    var inputValorProduto= document.getElementById("valorProduto");
    var nomeproduto = inputNomeProduto.value;
    var preco = inputValorProduto.value;

    return armazenamento.push({nome: nomeproduto, valor: preco});
});

buttonFeharCompra.addEventListener(`click`, function(){
    var armazenaValorCompra = armazenamento.reduce(armazenamento.preco) 
    console.log(armazenaValorCompra)
});


/*
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