

alert ("Digite agora as notas bimestrais do aluno.")

let nota1 = parseInt(prompt ("Digite a nota do 1° bimestre:")) 
let nota2 = parseInt(prompt ("Digite a nota do 2° bimestre:"))
let nota3 = parseInt(prompt ("Digite a nota do 3° bimestre:"))
let nota4 = parseInt(prompt ("Digite a nota do 4° bimestre:"))
let fator =parseInt(prompt ("Digite a quantidades de bimestre que a média será avaliada:"))

function notas (a,b,c,d){  // esta função faz a aquisão das notas obtidas pelo prompt

    return  a+b+c+d
//    return  [a,b,c,d]
  
}

function recuperacao (a,b,c){
    return (a + b) / c
}


function divisor (x){  // Esta faz a aquisição de um fator de divisão que stá condicionado a quantidade de bimestre que se quer calcular a média.
    return x
} 

function mediacalc (y,z){  // Esta realiza a média através da chamada das outras duas funções. 
    return y / z 
}

let mediaFinal = parseInt (mediacalc (notas(nota1,nota2,nota3,nota4), divisor(fator)))

alert ( " O média anual do aluno é:" + " " + mediaFinal)

if ( mediaFinal >= 7 ){
    alert (" O aluno está aprovado")
}else{
    alert (" O aluno está de recuperação ")

}

let notaRecuperacao =parseInt (prompt ( "Digite a nota de recuperação:")) 

let mediaFinalRecuperacao = recuperacao(notaRecuperacao,mediaFinal, divisor(2))
 
alert ( "A nota padronizada de recuperação é : " + " "+ mediaFinalRecuperacao)

    if (mediaFinalRecuperacao >=5){
        alert (" O aluno passou de ano")
    } else{
        alert (" O aluno está reprovado ")
    
    }





