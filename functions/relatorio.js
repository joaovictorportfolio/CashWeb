
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

  import { 

    getFirestore ,
    collection, 
    addDoc,
     query, 
     where, 
     getDocs,
     limit,
     orderBy,
     deleteDoc ,
     updateDoc ,
     doc
  
  
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


import * as funcoesHistorico from './historico.js'


// =================================== VARIAVEIS =============================================== //

const loadingRelatorio = document.getElementById("loadingRelatorio")

const idUsuario = localStorage.getItem('idUsuario')

const col = collection(db, 'transacoes')

const selectMes = document.getElementById("selectMes2")
  
const selectAno = document.getElementById("selectAno2")

const valorReceitaTotal = document.getElementById('valorReceitaTotal')

const valorDespesaTotal = document.getElementById('valorDespesaTotal')

const valorSaldoTotal = document.getElementById('valorSaldoTotal')

let receitaTotal , despesaTotal , saldoTotal


let consulta 





// =================================== FUNCOES =============================================== //



export function iniciarRelatorio(){

    loadingRelatorio.classList.remove('hidden')
    loadingRelatorio.classList.add('flex')

    consulta = query(col, where("idUsuario", "==", idUsuario))

    retornarListasFiltro()

    atualizarRelatorio()

   

    loadingRelatorio.classList.add('hidden')
    loadingRelatorio.classList.remove('flex')

}


// ---------------------------------------------


async function retornarListasFiltro(){

  
    const q = query(col, where("idUsuario", "==", idUsuario));
  
    const querySnapshot = await getDocs(q);
  
    let listaItens = []
    const listaItens2 = []
  
    funcoesHistorico.limparObjetoPai(selectMes)
    funcoesHistorico.limparObjetoPai(selectAno)
  
    const novoElemnto = document.createElement('option')

    novoElemnto.innerHTML = '<option disabled selected value="">Mês</option>'
    
    selectMes.appendChild(novoElemnto)

    const novoElemnto2 = document.createElement('option')

    novoElemnto2.innerHTML = '<option disabled selected value="">Ano</option>'
    
    selectAno.appendChild(novoElemnto2)
  
    for (const doc of querySnapshot.docs) {
  
      const dados = doc.data()
     
      const data = dados.data
  
      const mes =  funcoesHistorico.dataParaNomeDoMes(data)
  
      const ano =  funcoesHistorico.extrairAnoDaData(data)
  
  
      if (!listaItens.includes(mes)) { listaItens.push(mes) }
  
      if (!listaItens2.includes(ano)) { listaItens2.push(ano) }
  
     
  
      
    };

     if(listaItens!=[]) {listaItens = ordenarMeses(listaItens)}

    listaItens.forEach((item)=>{ 

        const novoElemnto = document.createElement('option')
    
        novoElemnto.innerHTML = `
  
        <option value = ${item} >${item}</option>
        
        `
        
        selectMes.appendChild(novoElemnto)

       })

       listaItens2.forEach((item)=>{ 

        const novoElemnto = document.createElement('option')
    
        novoElemnto.innerHTML = `
  
        <option value = ${item} >${item}</option>
        
        `
        
    
        selectAno.appendChild(novoElemnto)
       })
  
   

  
     
  
  }


// ---------------------------------------------


async function retornarReceitaTotal(){

    const listaReceita = []
    
    const querySnapshot = await getDocs(consulta);
  
    for (const doc of querySnapshot.docs) {
  
      const dados = doc.data()

      if( dados.tipo == 'Receita' ){ listaReceita.push(dados.valor) }
  
    }

    const soma = listaReceita.reduce((acumulador, elemento) => acumulador + parseFloat(elemento), 0);

    valorReceitaTotal.textContent = 'R$'+ soma.toFixed(2);

    receitaTotal = soma.toFixed(2)

    return receitaTotal
    
  
  
  }


// ---------------------------------------------

async function retornarDespesaTotal(){

    const listaReceita = []
    
    const querySnapshot = await getDocs(consulta);
  
    for (const doc of querySnapshot.docs) {
  
      const dados = doc.data()

      if( dados.tipo == 'Despesa' ){ listaReceita.push(dados.valor) }
  
    }

    const soma = listaReceita.reduce((acumulador, elemento) => acumulador + parseFloat(elemento), 0);

    valorDespesaTotal.textContent = 'R$'+ soma.toFixed(2);

    despesaTotal = soma.toFixed(2)

    return despesaTotal
    
  
  
  }


// ---------------------------------------------

async function retornarSaldoTotal(){

    
    let despesa
    let receita

    await retornarDespesaTotal().then((result)=>{ despesa = result })
    await retornarReceitaTotal().then((result)=>{ receita = result })

    saldoTotal = receita - despesa

    const total = saldoTotal.toFixed(2)

    if ( total > 0  ){

        valorSaldoTotal.classList.remove('text-error/70')
        valorSaldoTotal.classList.add('text-accent')

    }
    else{

        valorSaldoTotal.classList.add('text-error/70')
        valorSaldoTotal.classList.remove('text-accent')

    }


    valorSaldoTotal.textContent = 'R$ ' + saldoTotal.toFixed(2)
  
  
  }


// ---------------------------------------------



function filtrarGaleria(){

    const valorMes = selectMes.value
    const valorAno = selectAno.value
  
    let vqueryMes = ''
    let vqueryAno = ''
    let vqueryTipo = ''
  
    let filters = [];

    
    if( selectMes.value !== 'Mês' ){
  
         vqueryMes = where('mes','==',valorMes)
  
         filters.push(vqueryMes);
  
  
    }
  
    if( selectAno.value !== 'Ano' ){

  
       vqueryAno = where('ano','==',valorAno.toString())
  
       filters.push(vqueryAno);
  
  
    }
  
    consulta = query(col, where("idUsuario", "==", idUsuario),...filters )
  
  
  }


// ---------------------------------------------

export async function adicionarEventosRelatorio(){

    const btnFiltroRelatorio = document.getElementById("btnFiltroRelatorio")

    btnFiltroRelatorio.addEventListener('click',async()=>{ await filtrarGaleria(); atualizarRelatorio() })





}

// ---------------------------------------------

async function atualizarRelatorio(){

    retornarReceitaTotal()
    retornarDespesaTotal()
    retornarSaldoTotal()

   




}


// ---------------------------------------------
  
function ordenarMeses(listaMeses) {
    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    // Crie um objeto de correspondência entre nomes de mês e números de mês
    const mesParaNumero = {};
    meses.forEach((mes, indice) => {
      mesParaNumero[mes] = indice;
    });
  
    // Classifique a lista de nomes de mês com base nos números de mês
    listaMeses.sort((a, b) => mesParaNumero[a] - mesParaNumero[b]);
  
    // Agora, 'listaMeses' contém os nomes dos meses em ordem cronológica
    return listaMeses;
  }


// ---------------------------------------------


  

  
  