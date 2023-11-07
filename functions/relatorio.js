
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

const relatoriovazio = document.getElementById("relatoriovazio")

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

    loadingRelatorio.classList.remove('hidden')
    loadingRelatorio.classList.add('flex')
  
  
  }


// ---------------------------------------------

export async function adicionarEventosRelatorio(){

    const btnFiltroRelatorio = document.getElementById("btnFiltroRelatorio")

    btnFiltroRelatorio.addEventListener('click',async()=>{ filtrarGaleria(); atualizarRelatorio() })





}

// ---------------------------------------------

async function atualizarRelatorio(){

  const q = query(col, where("idUsuario", "==", idUsuario));
  
  const querySnapshot = await getDocs(q);

  const totalRegistros = querySnapshot.size

  if( totalRegistros > 0 ){


    retornarReceitaTotal()
    retornarDespesaTotal()
    retornarSaldoTotal()
    grafico01()
    grafico02()
    grafico03()

    

    relatoriovazio.classList.add('hidden')
    relatoriovazio.classList.remove('flex')
}else{
  relatoriovazio.classList.remove('hidden')
  relatoriovazio.classList.add('flex')

}

loadingRelatorio.classList.add('hidden')
loadingRelatorio.classList.remove('flex')
    



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

let chartRenderizado = false; 
let chart

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


//console.log(dadosPorMes);

const ordemMeses = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];



const meses = Object.keys(dadosPorMes);

// Ordene os meses de acordo com a ordem definida
meses.sort((a, b) => ordemMeses.indexOf(a) - ordemMeses.indexOf(b));

const receitas = meses.map((mes) => dadosPorMes[mes].Receita.toFixed(2));
const despesas = meses.map((mes) => dadosPorMes[mes].Despesa.toFixed(2));

//console.log(receitas);

//console.log(despesas);

//console.log(meses)

  var options = {
    
    chart: {
        height: "300px",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      title: {
        text: 'Receita x despesa',
        style: {
          fontSize:  '18px',
          fontWeight:  'bold',
          color:  '#c9c9c9'
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
        },
        y:{
          formatter: function (value) {
            return "R$" + value.toFixed(2);
          }
        }
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
          left: 20,
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
            cssClass: 'text-xs font-normal text-base-100'
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

   // Verifica se o gráfico já foi renderizado
   if (chartRenderizado) {
    // Atualiza as opções se o gráfico já foi renderizado
    chart.updateOptions(options);
  } else {
    // Cria uma nova instância do gráfico e marca como renderizado
    chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    chartRenderizado = true; // Marque o gráfico como renderizado
  }






}


// ---------------------------------------------

let chartRenderizado2 = false; 
let chart2

async function grafico02(){

  const querySnapshot = await getDocs(consulta);
  
  const despesasTotais  = {};
  
  querySnapshot.forEach((doc) => {
  
    const dados = doc.data()

      if( dados.tipo == 'Despesa' ){ 
        
        const despesa = dados.nome; 
        const valor = parseFloat(dados.valor);

        if (!despesasTotais[despesa]) {
          despesasTotais[despesa] = 0;
        }
    
        despesasTotais[despesa] += valor;
      
      }
  
  
  });

  // Ordenar as despesas com base no total
  const despesasOrdenadas = Object.entries(despesasTotais)
    .sort(([, a], [, b]) => b - a) // Ordenar em ordem decrescente
    .slice(0, 10) // Pegar as 10 despesas mais altas
  
  const listadespesas = despesasOrdenadas.map(([despesa, total]) => `${despesa}`);
  
  //console.log(listadespesas)
  
  
  
  var options = {
    series: [{
    data: despesasOrdenadas.map(([, total]) => total),
    color:'#f37b7b'
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (value) {
      return "R$ " + value.toFixed(2);
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: true,
    },
    z: {
      formatter: undefined,
      title: 'Size: '
  },
    y: {
      formatter: function (value) {
        return "R$" + value.toFixed(2);
      },

    },
  },
  title: {
    text: 'Top 10 despesas',
    style: {
      fontSize:  '18px',
      fontWeight:  'bold',
      color:  '#c9c9c9'
    },
  },
  xaxis: {
    categories: listadespesas,
    
  },
 
  }



  // Verifica se o gráfico já foi renderizado
  if (chartRenderizado2) {
    // Atualiza as opções se o gráfico já foi renderizado
    chart2.updateOptions(options);
  } else {
    // Cria uma nova instância do gráfico e marca como renderizado
    chart2 = new ApexCharts(document.querySelector("#chart2"), options);
    chart2.render();
    chartRenderizado2 = true; // Marque o gráfico como renderizado
  }
  
  
  
  
  
  
  }


// ---------------------------------------------

let chartRenderizado3 = false; 
let chart3

async function grafico03(){

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

  const ordemMeses = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];

  const meses = Object.keys(dadosPorMes);

  // Ordene os meses de acordo com a ordem definida
  meses.sort((a, b) => ordemMeses.indexOf(a) - ordemMeses.indexOf(b));

  const saldos = meses.map((mes) => (dadosPorMes[mes].Receita - dadosPorMes[mes].Despesa).toFixed(2));

  
  
  
  var options = {
    
    chart: {
        height: "300px",
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
      title: {
        text: 'Saldo mensal',
        style: {
          fontSize:  '18px',
          fontWeight:  'bold',
          color:  '#c9c9c9'
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
        },
        y: {
          formatter: function (value) {
            return "R$ " + value.toFixed(2);
          }
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (value) {
          return "R$" + value.toFixed(2);
        }
        
      },
      stroke: {
        width: 6,
        
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 20,
          right: 2,
          top: -26
        },
      },
      series: [
        
        {
          name: "Saldo",
          data: saldos,
          color: "#36d399",
        },
      ],
      legend: {
        show: false
      },
      stroke: {
        curve: 'stepline',
      },
      xaxis: {
        categories: meses,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal text-base-100'
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

      annotations: {
        yaxis: [
          {
            y: 0, // Valor zero
            borderColor: '#FF0000', // Cor vermelha
            label: {
              borderColor: '#FF0000', // Cor da label
              style: {
                color: '#fff' // Cor do texto
              },
            }
          }
        ]
      }
  
  };


  // Verifica se o gráfico já foi renderizado
  if (chartRenderizado3) {
    // Atualiza as opções se o gráfico já foi renderizado
    chart3.updateOptions(options);
  } else {
    // Cria uma nova instância do gráfico e marca como renderizado
    chart3 = new ApexCharts(document.querySelector("#chart3"), options);
    chart3.render();
    chartRenderizado3 = true; // Marque o gráfico como renderizado
  }
  
  
  
  
  
  
  }

  

  
  