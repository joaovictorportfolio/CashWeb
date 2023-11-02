

// =================================== COMPONENTES =============================================== //


class formcadastro extends HTMLElement {
    constructor() {
      super();

      // Atributos


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

  
  <form id="formCadastro" class="card-body bg-base-100 drop-shadow-md scale-[0.85] lg:max-w-[55%] max-w-md lg:scale-95 lg:mt-10 relative grid grid-cols-2 max-lg:grid-cols-1 border rounded-xl" >

  <loading-01 class="hidden z-10 objloading h-full w-full absolute top-0 left-0 bg-base-100 opacity-80  items-center justify-center animate__animated animate__zoomIn"></loading-01>

  <!-- Nome -->
  <div class="form-control w-full max-w-xs mx-auto">

    <label class="label">

      <span class="label-text">Nome</span>

    </label>

    <span>
      <input id="inputNome" type="text" placeholder="Nome da transação" required class="input input-bordered input-md w-full max-w-xs" />
    </span>

    <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

   <!-- Valor -->

   <div class="form-control w-full max-w-xs mx-auto">

    <label class="label">

      <span class="label-text">Valor</span>

    </label>

    <span>
      <input id="inputValor" type="number" min="1" step="0.1" placeholder="Valor da transação" required class="input input-bordered input-md w-full max-w-xs" />
    </span>
    
    <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

  <!-- Data -->
  <div class="form-control w-full max-w-xs mx-auto">

    <label class="label">

      <span class="label-text">Data</span>

    </label>

    <span>
      <input id="inputData" type="date" required class="input input-bordered input-md w-full max-w-xs" />
    </span>

    <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

  <!-- Tipo -->
  <div class="form-control w-full max-w-xs mx-auto">

    <label class="label">

      <span class="label-text">Tipo</span>

    </label>

    <span class="w-full">
      <select id="inputTipo" required class="select select-bordered w-full">
        <option value="" disabled selected>Selecione o tipo</option>
        <option value="Receita">Receita</option>
        <option value="Despesa">Despesa</option>
      </select>
    </span>

     <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

  <!-- Observação -->
  <div class="form-control w-full max-w-xs mx-auto">

    <label class="label">

      <span class="label-text">Observação</span>

    </label>

    <span class="w-full">
      <textarea id="inputObservacao" class="w-full textarea textarea-bordered resize-none" placeholder="Escreva aqui"></textarea>
    </span>

    <label class="label">

      <span class="label-text-alt spanMensagemInput"></span>

    </label>

  </div>

  <!-- Botao -->
  <div class="form-control mt-6 max-w-xs mx-auto w-full lg:flex lg:justify-center">

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

  



