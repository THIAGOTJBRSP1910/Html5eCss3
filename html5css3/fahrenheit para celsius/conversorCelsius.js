function calcular() {
  let celsius, fahrenheit = 0
  fahrenheit = parseFloat(frmFc.txtFahrenheit.value.replace(",", "."))
  celsius = (fahrenheit - 32) * (5 / 9)
  frmFc.txtCelsius.value = celsius.toFixed(1)

}