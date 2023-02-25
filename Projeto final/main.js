alert ("Bem vindos a Livraria Machado & Retore")
let user = prompt ("Digite seu usuário:")
let password = prompt ("digite sua senha:")
let usuarios=true

function usuario (username, senha){

    this.username = username
    this.senha = senha
    this.login = function (){

   if (this.username !="alex" && this.senha!="Machado"){
   while(this.username !="alex" && this.senha!="Machado"){
    alert ("Usuário não cadastrado ou dados de login incorretos. Recarregue a página e tente novamente.")

   }       
} else {
    alert("Você já pode fazer sua compra.")
}
}
}
let usuario1 = new usuario (user , password)

usuario1.login()


let busca = prompt ("Escolha um número correspondente título que deseja comprar:\n 1 - JavaScript: guia prático - R$ 40,00\n 2 - Peter pan - R$ 35,00\n 3 - Dom Casmurro - R$ 25,00  \n 4 - A cura pelos cristais - R$ 60,00 ")


function livro (titulo , autor,valor){

    this.titulo = titulo
    this.autor = autor
    this.valor = valor
   
    this.escolha = function ( ){
       
        alert("Você escolheu:"+" " +"\n"  +"titulo:" +" "+ this.titulo +" " + "\n"+ "Autor:" +" " + this.autor +"\n "+"Valor:"+" "+"R$"+ this.valor)
              
        
    }
}

const titulo1 = new livro ("JavaScript:guia prático ", "David Flanagan", " 40,00")
const titulo2 = new livro ("Peter pan ", "Desconhecido","35,00")
const titulo3 = new livro ("Dom Casmurro ", "Machado de Assis","  25,00")
const titulo4 = new livro ("A cura pelos cristais  ", "Hare Hare Baba","  60,00")


function compra (){
    if (busca == 1){
        
    alert(  (titulo1.escolha()))
    } else if (busca == 2){
    console.log (titulo2.escolha())
    }else if (busca == 3){
        console.log (titulo3.escolha())
        }else if (busca == 4){
            console.log (titulo4.escolha())
            } else {
                alert("Não temos esse produto no estoque no momento")
            }       
}
let compraprint = compra()



 let cupom = prompt ("Deseja adicionar cupom de desconto de 20% a sua compra?\n 1- Sim  2- Não")
 let valor1= parseInt(titulo1["valor"])
 let valor2= parseInt(titulo2["valor"])
 let valor3= parseInt(titulo3["valor"])
 let valor4= parseInt(titulo4["valor"])
let desconto= parseInt("0,2")
 let valorP = 0

 function valorFinal(){
    if (busca == 1){
        valorP=valor1
        return valorP
          
        } else if (busca == 2){
            valorP= valor2
            return valorP
        }else if (busca == 3){
            valorP= valor3
            return valorP
           
            }else if (busca == 4){
                valorP=valor4
                return valorP
            
                } else {
                    alert("Não temos esse produto no estoque no momento")
                }        
}

function descontoFinal(a,b){
    return a/b
}

 function calcDesconto (a,b){
        if (cupom == 1 || cupom==2 ||cupom==3 || cupom==4 ){
               return a*b
        }else{
            alert ("não deu certo")
        }
 }


let resultadoDesconto=parseInt(calcDesconto(valorFinal(),descontoFinal(20,100)))

 alert ( "O valor do desconto é de R$:" +" " + resultadoDesconto + " "+"reais")

 function precoResultado (a,b){

    return a-b
 }
 let compraResultado = parseInt(precoResultado(valorFinal(),resultadoDesconto))

  alert (  " O PREÇO FINAL DO PRODUTO COM DESCONTO: R$:"+ compraResultado +" "+"reais")



        // console.log(literaturaBrasileira)
        // console.log(literaturaBrasileira.titulo [0])
        


  










// for ( let resultado in literaturaBrasileira){

//     console.log (literaturaBrasileira[resultado])
// }


// function resultado (){
//     if ( busca==1){

//         literaturaBrasileira.print ()
    
//     } else {
//         alert (" Não deu certo")
//     }
        
// }
// resultado()

// // console.log (romance.titulo)

// // console.log (romance.autor)

// // romance.print()
// // romance2.print()

// //  printRomance()
// resultado()



     
 


