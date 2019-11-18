/**
 * @author guilherme henrique
 * 
 */
function verificarIdade(){
    let idade

    idade = parseInt(frmEleitor.txtIdade.value.replace(",","."))

    frmEleitor.txtIdade.value = idade

    if(idade < 16){
        frmEleitor.txtStatus.value = "PROIBIDO VOTAR"
    } else if(idade == 16 || idade == 17 || idade > 70 ) {
        frmEleitor.txtStatus.value = "VOTO FACULTATIVO"
    } else {
        frmEleitor.txtStatus.value = "VOTO OBRIGATÓRIO"
    }


}
