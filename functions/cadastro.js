
import * as funcoesNavegacaoAbas from './navegacaoAbas.js'



// =================================== FUNCOES =============================================== //


export function IniciarCadastro(){

  const formulario = document.getElementById('formCadastro')
  const btnCadastrar = formulario.querySelector('button')


  // ----------------------------

  formulario.reset()

  formulario.addEventListener('submit',(event)=>{ 
    
    event.preventDefault() 
    
    funcoesNavegacaoAbas.ativarTab('Histórico')

  })



}






  
  
  
  
  
  