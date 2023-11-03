
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


// =================================== VARIAVEIS =============================================== //


let vquery 


// =================================== FUNCOES =============================================== //


export async function iniciarSecaoHistorico(){


  retornarListaInputPesquisa()

  retornarListasFiltro()

  limparGaleria()

  retornarTodosDocumentos()

  document.getElementById('inputPesquisar').value = ''


}


export function inserirDadosAleatoriosTransacoes(totalTransacoes){

  const idUsuario = localStorage.getItem('idUsuario')

  if(totalTransacoes<0||totalTransacoes==null||totalTransacoes==undefined){return}

  for (let i = 0; i < totalTransacoes; i++) {

    const data = generateRandomDate(3)

    const vmes = dataParaNomeDoMes(data)
    const vano = extrairAnoDaData(data)

    const objFormulario = {

      idUsuario : idUsuario ,
      nome: `Transação ${i}` ,
      valor: (1 + Math.random() * (1000 - 1)).toFixed(2) ,
      data: data ,
      mes:vmes,
      ano:vano.toString(),
      tipo: getRandomValueFromArray(['Receita','Despesa']) ,
      observacao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      
  
    }

    funcoesFirebase.cadastrarRegistro('transacoes',objFormulario)

    console.log('Transacao registrada!')

    
  }





}

// ----------------------------------------------------------------------------


export function generateRandomDate(peridoAno) {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear;
  const endYear = currentYear + peridoAno;

  const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear; // Gera um ano dentro do intervalo
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Gera um mês entre 01 e 12
  const day = String(Math.floor(Math.random() * 31) + 1).padStart(2, '0'); // Gera um dia entre 01 e 31

  return `${year}/${month}/${day}`;
}

// ----------------------------------------------------------------------------


export function getRandomValueFromArray(array) {
  if (Array.isArray(array) && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } else {
    return null; // Retorna null se a lista estiver vazia ou não for um array
  }
}


// ----------------------------------------------------------------------------


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

  const galeriaTransacoes = document.getElementById('galeriaTransacoes')

  const q2 = vquery;

  const querySnapshot2 = await getDocs(q2);

  const q = query(vquery, limit(totalCardsApresentar));

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

  }else{  galeriaVazia.classList.remove('flex') ; galeriaVazia.classList.add('hidden') }

  if( totalDocumentos2 <= 5 || totalDocumentos2 ==totalDocumentos ){

    spinnerLoadingGaleria.classList.add('hidden')
    spinnerLoadingGaleria.classList.remove('flex')

  }

  await limparGaleria()


  for (const doc of querySnapshot.docs) {

    const dados = doc.data()
   
    const id = doc.id
    const nome = dados.nome
    const data = converterData(dados.data)
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
  console.log('Apresentados: '+totalDocumentos)
  console.log('Total: '+totalDocumentos2)

  carregandoGaleria.classList.add('hidden')
  carregandoGaleria.classList.remove('flex')



} 

// ----------------------------------------------------------------------------

