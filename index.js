




// =================================== COMPONENTES =============================================== //

import * as componentesHeader from './components/Header.js'
import * as componentesLogo from './components/Logo.js'
import * as componentesTabs from './components/Tabs.js'
import * as componentesSwap from './components/Swap.js'
import * as componentesMenuMobile from './components/MenuMobile.js'
import * as componentesSections from './components/Sections.js'
import * as componentesForm from './components/Form.js'
import * as componentesLoading from './components/Loading.js'
import * as componentesAlerts from './components/Alerts.js'

// =================================== FUNCOES =============================================== //


import * as funcoesSkeleton from './functions/skeleton.js'
import * as funcoesDarkMode from './functions/darkMode.js'
import * as funcoesNavegacaoAbas from './functions/navegacaoAbas.js'


// =================================== EXECUTAR =============================================== //

// -- Adicionar skeleton as tags -- //


funcoesSkeleton.adicionarSkeleton(" p, h1, h2, h3, h4, h5, a, span , label, button")


// -- DarkMode -- //


funcoesDarkMode.toggleDarkMode()


// -- Localstorage -- //


for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    const valor = localStorage.getItem(chave);
    console.log(`Chave: ${chave}, Valor: ${valor}`);
}


//localStorage.clear()


// -- Navegacao aba -- //

const paginaAtual =  localStorage.getItem('paginaAtual')

//console.log(paginaAtual)

if( paginaAtual == null ){ 

    
    localStorage.setItem('paginaAtual','Histórico') ; 
    
    funcoesNavegacaoAbas.ativarTab('Histórico')

}
else{  funcoesNavegacaoAbas.ativarTab(paginaAtual) ;  }


funcoesNavegacaoAbas.eventosTabNavegacao()




  

  



















  