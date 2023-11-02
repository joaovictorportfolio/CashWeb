
import * as funcoesNavegacaoAbas from './navegacaoAbas.js'

import * as funcoesFirebase from './firebase.js'


// =================================== FUNCOES =============================================== //


export function IniciarCadastro(){

  const section02 = document.getElementById('section02')

  const formulario = document.getElementById('formCadastro')

  const objloading = formulario.querySelector('.objloading')

  const alert = section02.querySelector('.alert')
  const mensagemAlerta = alert.querySelector('span')

   // alert-success
  // alert-warning
  // alert-error

  // objetos formulario

  const inputNome = formulario.querySelector('#inputNome')
  const inputValor = formulario.querySelector('#inputValor')
  const inputData = formulario.querySelector('#inputData')
  const inputTipo = formulario.querySelector('#inputTipo')
  const inputObservacao = formulario.querySelector('#inputObservacao')

  // ----------------------------

  formulario.reset()

  formulario.addEventListener('submit',async(event)=>{
    
    event.preventDefault() 

    mostrarElemento(objloading)

    const objFormulario = {

      nome: inputNome.value ,
      valor: parseFloat(inputValor.value) ,
      data: inputData.value ,
      tipo: inputTipo.value ,
      observacao: inputObservacao.value 
  
  
    }

    //console.log(objFormulario)

    let resultado

     await funcoesFirebase.cadastrarRegistro('transacoes',objFormulario).then((result)=>{ resultado = result })

    //console.log(resultado)


    // cadastrar

    if( resultado == true ){

      alert.classList.add('alert-success')
      mensagemAlerta.textContent=`Transação de ${inputTipo.value} cadastrada com sucesso!`
      mostrarElemento(alert)

      setTimeout(()=>{ 

        esconderElemento(alert)
        esconderElemento(objloading)
        
        funcoesNavegacaoAbas.ativarTab('Histórico') 
      
      
      },3000)

      


    }

    else{

      alert.classList.add('alert-error')
      mensagemAlerta.textContent = 'Falha ao tentar cadastrar a transação, tente mais tarde...'
      console.log(resultado)
      mostrarElemento(alert)

      setTimeout(()=>{ 

        esconderElemento(alert)
        esconderElemento(objloading) 
      
      
      },3000)


    }


    

    

      
    

    
    

  })



}

function mostrarElemento(elemento){

  elemento.classList.remove('hidden')
  elemento.classList.add('flex')


}

function esconderElemento(elemento){

  elemento.classList.add('hidden')
  elemento.classList.remove('flex')


}






  
  
  
  
  
  