export function limparGaleria() {

  const container = document.getElementById('galeriaTransacoes')

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// ----------------------------------------------------------------------------


export async function retornarTodosDocumentos(){

  const idUsuario = localStorage.getItem('idUsuario')

  const col = collection(db, 'transacoes')

  vquery = query(col, where("idUsuario", "==", idUsuario), orderBy("data", "desc"))

  retornarDocumentosGaleria()


}


// ----------------------------------------------------------------------------


export async function retornarListaInputPesquisa(){

  const listaInputPesquisa = document.getElementById("listaInputPesquisa")

  const inputPesquisar = document.getElementById("inputPesquisar")

  const idUsuario = localStorage.getItem('idUsuario')

  const col = collection(db, 'transacoes')

  const q = query(col, where("idUsuario", "==", idUsuario));

  const querySnapshot = await getDocs(q);

  const listaItens = []

  limparObjetoPai(listaInputPesquisa)

  for (const doc of querySnapshot.docs) {

    const dados = doc.data()
   
    const nome = dados.nome

    if (!listaItens.includes(nome)) {

      listaItens.push(nome)

      const novoElemnto = document.createElement('div')

  
      novoElemnto.innerHTML = `
  
      <li class="itensListaPesquisa">${nome}</li>
      
      `
      
  
      listaInputPesquisa.appendChild(novoElemnto)



    }

   

    
  };

 
  const itensLista = listaInputPesquisa.querySelectorAll('li')

  itensLista.forEach((item)=>{ item.addEventListener('click',()=>{ 

    inputPesquisar.value = item.textContent

    listaInputPesquisa.classList.add("hidden")

   }) })

   

}

// ----------------------------------------------------------------------------


export async function filtrarListaPesquisa(){

  const campoPesquisa = document.getElementById('inputPesquisar');

  const listaOpcoes = document.getElementById('listaInputPesquisa');

  campoPesquisa.addEventListener('input', () => {

    const opcoes = listaOpcoes.querySelectorAll('li');

    const termoPesquisa = campoPesquisa.value.toLowerCase();

    opcoes.forEach((opcao) => {

      const textoOpcao = opcao.textContent.toLowerCase();

      if (textoOpcao.startsWith(termoPesquisa)) {

        opcao.style.display = 'block'; // Mostra a opção se a pesquisa corresponder

      } else {

        opcao.style.display = 'none'; // Oculta a opção se a pesquisa não corresponder

      }

    });

  });

  campoPesquisa.addEventListener('keyup', () => {

    
    if(campoPesquisa.value==''){
      
      limparGaleria() ; 
      retornarTodosDocumentos() ; 

      listaInputPesquisa.classList.add("hidden")
    }
    else{ listaInputPesquisa.classList.remove("hidden") } 
  
  })



}

// ----------------------------------------------------------------------------


export async function adicionarEventos(){

  const listaInputPesquisa = document.getElementById("listaInputPesquisa")

  const inputPesquisar = document.getElementById("inputPesquisar")

  const spinnerLoadingGaleria = document.getElementById("spinnerLoadingGaleria")

  const btnPesquisarNome = document.getElementById("btnPesquisarNome")

  const btnFiltro = document.getElementById("btnFiltro")

  const atualizar = document.getElementById('atualizar')

  atualizar.addEventListener('click',()=>{ retornarTodosDocumentos() })


  btnFiltro.addEventListener('click',()=>{ filtrarGaleria() })

  btnPesquisarNome.addEventListener('click',()=>{ pesquisarInputGaleria() })




  spinnerLoadingGaleria.addEventListener('click', async function() {


      const totalItensColecao = localStorage.getItem("totalItensColecao")

      const totalItensGaleria = localStorage.getItem("totalItensGaleria")
    

      //if( totalItensColecao <=5 || totalItensGaleria == totalItensColecao  ){return}
    
      retornarDocumentosGaleria()
      
    });

  //inputPesquisar.addEventListener('click',()=>{ listaInputPesquisa.classList.remove("hidden") })

  document.addEventListener('click', (event) => {
    if (!inputPesquisar.contains(event.target) && !listaInputPesquisa.contains(event.target)) {
      listaInputPesquisa.classList.add('hidden');
    }
  });

  filtrarListaPesquisa()


}



// ----------------------------------------------------------------------------


function pesquisarInputGaleria(){

  const campoPesquisa = document.getElementById('inputPesquisar');

  const valorcampoPesquisa = campoPesquisa.value.trim()

  if ( valorcampoPesquisa == '' ){ return }

  const idUsuario = localStorage.getItem('idUsuario')

  const col = collection(db, 'transacoes')

  vquery = 
  query(
    col, where("idUsuario", "==", idUsuario), 
    where('nome', '==', valorcampoPesquisa )
    );

    limparGaleria()

  retornarDocumentosGaleria()


}

// ----------------------------------------------------------------------------


function converterData(dataNoFormatoISO) {
  const partesData = dataNoFormatoISO.split('/'); // Divide a data em partes

  if (partesData.length !== 3) {
    // Certifique-se de que a data esteja no formato adequado
    return 'Data inválida';
  }

  const ano = partesData[0];
  const mes = partesData[1];
  const dia = partesData[2];

  // Crie a data no formato desejado (dd/mm/yyyy)
  const dataFormatada = `${dia}/${mes}/${ano}`;

  return dataFormatada;
}

// ----------------------------------------------------------------------------



// ----------------------------------------------------------------------------


export async function retornarListasFiltro(){

  const selectMes = document.getElementById("selectMes")

  const selectAno = document.getElementById("selectAno")

  const idUsuario = localStorage.getItem('idUsuario')

  const col = collection(db, 'transacoes')

  const q = query(col, where("idUsuario", "==", idUsuario));

  const querySnapshot = await getDocs(q);

  const listaItens = []
  const listaItens2 = []

   limparObjetoPai(selectMes)
   limparObjetoPai(selectAno)

      const novoElemnto = document.createElement('option')
  
      novoElemnto.innerHTML = '<option disabled selected value="">Mês</option>'
      
      selectMes.appendChild(novoElemnto)

      const novoElemnto2 = document.createElement('option')
  
      novoElemnto2.innerHTML = '<option disabled selected value="">Ano</option>'
      
      selectAno.appendChild(novoElemnto2)

  for (const doc of querySnapshot.docs) {

    const dados = doc.data()
   
    const data = dados.data

    const mes =  dataParaNomeDoMes(data)

    const ano =  extrairAnoDaData(data)


    if (!listaItens.includes(mes)) {

      listaItens.push(mes)

      const novoElemnto = document.createElement('option')
  
      novoElemnto.innerHTML = `

      <option value = ${data} >${mes}</option>
      
      `
      
  
      selectMes.appendChild(novoElemnto)





    }

    if (!listaItens2.includes(ano)) {

      listaItens2.push(ano)

      const novoElemnto = document.createElement('option')
  
      novoElemnto.innerHTML = `

      <option value = ${data} >${ano}</option>
      
      `
      
  
      selectAno.appendChild(novoElemnto)



    }

   

    
  };

 
  const itensLista = listaInputPesquisa.querySelectorAll('li')

  itensLista.forEach((item)=>{ item.addEventListener('click',()=>{ 

    inputPesquisar.value = item.textContent

    listaInputPesquisa.classList.add("hidden")

   }) })

   

}

  
export function dataParaNomeDoMes(dataString) {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const partes = dataString.split('/'||'-');
  if (partes.length === 3) {
    const mes = parseInt(partes[1], 10);
    if (mes >= 1 && mes <= 12) {
      return meses[mes - 1];
    }
  }
 
}

export function extrairAnoDaData(dataString) {
  const partes = dataString.split('/'||'-');
  if (partes.length === 3) {
    return parseInt(partes[0], 10);
  }
  return null; // Retornar null em caso de data inválida
}

// ----------------------------------------------------------------------------


function limparObjetoPai(container) {

  //const container = document.getElementById('galeriaTransacoes')

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}


// ----------------------------------------------------------------------------

function filtrarGaleria(){

  const selectMes = document.getElementById("selectMes")
  const selectAno = document.getElementById("selectAno")
  const tipoFiltro = document.getElementById("tipoFiltro")
  const itens = tipoFiltro.querySelectorAll("a")

  const idUsuario = localStorage.getItem('idUsuario')

  const col = collection(db, 'transacoes')

  const valorMes = selectMes.value
  const valorAno = selectAno.value

  let vqueryMes = ''
  let vqueryAno = ''
  let vqueryTipo = ''

  let filters = [];

  //const tipoFiltro = document.getElementById("tipoFiltro")

  console.log('selectMes: '+valorMes)
  console.log('selectAno: '+valorAno)
  
  if( selectMes.value !== 'Mês' ){

      console.log(valorMes)

       vqueryMes = where('mes','==',valorMes)

       filters.push(vqueryMes);


  }

  if( selectAno.value !== 'Ano' ){

    console.log(valorAno)

     vqueryAno = where('ano','==',valorAno.toString())

     filters.push(vqueryAno);


  }

  for (const item of itens) {
    if (item.classList.contains('tab-active')) {
      
      if( item.textContent !== "Todas" ){console.log(item.textContent);  vqueryTipo = where('tipo','==',item.textContent);filters.push(vqueryTipo); }


    }
  }


  vquery = query(col, where("idUsuario", "==", idUsuario),...filters )

  retornarDocumentosGaleria()


}


