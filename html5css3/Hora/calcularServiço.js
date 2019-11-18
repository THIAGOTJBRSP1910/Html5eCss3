/**
 * Calcular Serviço
 * @author Guilherme e Thiago
 */

 //variavel global
 let valorTotal, Salario = 0, Imposto, CustoOperacional, Investimento, CargaHoraria = 160, Total, ValorTotalDeTudo

 function calcularServiço() {

     Salario = parseFloat(frmCalcularServiço.txtSalario.value.replace(",","."))
     Imposto = parseFloat(frmCalcularServiço.txtImposto.value.replace(",","."))
     valorTotal = (Salario * 30) / 100
     frmCalcularServiço.txtValorTotal.value = valorTotal.toFixed(2)
 }

function calcularCusto() {

    CustoOperacional = parseFloat(frmCalcularServiço.txtCustoOperacional.value.replace(",","."))
    ValorCusto = (Salario * 20) / 100
    frmCalcularServiço.txtValorCusto.value = ValorCusto.toFixed(2)
}

function calcularHora() {
    CargaHoraria = parseFloat(frmCalcularServiço.txtCargaHoraria.value.replace(",","."))
    ValorTotalHora = (CargaHoraria * 85) / 100
    frmCalcularServiço.txtValorTotalHora.value = ValorTotalHora.toFixed(2)
}


    function calcularTudo() {
        Salario = parseFloat(frmCalcularServiço.txtSalario.value.replace(",","."))
        Imposto = parseFloat(frmCalcularServiço.txtImposto.value.replace(",","."))
        CustoOperacional = parseFloat(frmCalcularServiço.txtCustoOperacional.value.replace(",","."))
        Investimento = parseFloat(frmCalcularServiço.txtInvestimento.value.replace(",","."))
        CargaHoraria = parseFloat(frmCalcularServiço.txtCargaHoraria.value.replace(",","."))
        ValorTotalDeTudo = valorTotal + ValorCusto + ValorTotalHora
}
