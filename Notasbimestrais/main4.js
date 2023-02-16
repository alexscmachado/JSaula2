
/*
let menu = prompt (" Você é ? 1 - Diretor, 2 - Professor , 3 - Responsável ")
  
    if (menu == 1 ){
        pessoa = "Diretor"  
        alert ("você é diretor")
        prompt  ("Digite o seu usúário: ")
        
    } else if (menu == 2 ){
        pessoa = "Professor"
        alert ("você é Professor")
        prompt  ("Digite o seu usúário: ")
    } else if (menu ==3){
        pessoa = "responsável"
        alert ("você é Resposnsável")
        prompt  ("Digite o seu usúário: ")
    } else {
        alert ("Você ainda não percetence a comuniadde escolar. Venha para nossa escola!")
    }
   
*/


alert ( "Bem vindos a Escola X")
arlert (" Vamos cadastrar o aluno")

let aluno = prompt ("Digite o nome do aluno:")

function name (){

    alert ("aluno: " + "  " + aluno )

}
name ()

alert ("Digite agora as notas bimestrais do aluno.")

let nota1 = parseInt(prompt ("Digite a nota do 1° bimestre:")) 
let nota2 = parseInt(prompt ("Digite a nota do 1° bimestre:"))
let nota3 = parseInt(prompt ("Digite a nota do 1° bimestre:"))
let nota4 = parseInt(prompt ("Digite a nota do 1° bimestre:"))

function notaFinal (){

    let soma = (nota1 + nota2 + nota3 + nota4) / 2
    
    alert (soma)
    
    
}

notaFinal ()

