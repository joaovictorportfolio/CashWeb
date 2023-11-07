
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
    grafico01()




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

async function grafico01(){

const querySnapshot = await getDocs(consulta);

const transacoes = [];

querySnapshot.forEach((doc) => {

  const data = doc.data();

  transacoes.push(data);

});


const dadosPorMes = {};

transacoes.forEach((transacao) => {
  const mes = transacao.mes.slice(0, 3);
  const valor = parseFloat(transacao.valor);
  const tipo = transacao.tipo;

  if (!dadosPorMes[mes]) {
    dadosPorMes[mes] = { Receita: 0, Despesa: 0 };
  }

  if (tipo === "Receita") {
    dadosPorMes[mes].Receita += valor;
  } else if (tipo === "Despesa") {
    dadosPorMes[mes].Despesa += valor;
  }
});

// Agora você tem um mapeamento de cada mês para os valores de "Receita" e "Despesa"
console.log(dadosPorMes);

const ordemMeses = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];



const meses = Object.keys(dadosPorMes);

// Ordene os meses de acordo com a ordem definida
meses.sort((a, b) => ordemMeses.indexOf(a) - ordemMeses.indexOf(b));

const receitas = meses.map((mes) => dadosPorMes[mes].Receita.toFixed(2));
const despesas = meses.map((mes) => dadosPorMes[mes].Despesa.toFixed(2));

console.log(receitas);

console.log(despesas);

console.log(meses)






  var options = {
    
    chart: {
        height: "100%",
        width: "100%",
        type: "line",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -26
        },
      },
      series: [
        {
          name: "Receita",
          data: receitas,
          color: "#36d399",
        },
        {
          name: "Despesa",
          data: despesas,
          color: "#f37b7b",
        },
      ],
      legend: {
        show: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: meses,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal text-base-100 '
          }
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();






}


  

  
  