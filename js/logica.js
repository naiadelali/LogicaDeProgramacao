/**
 * Created by naiade on 27/07/2015.
 */
function exercicio1(){
    var num1,num2,soma;

    num1= prompt('Digite o primeiro numero');
    num2=prompt('Digite outro valor');

    soma=parseFloat(num1) + parseFloat(num2);
    alert("A soma dos dois valores eh: "+soma);
}

function exercicio2(){
    var num1,num2,soma,subtracao,divicao,multiplicacao;

    num1= prompt('Digite o primeiro numero');
    num2=prompt('Digite outro valor');

    soma=parseFloat(num1) + parseFloat(num2);
    divicao= parseFloat(num1) / parseFloat(num2);
    multiplicacao = parseFloat(num1) * parseFloat(num2);
    subtracao = parseFloat(num1) - parseFloat(num2);
    alert("A soma dos dois valores eh: "+soma);
    alert("A divicao dos dois valores eh: "+divicao);
    alert("A multiplicacao dos dois valores eh: "+multiplicacao);
    alert("A subtracao dos dois valores eh: "+subtracao);

}

function exercicio3(){
    var consumoMedio=0, totalDistancia=0, totalCombustivel=0;

    totalDistancia = prompt("Informe a distancia total percorrida");
    totalCombustivel = prompt("Informe o total de combustivel gasto");

    consumoMedio = parseFloat(totalDistancia)/parseFloat(totalCombustivel);

    alert("O consumo medio e de : "+consumoMedio);
}

function exercicio4() {
    var nomeVendedor;
    var salarioFixo, totalVendas, salarioTotal;

    nomeVendedor = prompt("Informe o nome do vendedor");
    salarioFixo = prompt("Informe o salario fixo do vendedor");
    totalVendas = prompt("Informe o total de vendas");

    salarioTotal = (parseFloat(totalVendas) * 0.15) + parseFloat(salarioFixo);

    alert("O vendedor " + nomeVendedor + " possui um salario fixo de R$" + salarioFixo + " e um salario final de R$" + salarioTotal);
}


function exercicio5(){
    var nota1, nota2, nota3, media;
    var nomeAluno;

    nomeAluno=prompt("Informe o nome do aluno");
    nota1 = prompt("Informe a primeira nota");
    nota2= prompt("Informe a segunda nota");
    nota3 = prompt("Informe a terceira nota");
    media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

    alert("O aluno "+nomeAluno+" teve uma media de "+media);
}

function exercicio6(){
    var A,B,AUX;

    A = prompt("Informe o valor de A");
    B= prompt("Informe o valor de B");

    AUX = A;
    A = B;
    B = AUX;

    alert("O valor de A eh "+A+", e o valor de B eh "+B);
}

function exercicio7(){
    var C,F;

    C = prompt("Informe uma temperatura em graus Celsius");

    F = (9*parseFloat(C)+160) / 5;

    alert("A temperatura em Fahrenheit eh de "+F);
}

function exercicio8() {
    var cotacao, valorDolar, convercaoReal;

    cotacao = prompt("Informe a cotacao do dolar");
    valorDolar = prompt("Informe a quantia em dolar");

    convercaoReal = parseFloat(valorDolar) * parseFloat(cotacao);

    alert("O valor convertido em real eh " + convercaoReal);

}

function exercicio9(){
    var rendimento, deposito;

    deposito = prompt("Informe o seu deposito");
    rendimento=(parseFloat(deposito) * 0.70) +parseFloat(deposito);

    alert("O seu rendimento de um mes eh "+rendimento);
}

function exercicio10(){
    var compra, prestacoes;

    compra = prompt("Informe o valor da compra");
    prestacoes = parseFloat(compra)/5;

    alert("O valor das prestacoes eh "+ prestacoes);

}


function exercicio11(){
    var custo, venda, porcentagem;

    custo = prompt("Informe o valor de custo do produto");
    porcentagem = prompt("Informe a porcentagem de venda sobre o produto");

    venda = (parseFloat(custo)*(parseFloat(porcentagem)/100))+parseFloat(custo);

    alert("O preco de venda eh "+venda);
}

function exercicio12(){
    var custoFabrica= 0, imposto = 45, percDistribuidor=28, resultado = 0, custoConsumidor=0;

    custoFabrica = prompt("Informe o custo de fabricacao");

    resultado = (parseFloat(custoFabrica) * (parseFloat(imposto)/100))+parseFloat(custoFabrica);

    custoConsumidor = (parseFloat(resultado) * (parseFloat(percDistribuidor)/100))+parseFloat(resultado);

    alert("O custo ao consumidor eh "+custoConsumidor);
}

function exercicio13(){
    var numero;

    numero = prompt("Informe um numero");

    if(numero > 10){
        alert("O numero eh maior do que 10");
    }
}

function exercicio14(){
    var num1, num2, maior=0;

    num1 = prompt("Escreva um numero");

    num2 = prompt("Escreva outro numero");

    if(num1==num2){
        alert("Os dois sao iguais");
    }
    else
    {
        if(num1>num2)
            maior = num1;
        else
            maior= num2;

        alert("O numero maior eh "+maior);
    }

}

