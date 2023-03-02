let nomep = prompt ("Digite seu nome:")
let gender = prompt ("Digite o número de acordo com o seu gênero: \n 1 - Homem \n 2- Mulher" )
let idadep = prompt ("Digite sua Idade")
let pesop = prompt ("Digite seu peso em kg:")
let alturap= prompt ("Digite sua altura em cm")

class Pessoa {
    constructor (nome, idade, peso, altura,gender){

        this.nome=nome
        this.idade =idade
        this.peso = peso
        this.altura = altura
        this.genero = gender
  
    }
        converse (a,b){
            return a/b
        }
        imcCalc (a,b){
    
              return a/(b*b)
        } 
     
    resultado(){ 
        let generop=true    
        switch(generop) {

            case gender==2:
                if (parseInt(imc)<=parseInt(19.1)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está abaixo do peso.")
                }else if (parseInt(imc)<=parseInt(25.8)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está com peso ideal.")
                   
                } else if (parseInt(imc)<=parseInt(27.3)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está um pouco acima do peso.")
                } else if (parseInt(imc)<=parseInt(32.3)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está com sobrepeso .")
                } else if (parseInt(imc)>parseInt(32.3)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está com obesidade .")
                } else{
                    alert (" Ops! Deu algo errado!")
                }

                break
                
                case gender==1:
                if (parseInt(imc)<=parseInt(20,7)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está abaixo do peso.")
                }else if (parseInt(imc)<=parseInt(26,4)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está com peso ideal.")
                   
                } else if (parseInt(imc)<=parseInt(27.8)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está um pouco acima do peso.")
                } else if (parseInt(imc)<=parseInt(31.1)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está com sobrepeso .")
                } else if (parseInt(imc)>parseInt(31.1)){
                    alert (" Seu IMC é: "+ imc.toFixed(1)+". Segundo a OMS você está com obesidade .")
                } else{
                    alert (" Ops! Deu algo errado!")
                }

                break

                default:
                    break


        }
                

    }
    
}

const pessoa1 = new Pessoa (nomep,idadep,pesop,alturap)
 const imc =pessoa1. imcCalc( pessoa1["peso"],pessoa1.converse(pessoa1["altura"],100))


pessoa1.resultado()
