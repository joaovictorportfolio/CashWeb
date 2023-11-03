



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import { 

  getFirestore ,
  collection, 
  addDoc,
   query, 
   where, 
   getDocs,
   limit


} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcFj2qtIGz4dHaGPqgt9EUjl48ykscrrM",
  authDomain: "cashweb-b21a4.firebaseapp.com",
  projectId: "cashweb-b21a4",
  storageBucket: "cashweb-b21a4.appspot.com",
  messagingSenderId: "879580421181",
  appId: "1:879580421181:web:d0e43e51af0a46231a1e54"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// =================================== FUNCOES =============================================== //


import * as funcoesNavegacaoAbas from './navegacaoAbas.js'
import * as funcoesHistorico from './historico.js'

// =================================== FUNCOES =============================================== //


export function IniciarCadastro(){


  const formulario = document.getElementById('formCadastro')


  // ----------------------------

  formulario.reset()





}

function mostrarElemento(elemento){

  elemento.classList.remove('hidden')
  elemento.classList.add('flex')


}

function esconderElemento(elemento){

  elemento.classList.add('hidden')
  elemento.classList.remove('flex')


}

export async function adicionarEventosCadastro(){

  const section02 = document.getElementById('section02')

  const formulario = document.getElementById('formCadastro')

  const objloading = formulario.querySelector('.objloading')

  const alert = section02.querySelector('.alert')
  const mensagemAlerta = alert.querySelector('span')

  const inputNome = formulario.querySelector('#inputNome')
  const inputValor = formulario.querySelector('#inputValor')
  const inputData = formulario.querySelector('#inputData')
  const inputTipo = formulario.querySelector('#inputTipo')
  const inputObservacao = formulario.querySelector('#inputObservacao')

  const idUsuario = localStorage.getItem('idUsuario')


  formulario.addEventListener('submit',async(event)=>{

    event.preventDefault() 

    const valorData = inputData.value

    const dataComHifens = valorData;
    const partes = dataComHifens.split("-");
    const dataComBarras = partes.reverse().join("/");

    const dataComBarras2 = converterDataFormato(dataComBarras)
  
    const vmes = funcoesHistorico.dataParaNomeDoMes(dataComBarras)
    const vano = dataComBarras.slice(-4)


    mostrarElemento(objloading)

    const objFormulario = {

      idUsuario : idUsuario ,
      nome: inputNome.value ,
      valor: parseFloat(inputValor.value) ,
      data: dataComBarras2 ,
      mes : vmes,
      ano:vano,
      tipo: inputTipo.value ,
      observacao: inputObservacao.value 
      
  
    }


     const col = collection(db,'transacoes')

     try{
   
       await addDoc(col, objFormulario);

       alert.classList.add('alert-success')

       mensagemAlerta.textContent=`Transação de ${inputTipo.value} cadastrada com sucesso!`

      mostrarElemento(alert)

      setTimeout(()=>{ 

        esconderElemento(alert)
        esconderElemento(objloading)
        
        funcoesNavegacaoAbas.ativarTab('Histórico') 
      
      
      },3000)
   
       
   
     }
   
     catch(error){

      alert.classList.add('alert-error')
      mensagemAlerta.textContent = 'Falha ao tentar cadastrar a transação, tente mais tarde...'
      console.log(error)
      mostrarElemento(alert)

      setTimeout(()=>{ 

        esconderElemento(alert)
        esconderElemento(objloading) 
      
      
      },3000)

   
      
   
     }





  })



}



function converterDataFormato(data) {
  const partes = data.split('/');
  if (partes.length === 3) {
    const dia = partes[0];
    const mes = partes[1];
    const ano = partes[2];
    const dataConvertida = `${ano}/${mes}/${dia}`;
    return dataConvertida;
  } else {
    console.error('Formato de data inválido. Use "dd/mm/yyyy".');
    return null;
  }
}


  
  
  
  
  
  