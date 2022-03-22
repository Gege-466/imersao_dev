let notaPrimeiroBimestre = 7
let notaSegundoBimestre = 7
let notaTerceiroBimestre = 7
let notaQuartoBimestre = 7

let nota = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre

function NotaFinal() {
    let elemento = document.getElementById("resultado")
    if (nota >= 20) {
        elemento.innerText = "Aprovado"
    } else if (nota >= 15) {
        elemento.innerText = "Recuperação"
    } else {
        elemento.innerText = "Reprovado"
    }
}