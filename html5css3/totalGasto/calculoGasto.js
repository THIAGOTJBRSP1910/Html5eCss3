/**
 * Calcular Gastos
 * @author Murilo Solano, Thiago de Jesus e Guilherme Henrique
 */

function calcularGastos(){
    let gasto1 = 0, gasto2 = 0, gasto3 = 0, resultado,  dinheiro

    gasto1 = parseFloat(frmGastos.txtGasto1.value.replace(",","."))
    gasto2 = parseFloat(frmGastos.txtGasto2.value.replace(",","."))
    gasto3 = parseFloat(frmGastos.txtGasto3.value.replace(",","."))
    dinheiro = parseFloat(frmGastos.txtDinheiro.value.replace(",","."))
    

    resultado = dinheiro - (gasto1 + gasto2 + gasto3) 
    

    frmGastos.txtResultado.value = resultado.toFixed(2)

}





