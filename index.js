function NotaFinal() {
let notaPrimeiroBimestre = (document.getElementById("nota1").value) 
let notaSegundoBimestre = (document.getElementById("nota2").value) 
let notaTerceiroBimestre = (document.getElementById("nota3").value) 
let notaQuartoBimestre = (document.getElementById("nota4").value) 

let n1 = parseInt(notaPrimeiroBimestre)
let n2 = parseInt(notaSegundoBimestre)
let n3 = parseInt(notaTerceiroBimestre)
let n4 = parseInt(notaQuartoBimestre)

let nota = (n1 + n2 + n3 + n4) / 4 


    let elemento = document.getElementById("resultado")
    if (nota >= 10) {
        elemento.innerText = "Aprovado"
    } else if (nota >= 5) {
        elemento.innerText = "Recuperação"
    } else {
        elemento.innerText = "Reprovado"
    }
}
 
