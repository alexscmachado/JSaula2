let usuario1 = prompt("digite seu usuário:");

let usuario = true


switch (usuario) {

    case usuario1 == "Alex":

        alert(" Você digitou um usuário válido.")

        


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

        alert (" Vagas disponíveis: 0 - Telemarketing  | 1 - Recepcionista | 2 - Estoquista  | 3 - Técnico de informática")
        
      let vaga =  prompt (" Digite o número correspondente a função que deseja se candidatar:")

      let profissao = ["telemarketing","Recepcionista", "Estoquista", "Téc. de Informática"]

        for (let i = vaga  ; i < profissao.length ; i = i++ ){

            let key = profissao[i]

            let escolha =  key
                    
            alert ( " Você escolheu concorrer a uma vaga de" + " "+ escolha)

            break
        }

       alert ( "Cadastro concluído. Agora é só aguardar que entraremos em contato. Obrigado !")

       break
   
    default:
        alert("Recarregue a página e comece novamente.")

        break;

}







