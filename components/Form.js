

// =================================== COMPONENTES =============================================== //


class formcadastro extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  
  <form id="formCadastro" class="card-body bg-base-100 drop-shadow-md scale-[0.90] max-w-sm lg:scale-95 lg:mt-10 relative">

  <!-- Loading -->
  <div class="h-full w-[90%] bg-base-100 opacity-80 hidden items-center justify-center absolute top-0">
    <div class="flex flex-col items-center gap-4">
    <span class="loading loading-spinner text-primary"></span>
    <p class="font-semibold text-primary text-base">Carregando</p>
    </div>
  </div>

  <!-- Nome -->
  <div class="form-control w-full max-w-sm">

    <label class="label">

      <span class="label-text">Nome</span>

    </label>

    <input type="text" placeholder="Nome da transação" required class="input input-bordered input-md w-full max-w-xs" />

    <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

   <!-- Valor -->

   <div class="form-control w-full max-w-sm">

    <label class="label">

      <span class="label-text">Valor</span>

    </label>

    <input type="number" min="1" step="1" placeholder="Valor da transação" required class="input input-bordered input-md w-full max-w-xs" />

    <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

  <!-- Data -->
  <div class="form-control w-full max-w-xs">

    <label class="label">

      <span class="label-text">Data</span>

    </label>

    <input type="date" required class="input input-bordered input-md w-full max-w-xs" />

    <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

  <!-- Tipo -->
  <div class="form-control w-full max-w-xs">

    <label class="label">

      <span class="label-text">Tipo</span>

    </label>

    <select required class="select select-bordered">
      <option value="" disabled selected>Selecione o tipo</option>
      <option value="Receita">Receita</option>
      <option value="Despesa">Despesa</option>
    </select>

     <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

  <!-- Botao -->
  <div class="form-control mt-6 max-w-xs">

    <button class="btn btn-primary ">Cadastrar</button>

  </div>

</form>



  <!-- Codigo -->
          
  
        `;


      // Metodos
    
      

      // -----------------------------------


  }}
  
  customElements.define("form-cadastro", formcadastro);

  // ------------------------------------------------------

  



