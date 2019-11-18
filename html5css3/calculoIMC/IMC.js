/**
 * calculo da media
 * @author Murilo Solano
 */

function calcularIMC() {
    let Peso
    let Altura
    let media
    let status

    /*
       parseFloat converte a String da caixa de texto do formulario para um tipo numerico
       Float (numros reais, casas decimais)
       int (numeros inteiros)
       .replace(",",".") (troca um caractere por outro)
    */
    Peso = parseFloat(frmMedia.txtPeso.value.replace(",", "."))
    Altura = parseFloat(frmMedia.txtAltura.value.replace(",", "."))
    media = Peso / (Altura * Altura)
    //toFixed(2) -> formatar o resultado em 2 casas decimais
    frmMedia.txtResultado.value = media.toFixed(1)

    if (media < 17) {
        frmMedia.txtStatus.value = "Muito Abaixo do Peso"
        status = 1
    }
    else if (media > 17 && media < 18.49) {
        frmMedia.txtStatus.value = "Abaixo do Peso"
        status = 2
    }
    else if (media > 18.5 && media < 25) {
        frmMedia.txtStatus.value = "Peso Normal"
        status = 3
    }
    else if (media > 25 && media < 30) {
        frmMedia.txtStatus.value = "Acima do Peso"
        status = 4
    }
    else if (media > 30 && media < 35) {
        frmMedia.txtStatus.value = "Obesidade 1"
        status = 5
    }
    else if (media > 35 && media < 40) {
        frmMedia.txtStatus.value = "Obesidade 2"
        status = 6
    }
    else if (media > 40) {
        frmMedia.txtStatus.value = "Obesidade Mórbida"
        status = 7
    }

    switch (status) {
        case 1:
            document.getElementById("Imc").src = "imc1.png"
            break
    }

    switch (status) {
        case 2:
            document.getElementById("Imc").src = "imc2.png"
            break
    }

    switch (status) {
        case 3:
            document.getElementById("Imc").src = "imc3.png"
            break
    }

    switch (status) {
        case 4:
            document.getElementById("Imc").src = "imc4.png"
            break
    }
    switch (status) {
        case 5:
            document.getElementById("Imc").src = "imc5.png"
            break
    }
    switch (status) {
        case 6:
            document.getElementById("Imc").src = "imc6.png"
            break
    }
    switch (status) {
        case 7:
            document.getElementById("Imc").src = "imc7.png"
            break
    }

}




