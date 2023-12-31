

// =================================== COMPONENTES =============================================== //


class section01 extends HTMLElement {
    constructor() {
      super();

      // Atributos



      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <section id="section01" class="lg:h-screen pt-10 lg:pt-24  bg-base-100 flex items-start justify-center animate__animated animate__fadeIn animate__slow ">

      <alert-01></alert-01>

      <container-pai class="animate__animated animate__fadeInRight"></container-pai>

      <galeria-vazia></galeria-vazia>

      <div id="carregandoGaleria" class="bg-base-100 h-screen w-full fixed hidden flex-col items-center justify-center top-0 left-0 z-[1]">

        <span class="loading loading-spinner text-primary"></span>

      </div>

      <modal-edit ></modal-edit>
      
      
  </section>


  <!-- Codigo -->
          
  
        `;


      // Metodos
    


      // -----------------------------------


  }}
  
  customElements.define("section-01", section01);

  // ------------------------------------------------------

  class section02 extends HTMLElement {
    constructor() {
      super();

      // Atributos



      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <section id="section02" class="h-screen pt-10  bg-base-100 flex items-center max-lg:items-start justify-center animate__animated animate__fadeIn animate__slow">

   <alert-01></alert-01>

    <form-cadastro class="w-full flex items-center justify-center animate__animated animate__fadeInRight"></form-cadastro>
  
  
  </section>


  <!-- Codigo -->
          
  
        `;


      // Metodos
    


      // -----------------------------------


  }}
  
  customElements.define("section-02", section02);

  // ------------------------------------------------------

  class section03 extends HTMLElement {
    constructor() {
      super();

      // Atributos



      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

    <section id="section03" class="lg:h-screen pt-10 lg:pt-24  bg-base-100 flex items-start justify-center animate__animated animate__fadeIn animate__slow">

    <div id="loadingRelatorio" class="fixed bg-base-100 h-screen w-full z-[1] flex items-center justify-center">
    <span class="loading loading-spinner text-primary"></span>
    </div>

    <relatorio-vazio></relatorio-vazio>
    
      <container-dashboard></container-dashboard>
    
    
    
    </section>


  <!-- Codigo -->
          
  
        `;


      // Metodos
    


      // -----------------------------------


  }}
  
  customElements.define("section-03", section03);

  // ------------------------------------------------------


  class galeriavazia extends HTMLElement {
    constructor() {
      super();

      // Atributos



      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <div id="galeriaVazia" class="hidden flex-col h-full w-full bg-base-100 items-center justify-center text-base absolute top-0 left-0">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>

    Galeria vazia

    <p id="atualizar" class="text-xs text-neutral underline cursor-pointer hover:no-underline mt-2 hidden">Clique aqui para atualizar</p>


  </div>

  
  <!-- Codigo -->
          
  
        `;


      // Metodos
    


      // -----------------------------------


  }}
  
  customElements.define("galeria-vazia", galeriavazia);

  // ------------------------------------------------------

  class relatoriovazio extends HTMLElement {
    constructor() {
      super();

      // Atributos



      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <div id="relatoriovazio" class="hidden flex-col h-screen w-full bg-base-100 items-center justify-center text-base absolute top-0 left-0 z-[2]">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>

    Relatório vazio


  </div>

  
  <!-- Codigo -->
          
  
        `;


      // Metodos
    


      // -----------------------------------


  }}
  
  customElements.define("relatorio-vazio", relatoriovazio);

  // ------------------------------------------------------

  



