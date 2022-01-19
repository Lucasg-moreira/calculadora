
function calculadora() {
    const operacao = Number(prompt('Escolha o operador aritimético: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Potenciação'));

    let valor1 = Number(prompt('Insira o primeiro valor: '));
    let valor2 = Number(prompt('Insira o segundo valor: ' ));

    function novaOperacao() {
        const nova = prompt('Quer fazer uma nova operação? \n 1 - Sim \n 2 - Não')

        if(nova == 1) {
            calculadora()
        } else (alert('Até breve!'))
    }  
    function soma() {
        resultado = valor1 + valor2;

        alert(` O resultado entre ${valor1} e ${valor2} é ${resultado}`)
        novaOperacao()
    }
    function subtracao() {
        resultado = valor1 - valor2;

        alert(` A subtração entre ${valor1} e ${valor2} é ${resultado}`)
        novaOperacao()
    }
    function multiplicacao() {
        resultado = valor1 * valor2;

        alert(`A multiplicação entre ${valor1} e ${valor2} é ${resultado}`)
        novaOperacao()
    }
    function divisao() {
        resultado = valor1 / valor2;

        alert(` A divisão entre ${valor1} e ${valor2} é ${resultado}`)
        novaOperacao()
    }
    function potenciacao() {
        resultado = valor1 ** valor2;

        alert(` A potenciação entre ${valor1} e ${valor2} é ${resultado}`)
        novaOperacao()
    }

   

    if(operacao == 1) {
        soma()

    }else if (operacao == 2 ) {
        subtracao()
    } else if (operacao ==3 ) {
        multiplicacao()
    } else if (operacao == 4) {
        divisao()
    } else(potenciacao()) 

    
    
    
}


calculadora()




