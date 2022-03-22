let notaPrimeiroBimestre = getElementById("n1").value
let notaSegundoBimestre = getElementById("n2").value
let notaTerceiroBimestre = getElementById("n3").value
let notaQuartoBimestre = getElementById("n4").value

let nota = ((n1 + n2 + n3 + n4) / 4)

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
