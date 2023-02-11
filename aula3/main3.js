let usuario1 = prompt("digite seu usuário:");

let usuario = true


switch (usuario) {

    case usuario1 == "":

        alert("Recarregue a página. Você digitou um usuário inválido.")

        break;


    case usuario1 != "":

        let senha = prompt(" Digite sua senha:")

        if (senha == "Clara") {
            alert("Você digitou a senha correta")
            alert("Tudo Certo. Você já pode acessar o questionário de emprego")



        } else {
            alert("Senha incorreta. Recarregue a página e faça o login novamente")

            break;
        }

        let nomeTodo = prompt("Digite o seu nome todo:")
        let nome = true

        if (nomeTodo == "") {

            while (nomeTodo == "") {
                alert("Escreva um nome válido. Recarregue a página e tente novamente. ")
                break;

            }

        } else {
            alert("Nome validado")


        }

        let idade = prompt("digite sua idade")

        if (idade < 18) {
            while (idade < 18) {

                alert(" Você não pode se candidatar a esta vaga pois é menor de idade. Esperamos contar com você em nosso time em breve!")
                break;
            }

        } else {
            alert("Idade validada")

        }

        alert (" Vagas disponíveis: 1 - Telemarketing  2 - Recepcionista  3 - Estoquista   4 - Técnico de informática")
        
        let vaga = prompt (" Digite o número correspondente a função que deseja se candidatar:")

        for (let i = vaga ; i > 0 ; i = i++ );
   
    default:
        alert("Recarregue a página e comece novamente.")

        break;

}










if (idade < 18) {

    alert("Você é menor de idade, precisa da altorização de seus pais para continuar!");
} else if (idade >= 30) {
    alert("Vocês está em uma idade boa.")
}
else {
    alert("Sua idade é: " + " " + idade + " " + "anos");
}

alert("Obrigado pela participação!");