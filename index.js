




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
import * as componentesHistorico from './components/Historico.js'

// =================================== FUNCOES =============================================== //


import * as funcoesSkeleton from './functions/skeleton.js'
import * as funcoesDarkMode from './functions/darkMode.js'
import * as funcoesNavegacaoAbas from './functions/navegacaoAbas.js'
import * as funcoesGerarID from './functions/gerarID.js'
import * as funcoesdadosLocais from './functions/localstorage.js'
import * as funcoesHistorico from './functions/historico.js'



// =================================== EXECUTAR =============================================== //


//localStorage.clear()

// -- Adicionar skeleton as tags -- //


funcoesSkeleton.adicionarSkeleton(" p, h1, h2, h3, h4, h5, a, span , label, button")


// -- DarkMode -- //


funcoesDarkMode.toggleDarkMode()


// -- gerar id -- //


funcoesGerarID.gerarId()


// -- Localstorage -- //

funcoesdadosLocais.mostrarDadosLocais()


// -- Navegacao aba -- //

funcoesNavegacaoAbas.paginaLocalStorage()

funcoesNavegacaoAbas.eventosTabNavegacao()


// -- adicionar eventos historico -- //

funcoesHistorico.adicionarEventos()


//funcoesHistorico.inserirDadosAleatoriosTransacoes(1)




  
  

  

  



















  