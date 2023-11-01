


// =================================== COMPONENTES =============================================== //


class logo01 extends HTMLElement {
    constructor() {
      super();

      // Atributos

      const urlImagem = this.getAttribute('urlImagem')


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

    <button class="btn btn-sm sm:btn-sm md:btn-md lg:btn-md btn-link normal-case text-xl"> 
      
      <img class="h-full" src="${urlImagem}" alt="">

    </button>

    


  <!-- Codigo -->
          
  
        `;


      // Metodos
    


      // -----------------------------------


  }}
  
  customElements.define("logo-01", logo01);

  // ------------------------------------------------------

  



