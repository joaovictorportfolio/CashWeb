


// =================================== COMPONENTES =============================================== //


class loading01 extends HTMLElement {
    constructor() {
      super();

      // Atributos

      const texto = this.getAttribute('texto') || 'Carregando'


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

   



    <div class="flex flex-col items-center gap-4">

    <span class="loading loading-spinner text-primary"></span>

    <p class="font-semibold text-primary text-base animate-pulse">${texto}...</p>

    </div>




  <!-- Codigo -->
          
  
        `;


      // Metodos
    


      // -----------------------------------


  }}
  
  customElements.define("loading-01", loading01);

  // ------------------------------------------------------

  



