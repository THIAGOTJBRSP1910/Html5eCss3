/**
 * Calculo da media
 * @autor Thiago de Jesus
 */

 function calcularMedia(){
     let nota1,nota2,media //variaveis do mesmo tipo
     /*
        parseFloat converte a String da caixa de textodo formulario para um tipo numérico
        Float (numeros reais, casas decimais)
        int (numeros inteiros)
        .replace(",",".") (troca um caractere por outro)
     */
     nota1 = parseFloat(frmMedia.txtNota1.value.replace(",","."))
     nota2 = parseFloat(frmMedia.txtNota2.value.replace(",","."))
     media = (nota1 + nota2) / 2
     //toFixed(2) -> formatar o resultado em 2 casas decimais
     frmMedia.txtResultado.value = media.toFixed(2)
     if (media < 2){
        frmMedia.txtStatus.value = "Reprovado"
     } else if (media >= 2 && media < 5){
        frmMedia.txtStatus.value = "Recuperação"
     } else {   
        frmMedia.txtStatus.value = "Aprovado"
     }
 }