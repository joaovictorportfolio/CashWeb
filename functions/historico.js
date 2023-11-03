
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

  import { 

    getFirestore ,
    collection, 
    addDoc,
     query, 
     where, 
     getDocs,
     limit,
     orderBy
  
  
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


// =================================== IMPORTAR FUNCOES =============================================== //



import * as funcoesNavegacaoAbas from './navegacaoAbas.js'

import * as funcoesFirebase from './firebase.js'



// =================================== FUNCOES =============================================== //


export function inserirDadosAleatoriosTransacoes(totalTransacoes){

  const idUsuario = localStorage.getItem('idUsuario')

  if(totalTransacoes<0||totalTransacoes==null||totalTransacoes==undefined){return}

  for (let i = 0; i < totalTransacoes; i++) {

    const objFormulario = {

      idUsuario : idUsuario ,
      nome: `Transação ${i}` ,
      valor: (1 + Math.random() * (1000 - 1)).toFixed(2) ,
      data: generateRandomDate(3) ,
      tipo: getRandomValueFromArray(['Receita','Despesa']) ,
      observacao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      
  
    }

    funcoesFirebase.cadastrarRegistro('transacoes',objFormulario)

    console.log('Transacao registrada!')

    
  }





}


export function generateRandomDate(peridoAno) {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear;
  const endYear = currentYear + peridoAno;

  const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear; // Gera um ano dentro do intervalo
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Gera um mês entre 01 e 12
  const day = String(Math.floor(Math.random() * 31) + 1).padStart(2, '0'); // Gera um dia entre 01 e 31

  return `${year}/${month}/${day}`;
}


export function getRandomValueFromArray(array) {
  if (Array.isArray(array) && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } else {
    return null; // Retorna null se a lista estiver vazia ou não for um array
  }
}


export async function retornarDocumentosGaleria(){

  const carregandoGaleria = document.getElementById('carregandoGaleria')

  const spinnerLoadingGaleria = document.getElementById('spinnerLoadingGaleria')

  spinnerLoadingGaleria.classList.remove('hidden')
  spinnerLoadingGaleria.classList.add('flex')

  carregandoGaleria.classList.remove('hidden')
  carregandoGaleria.classList.add('flex')

  const galeriaVazia = document.getElementById('galeriaVazia')

  const totalCardsGaleria = document.querySelectorAll('.cardGaleria').length

  const nlimite = 5

  const totalCardsApresentar = totalCardsGaleria+nlimite

  const idUsuario = localStorage.getItem('idUsuario')

  const galeriaTransacoes = document.getElementById('galeriaTransacoes')

  const col = collection(db, 'transacoes')

  const q2 = query(col, where("idUsuario", "==", idUsuario));

  const querySnapshot2 = await getDocs(q2);

  const q = query(col, where("idUsuario", "==", idUsuario), orderBy("data", "desc"), limit(totalCardsApresentar));

  const querySnapshot = await getDocs(q);

  const totalDocumentos = querySnapshot.size

  const totalDocumentos2 = querySnapshot2.size

  localStorage.setItem("totalItensColecao",totalDocumentos2)
  localStorage.setItem("totalItensGaleria",totalDocumentos)

  if( totalDocumentos == 0 ){

    limparGaleria()

    galeriaVazia.classList.add('flex')
    galeriaVazia.classList.remove('hidden')

    carregandoGaleria.classList.add('hidden')
    carregandoGaleria.classList.remove('flex')

    return

  }

  if( totalDocumentos2 <= 5 || totalDocumentos2 ==totalDocumentos ){

    spinnerLoadingGaleria.classList.add('hidden')
    spinnerLoadingGaleria.classList.remove('flex')

  }

  await limparGaleria()


  for (const doc of querySnapshot.docs) {

    const dados = doc.data()
   
    const id = doc.id
    const nome = dados.nome
    const data = dados.data
    const tipo = dados.tipo
    const valor = dados.valor
    const observacao = dados.observacao

    let corTipo

    if(tipo=='Receita'){corTipo='accent'}
    if(tipo=='Despesa'){corTipo='error'}

    //console.log(dados)

    const novoElemnto = document.createElement('div')

    novoElemnto.innerHTML = `

    <card-galeria

     id = '${id}'
     nome = '${nome}'
     data =' ${data}'
     tipo = '${tipo}'
     corTipo = '${corTipo}'
     valor = '${valor}'
     observacao = '${observacao}'

    ></card-galeria>
    
    `


    galeriaTransacoes.appendChild(novoElemnto)

    
  };

  console.log('Dados retornados!')
  console.log('Total: '+totalDocumentos)
  console.log('Total: '+totalDocumentos2)

  carregandoGaleria.classList.add('hidden')
  carregandoGaleria.classList.remove('flex')



} 

export function limparGaleria() {

  const container = document.getElementById('galeriaTransacoes')

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}







  
  
  
  
  
  