function exercicio15(){
    var numero;

    numero = prompt("Informe um numero");

    if(numero>=100 && numero<=200){
        alert("O numero esta no intervalo entre 100 e 200");
    }
}

function exercicio16(){
    var nome, nota1,nota2,nota3,media;

    nome = prompt("Informe o nome do aluno");
    nota1 = prompt("Informe a primeira nota");
    nota2 = prompt("Informe a segunda nota");
    nota3= prompt("Informe a terceira nota");

    media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

    if(media>=7)
        alert("O aluno "+nome+" foi aprovado");
    if(media <=5)
        alert("O aluno "+nome+" foi reprovado");
    if(media >=5.1 && media <= 6.9)
        alert("O aluno "+nome+" esta de recuperacao");
}

function exercicio17(){

    var numero, contador=0;


        for(var i=1;i<=80 && numero!=0;i++){

            numero = prompt("Informe um numero \n Informe 0 para sair! ");

            if(numero>=10 && numero <=150){
                contador ++;
            }

        }
        alert("Ao total, foram digitados "+contador+" numeros no intervalo entre 10 e 150");

}

function exercicio18(){
    var maior = 18, menor=18, idade=1;

    for(var i =1;i<=75 && idade!=0;i++){
        idade=prompt("Informe uma idade \n 0 - para sair");

        if(idade>0) {
            if (parseInt(idade) >=parseInt(maior)) {
                maior = idade;

            }
            if (parseInt(idade) < parseInt(menor))
            {
                menor = idade;

            }
            if(parseInt(idade)>=18)
                alert("Voce eh maior de idade");
            else
                alert("Voce eh menor de idade");
        }
    }
    alert("A maior idade eh "+maior+"\nA menor idade eh "+menor);
}

function exercicio19(){
    var sexo, contMulher= 0, contHomem=0;

    for(var i =1 ; i<=56 && sexo !=0;i++){
        sexo=prompt("Infome o sexo \n1 - se for mulher\n2 - se for homem\n0 - para sair");
switch(parseInt(sexo)){
    case 1:
        contMulher++;
        alert("Voce eh uma mulher");
        break;
    case 2:
        contHomem++;
        alert("Voce eh um homem");
        break;
    default :
        alert("soh pode 1 para mulheres ou 2 para homens");
        break;
}
    }
    alert("Quantidade de Mulheres: "+contMulher+"\nQuantidade de Homens: "+contHomem);
}

function exercicio20(){
    var resultado='S', custoFabrica, custoConsumidor=0, contador= 0, anoCarro;

    do{
        anoCarro = prompt("Informe o ano do carro");
        custoFabrica = prompt("Informe o custo do carro");
        if(parseInt(anoCarro)<=2000){
            custoConsumidor =parseFloat(custoConsumidor) + (parseFloat(custoFabrica) - (parseFloat(custoFabrica) * 0.12));
            contador++;
        }
        else
        {
            custoConsumidor = parseFloat(custoConsumidor) + (parseFloat(custoFabrica) - (parseFloat(custoFabrica)*0.07));
        }
        resultado = prompt("Informe [N] para sair");
    }while(resultado=='S')

    alert("O total de carros com o ano ateh 2000 eh "+ contador+ " e o custo a pagar eh "+ custoConsumidor);
}

function exercicio21(){
    var total= 0, totalApta= 0, retorno='S', idade,sexo,nome,saude;

    do{
        total++;
        nome = prompt("Informe o  nome");
        idade = prompt("Informe a idade");
        sexo = prompt("Informe o sexo: ([F] ou [M])");
        saude = prompt("Informe a saude: [B] boa ou [R] ruim");

        if(idade>=18 && saude=='B'){
            alert("Esta apto para cumprir o servico militar");
            totalApta++;

        }else{
            alert("Nao esta apto para cumprir o servico militar");
        }

        retorno = prompt("Deseja analisar outro candidato? S ou N");
    }while(retorno=='S');

    alert("O total de paticipantes foi de "+total+".\nO total de aprovados foi de "+totalApta);

}

function exercicio22(){
    var mediavenda= 0, mediacusto= 0, precovenda, precocusto;

    for(var i=0;i<=5;i++){
        precocusto = prompt("Informe o preco de custo do produto");
        mediacusto += parseFloat(precocusto);
        precovenda = prompt("Informe o preco de venda do produto");
        mediavenda +=parseFloat(precovenda);

        if(parseFloat(precovenda)>parseFloat(precocusto)){
            alert("Houve lucro");
        }
        if(parseFloat(precovenda)<parseFloat(precocusto))
        alert("Houve prejuizo");
        if(parseFloat(precocusto) == parseFloat(precovenda))
        alert("Houve empate");

    }

    mediacusto = parseFloat(mediacusto)/5;
    mediavenda= parseFloat(mediavenda)/5;

    alert("Media de venda: "+mediavenda+".\nMedia de custo: "+mediacusto);
}
