


// =================================== COMPONENTES =============================================== //


class modaledit extends HTMLElement {
    constructor() {
      super();

      // Atributos

      


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

    
  <!-- Modal editar -->

  <div id="modalEditTransacao" class="fixed top-0 left-0 h-screen w-screen hidden items-center justify-center bg-neutral/40 z-[1]">

  <alert-01></alert-01>

    <form>
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <form-edit class="w-full animate__animated animate__fadeInUp"></form-edit>


  </div>
    


  <!-- Codigo -->
          
  
        `;


      // Metodos

    


      // -----------------------------------


  }}
  
  customElements.define("modal-edit", modaledit);

  // ------------------------------------------------------


  class formedit extends HTMLElement {
    constructor() {
      super();

      // Atributos

      


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

    
  <form id="formEditTransacao" class="w-full py-10 bg-base-100 drop-shadow-md scale-[0.85] lg:max-w-[55%] max-w-md lg:scale-95 lg:mt-10 relative grid grid-cols-2 max-lg:grid-cols-1 border rounded-xl mx-auto">

  <button id="btnFecharModalEdit" class="absolute z-10 top-2 right-2 btn btn-sm btn-circle btn-ghost ">✕</button>

  <!-- Loading -->
  <div class="h-full w-full bg-base-100 opacity-80 hidden items-center justify-center absolute top-0 objloadingedit z-[1]">
    <div class="flex flex-col items-center gap-4">
    <span class="loading loading-spinner text-primary"></span>
    <p class="font-semibold text-primary text-base ">Carregando</p>
    </div>
  </div>

    <!-- Nome -->
    <div class="form-control w-full max-w-xs mx-auto">

      <label class="label">

        <span class="label-text">Nome</span>

      </label>

      <input required name="nome" id="inputNomeEdit" type="text" placeholder="Nome da transação" class="input input-bordered input-md w-full max-w-xs" />

      <label class="label">

        <span class="label-text-alt spanMensagemInput"></span>

      </label>

    </div>

    <!-- Valor -->

    <div class="form-control w-full max-w-xs mx-auto">

      <label class="label">

        <span class="label-text">Valor</span>

      </label>

      <input required name="valor" id="inputValorEdit" type="number" min="1" step="0.01" placeholder="Valor da transação" class="input input-bordered input-md w-full max-w-xs" />

      <label class="label">

        <span class="label-text-alt spanMensagemInput"></span>

      </label>

    </div>

    <!-- Data -->
    <div class="form-control w-full max-w-xs mx-auto">

      <label class="label">

        <span class="label-text">Data</span>

      </label>

      <input required name="data" id="inputDataEdit" type="date" class="input input-bordered input-md w-full max-w-xs" />

      <label class="label">

        <span class="label-text-alt spanMensagemInput"></span>

      </label>

    </div>

    <!-- Tipo -->
    <div class="form-control w-full max-w-xs mx-auto">

      <label class="label">

        <span class="label-text">Tipo</span>

      </label>

      <select required name="tipo" id="inputTipoEdit" class="select select-bordered">
        <option disabled selected value="">Selecione o tipo</option>
        <option>Receita</option>
        <option>Despesa</option>
      </select>

      <label class="label">

        <span class="label-text-alt spanMensagemInput"></span>

      </label>

    </div>


    <!-- Observação -->
    <div class="form-control w-full max-w-xs mx-auto">

      <label class="label">

        <span class="label-text">Observação</span>

      </label>

      <textarea id="inputObsEdit" class="textarea textarea-bordered resize-none" placeholder="Bio"></textarea>

      <label class="label">

        <span class="label-text-alt spanMensagemInput"></span>

      </label>

    </div>

    <!-- Botao -->
    <div class="form-control mt-6 max-w-xs mx-auto w-full">

      <button class="btn btn-primary lg:translate-y-10">Salvar</button>

    </div>

</form>


    


  <!-- Codigo -->
          
  
        `;


      // Metodos

      const modalEditTransacao = document.getElementById('modalEditTransacao')
      const btnFecharModalEdit = document.getElementById('btnFecharModalEdit')

      btnFecharModalEdit.addEventListener('click',()=>{ 
        modalEditTransacao.classList.add('hidden')
      modalEditTransacao.classList.remove('flex')
       })

    


      // -----------------------------------


  }}
  
  customElements.define("form-edit", formedit);

  // ------------------------------------------------------

  



