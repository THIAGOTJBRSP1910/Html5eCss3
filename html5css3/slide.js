/**
 * Simples slide show
 * @author José de Assis
 */

 let intervalo = 3000 //3000 milesegundos = 3s

 function slide1(){
     document.getElementById('banner').src='banner1.jpg'
     //a linha abaixo "executa" a função após 3s (intervalo)
     setTimeout('slide2()', intervalo)
 }

 function slide2(){
    document.getElementById('banner').src='banner2.jpg'
    setTimeout('slide3()', intervalo)
}

function slide3(){
    document.getElementById('banner').src='banner3.jpg'
    setTimeout('slide1()', intervalo)
}