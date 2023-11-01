

import * as funcoesNavegacaoAbas from '../functions/navegacaoAbas.js'

// =================================== COMPONENTES =============================================== //


class tabs01 extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <div id="tabHeader" class="tabs tabs-boxed hidden lg:flex font-semibold">

    <a class="tab tab-active">Histórico</a> 

    <a class="tab">Cadastrar</a> 

    <a class="tab">Relatório</a>

  </div>


  <!-- Codigo -->
          
  
        `;


      // Metodos

      const items = this.querySelectorAll('a')



      items.forEach((item)=>{ 
        
        item.addEventListener('click',()=>{

          items.forEach((item)=>{  item.classList.remove('tab-active') })

          item.classList.add('tab-active')

          funcoesNavegacaoAbas.alterarAba( item.textContent )


        })




       })


    


      // -----------------------------------


  }}
  
  customElements.define("tabs-01", tabs01);

  // ------------------------------------------------------

  



