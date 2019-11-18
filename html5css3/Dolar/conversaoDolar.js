
function calcularConversao(){
    let dolar
    let real 
    let cotacao
    /*
        parseFloat converte a String da caixa de texto 
        do formulario para um numerico.
        Float (numeros reais, casas decimais)
        Int (numeros inteiros)
        .replace (",",";") (troca um caractere por outro)
    */
    cotacao = parseFloat(frmDolarReal.txtCotacao.value.replace(",","."))
    dolar = parseFloat(frmDolarReal.txtDolar.value.replace(",","."))
    real = cotacao * dolar
    frmDolarReal.txtReal.value = real.toFixed(1)

}