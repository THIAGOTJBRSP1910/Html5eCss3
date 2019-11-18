/**
 * Estudo do lado for - Tabuada completa
 * @author Thiago
 */

document.write("<h1>Tabuada</h1>")
let i = 0
let  j = 0
while (i < 10){
    i++
    document.write("<p> Tabuada do " + i +"</p>")
    while(j < 10){
        j++
        document.write("<p>"+ i + " x " + j + " = " + (i * j)+"</p>")
        
    } j = 0

} 