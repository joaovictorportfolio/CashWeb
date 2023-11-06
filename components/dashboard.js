


// =================================== COMPONENTES =============================================== //


class containerdashboard extends HTMLElement {
    constructor() {
      super();

      // Atributos

     


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <!-- Container Pai -->
  <div class="flex flex-col max-w-4xl w-full max-lg:mt-14 px-4 gap-10 mb-32">

      <filtro-dashboard></filtro-dashboard>

      <container-header></container-header>

      <container-Graficos></container-Graficos>

  </div>

    


  <!-- Codigo -->
          
  
        `;


      // Metodos



      // -----------------------------------


  }}
  
  customElements.define("container-dashboard", containerdashboard);

  // ------------------------------------------------------

  class containerheader extends HTMLElement {
    constructor() {
      super();

      // Atributos

     


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <!-- Container header -->
  <div class="flex max-lg:flex-col gap-8 items-center justify-around w-full ">

      <card-saldo></card-saldo>
  
      <card-receita></card-receita>

      <card-despesa></card-despesa>

  

  </div>

    


  <!-- Codigo -->
          
  
        `;


      // Metodos



      // -----------------------------------


  }}
  
  customElements.define("container-header", containerheader);

  // ------------------------------------------------------

  class filtrodashboard extends HTMLElement {
    constructor() {
      super();

      // Atributos

     


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <button title="filtro" class="btn btn-square hover:btn-secondary hover:text-white fixed right-4 bottom-24" onclick="my_modal_5.showModal()">
    
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">

    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>

  </button>

  <!-- Modal filtro pai -->
  <dialog id="my_modal_5" class="modal">

      <!-- Modal Filtro filho -->
    <div class="modal-box">

        <!-- btn fechar -->
      <form method="dialog">

        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

      </form>

        <!-- titulo -->
      <h3 class="font-bold text-lg mb-4">Filtro</h3>

        <!-- container pai opcoes -->
      <div>

          <!-- data -->
        <div>

          <label class="text-xs font-semibold opacity-60">Data</label>

          <div class="flex items-center justify-center gap-2 mt-2">
          
            <select id="selectMes2" class="select select-bordered select-xs w-full max-w-xs">
              <option disabled selected value="">Mês</option>
             
            </select>

            <select id="selectAno2" class="select select-bordered select-xs w-full max-w-xs">
              <option disabled selected value="">Ano</option>
             
            </select>

          </div>
          
        </div>

       
        
      </div>

      <!-- container btn filtrar -->
      <div class="w-full flex items-center justify-center mt-10 mb-4">

      <button id="btnFiltroRelatorio" class="btn btn-primary btn-wide">Filtrar</button>

      </div>

    </div>

  </dialog>

    


  <!-- Codigo -->
          
  
        `;


      // Metodos


      // -----------------------------------


  }}
  
  customElements.define("filtro-dashboard", filtrodashboard);

  // ------------------------------------------------------


  class cardreceita extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <div class="stats shadow flex max-lg:flex-col  cardRelatorio">

    <div class="stat place-items-center space-y-1">

      <div class="stat-title font-normal">Receita Total</div>

      <div id="valorReceitaTotal" class="stat-value text-accent text-2xl lg:text-4xl"></div>


    </div>
    


  </div>
    


  <!-- Codigo -->
          
  
        `;


      // Metodos



      // -----------------------------------


  }}
  
  customElements.define("card-receita", cardreceita);

  // ------------------------------------------------------


  class carddespesa extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <div class="stats shadow flex max-lg:flex-col  cardRelatorio">

    <div class="stat place-items-center space-y-1">

      <div class="stat-title font-normal">Despesa Total</div>

      <div id="valorDespesaTotal" class="stat-value text-error/70 text-2xl lg:text-4xl"></div>


    </div>
    


  </div>
    


  <!-- Codigo -->
          
  
        `;


      // Metodos



      // -----------------------------------


  }}
  
  customElements.define("card-despesa", carddespesa);

  // ------------------------------------------------------


  class cardsaldo extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <div class="stats shadow flex max-lg:flex-col  cardRelatorio">

    <div class="stat place-items-center space-y-1">

      <div class="stat-title font-normal">Saldo Total</div>

      <div id="valorSaldoTotal" class="stat-value  text-2xl lg:text-4xl"></div>


    </div>
    


  </div>
    


  <!-- Codigo -->
          
  
        `;


      // Metodos



      // -----------------------------------


  }}
  
  customElements.define("card-saldo", cardsaldo);

  // ------------------------------------------------------


  class containergraficos extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <div class=" flex flex-col gap-6 ">
    
      

  </div>
    


  <!-- Codigo -->
          
  
        `;


      // Metodos



      // -----------------------------------


  }}
  
  customElements.define("container-graficos", containergraficos);

  // ------------------------------------------------------




  



