


// =================================== COMPONENTES =============================================== //


class containerpai extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

   
  <div class="flex flex-col max-w-4xl w-full max-lg:mt-14 px-4 gap-10 mb-28">

      <container-pesquisa></container-pesquisa>

      <container-galeria></container-galeria>

      <span id="spinnerLoadingGaleria" class="text-primary mx-auto mb-0 cursor-pointer hover:scale-105">Clique aqui para ver mais</span>


  </div>
    


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("container-pai", containerpai);

  // ------------------------------------------------------


  class containerpesquisa extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

   
  <div class="flex gap-2 items-center justify-center w-full">

      <campo-pesquisa class="w-full"></campo-pesquisa>

      <botao-pesquisa></botao-pesquisa>

      <botao-filtro></botao-filtro>

      <modal-filtro></modal-filtro>


  </div>
    


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("container-pesquisa", containerpesquisa);

  // ------------------------------------------------------

  
  class containergaleria extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

   
  <div class="flex flex-col gap-6">

      <galeria-trasacoes></galeria-trasacoes>

      


  </div>
    


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("container-galeria", containergaleria);

  // ------------------------------------------------------



  class campopesquisa extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->


  <!-- Campo Pesquisa -->
  <div class="w-full relative">


     <input id="inputPesquisar" type="text" placeholder="Pesquisar" class="input input-bordered input-md w-full " />


    <ul id="listaInputPesquisa" class="absolute bg-base-100 w-full z-10 hidden border rounded-b-md">

      
     
    </ul>

  </div>


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("campo-pesquisa", campopesquisa);

  // ------------------------------------------------------

  class botaopesquisar extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->


  <!-- btn Pesquisa -->
  <button id="btnPesquisarNome" class="btn btn-square hover:btn-primary hover:text-white">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  </button>


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("botao-pesquisa", botaopesquisar);

  // ------------------------------------------------------

  class botaofiltro extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->


  <!-- btn filtro -->
  <button class="btn btn-square hover:btn-secondary hover:text-white" onclick="my_modal_3.showModal()">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
  </button>


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("botao-filtro", botaofiltro);

  // ------------------------------------------------------


  class modalfiltro extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->


  <dialog id="my_modal_3" class="modal">

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
       
         <select id="selectMes" class="select select-bordered select-xs w-full max-w-xs">
         
         </select>

         <select id="selectAno" class="select select-bordered select-xs w-full max-w-xs">
          
         </select>

       </div>
       
     </div>

     <!-- tipo -->
     <div class="mt-4">

       <label class="text-xs font-semibold opacity-60">Tipo</label>
       
         <div id="tipoFiltro" class="tabs tabs-boxed mt-2 flex items-center justify-between ">
           <a class="tab tab-active">Todas</a> 
           <a class="tab">Receita</a> 
           <a class="tab">Despesa</a>
         </div>
       
     </div>

   </div>

   <!-- container btn filtrar -->

    <div class="w-full flex items-center justify-center mt-10 mb-4">

    <form method="dialog">
      <button  id="btnFiltro" class="btn btn-primary btn-wide">Filtrar</button>
    <form>

    </div>

 </div>

</dialog>


  <!-- Codigo -->
          
  
        `;


      // Metodos

      const tipoFiltro = this.querySelector('#tipoFiltro')

      const tabs = tipoFiltro.querySelectorAll('a')

      tabs.forEach((tab)=>{

        tab.addEventListener('click',()=>{

          tabs.forEach((tab2)=>{ tab2.classList.remove('tab-active') })

          tab.classList.add("tab-active")

        })


      })

    


      // -----------------------------------


  }}
  
  customElements.define("modal-filtro", modalfiltro);

  // ------------------------------------------------------

  
  class galeriatrasacoes extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <div id="galeriaTransacoes" class=" flex flex-col gap-6 ">

      
      
   

  </div>

    


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("galeria-trasacoes", galeriatrasacoes);

  // ------------------------------------------------------


  class cardgaleria extends HTMLElement {
    constructor() {
      super();

      // Atributos

      const id = this.getAttribute('id')
      const nome = this.getAttribute('nome')
      const data = this.getAttribute('data')
      const tipo = this.getAttribute('tipo')
      const corTipo = this.getAttribute('corTipo') 
      const valor = this.getAttribute('valor')
      const observacao = this.getAttribute('observacao') || 'Sem observação'

      let corTipo2
      let textoTipo2

      if( corTipo == 'accent' ){ corTipo2 = 'fundoSuccess' }else{ corTipo2 = 'fundoError' }

      if( corTipo == 'accent' ){ textoTipo2 = 'textoSuccess' }else{ textoTipo2 = 'textoError' }


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  <!-- Card -->

  <div class=" lg:min-w-[780px] card bg-base-100 hover:drop-shadow-xl border cardGaleria w-full hover:scale-105 ">


    <div class="card-body space-y-2 w-full ">

      <div class=" absolute right-3 top-3"><span class="badge ${corTipo2} text-white lg:text-base text-xs">${tipo}</span></div>
        
        <h2 class="card-title lg:text-lg text-base w-full">${nome}</h2>

          <div>
            <label class="text-xs font-semibold opacity-60">Data</label>
            <p class="font-medium opacity-80 lg:text-base text-sm w-full">${data}</p>
          </div>


        <div class="block">
        
          <label class="text-xs font-semibold opacity-60">Observação</label>

          <button class="text-start group block">
          <h3 class="lg:text-sm text-sm line-clamp-2 group-focus:line-clamp-none">
          ${observacao}
          </h3>
          </button>

        </div>

        <div class="flex items-center justify-between">

           <div>
            <label class="text-xs font-semibold opacity-60">Valor</label>
            <p class="font-medium ${textoTipo2} lg:text-base text-base">R$ ${valor}</font></p>
          </div>

          <div class="card-actions justify-end flex gap-6 pt-2">

            <span>
            <div class="tooltip tooltip-info cursor-pointer hover:scale-105 group iconEditCard" data-tip="Editar">

              <svg class="w-6 h-6 group-hover:text-info" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>

            </div>
            </span>

            <span>
            <div class="tooltip tooltip-error cursor-pointer hover:scale-105 group" data-tip="Excluir" onclick="my_modal_${id}.showModal()">
              <svg class="w-6 h-6 group-hover:text-error" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
            </span>

            <!-- Modal excluir transacao pai -->
          <dialog id="my_modal_${id}" class="modal">

            <!-- Modal excluir transacao filho -->
            <div class="modal-box">

              <!-- btn fechar -->
              <form method="dialog">

                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

              </form>

              <div class="card-body items-center text-center space-y-3">
                <h2 class="card-title text-error ">Excluir Transação</h2>
                <p class="text-sm w-full">Deseja realmente excluir essa transação?</p>
                <div class="card-actions justify-end space-x-4">
                <form method="dialog">
                  <button class="btn btn-error excluirTransacao">Excluir</button>
                </form>
                  <form method="dialog">
                    <button class="btn btn-ghost">Voltar</button>
                  </form>
                </div>
              </div>

              

            </div>

          </dialog>

          


          </div>

        </div>



        

        

      </div>


      </div>

 

    


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("card-galeria", cardgaleria);

  // ------------------------------------------------------


