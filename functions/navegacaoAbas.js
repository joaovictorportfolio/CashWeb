
import * as funcoesCadastro from './cadastro.js'
import * as funcoesHistorico from './historico.js'
import * as funcoesRelatorio from './relatorio.js'



// =================================== FUNCOES =============================================== //


export async function alterarAba(nomeAba){

  //console.log('alterarAba: '+nomeAba)


  const section01 = document.getElementById('section01')
  const section02 = document.getElementById('section02')
  const section03 = document.getElementById('section03')

  const listaSection = [section01,section02,section03]

  //console.log(listaSection)

  switch (nomeAba) {

    case 'Histórico':

      listaSection.forEach((section)=>{ 
        
        if( section.id !== 'section01' ){ 

          section.classList.add('hidden');
          section.classList.remove('flex') 
        
        }
        
        else{ 

          section.classList.remove('hidden');
          section.classList.add('flex') 

            
        } 
      
      });

      funcoesHistorico.iniciarSecaoHistorico()
      
      break;

    case 'Cadastrar':

    listaSection.forEach((section)=>{ 
        
      if( section.id !== 'section02' ){ 

        section.classList.add('hidden');
        section.classList.remove('flex') 
      
      }
      
      else{ 

        section.classList.remove('hidden');
        section.classList.add('flex') 
          
      }  

      
    
    })

    funcoesCadastro.IniciarCadastro()
    
      break;

    case 'Relatório':

    listaSection.forEach((section)=>{ 
        
      if( section.id !== 'section03' ){ 

        section.classList.add('hidden');
        section.classList.remove('flex') 
      
      }
      
      else{ 

        section.classList.remove('hidden');
        section.classList.add('flex') 
          
      } 
    
    })

      funcoesRelatorio.iniciarRelatorio()
    
      break;
   
    default:
      break;
  }


 }



 export function eventosTabNavegacao(){

  const tabHeader = document.getElementById('tabHeader')

  const tabHeaderItems = tabHeader.querySelectorAll('a')

  const tabMobile = document.getElementById('tabMobileNavegacao')

  const tabMobileItens = tabMobile.querySelectorAll('button')

  tabHeaderItems.forEach((tabHeaderItem)=>{ 
    
    tabHeaderItem.addEventListener('click',()=>{ ativarTab( tabHeaderItem.textContent )})


    })


  tabMobileItens.forEach((tabMobileItem)=>{ 
    
    tabMobileItem.addEventListener('click',()=>{

      const tabMobileItemSpan = tabMobileItem.querySelector('span')

      ativarTab( tabMobileItemSpan.textContent )


    })




    })


 }

 

 export function ativarTab(nometab){

  const tabHeader = document.getElementById('tabHeader')

  const tabHeaderItems = tabHeader.querySelectorAll('a')

  const tabMobile = document.getElementById('tabMobileNavegacao')

  const tabMobileItens = tabMobile.querySelectorAll('button')



  tabHeaderItems.forEach((tabHeaderItem)=>{  
    
    tabHeaderItem.classList.remove('tab-active') 

    if(tabHeaderItem.textContent==nometab){

      tabHeaderItem.classList.add('tab-active')

    }
  
  })

  tabMobileItens.forEach((tabMobileItem)=>{ 
    
    const tabMobileItemSpan = tabMobileItem.querySelector('span')

    tabMobileItem.classList.remove('text-primary') 

    if(tabMobileItemSpan.textContent==nometab){

    

    tabMobileItem.classList.add('text-primary')
  
  }

  

})


localStorage.setItem('paginaAtual',nometab)

alterarAba(nometab)

//console.log('ativarTab: '+nometab)


 }


 export async function paginaLocalStorage(){

  const paginaAtual =  localStorage.getItem('paginaAtual')


  if( paginaAtual == null ){ 
  
      
      localStorage.setItem('paginaAtual','Histórico') ; 
      
      ativarTab('Histórico')
  
  }
  else{  ativarTab(paginaAtual) ;  }


 }
  
  
  
  
  