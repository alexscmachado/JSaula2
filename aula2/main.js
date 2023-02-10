let nome1 = prompt ("digte seu primeiro nome:");
let nome2 = prompt ("digite o seu sobrenome:")
let nomeTodo = nome1+"  "+nome2

if ((nome1 == "") &&  (nome2 == "")){
    alert("Você não digitou os nomes. Volte e digite")
} else {
    
    alert ( "Seu nome é:" + " " + nomeTodo);

}

let birth = prompt ("digte a seu ano de nascimento");

let idade = 2023 - birth;

if (idade < 18){

    alert("Você é menor de idade, precisa da altorização de seus pais para continuar!");
} else if(idade >= 30){
    alert ("Vocês está em uma idade boa.")
}
else {
    alert ("Sua idade é: " + " " + idade + " "+ "anos");
}

alert ("Obrigado pela participação!");