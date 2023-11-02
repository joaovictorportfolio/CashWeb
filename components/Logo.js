


// =================================== COMPONENTES =============================================== //


class logo01 extends HTMLElement {
    constructor() {
      super();

      // Atributos

      const urlImagem = this.getAttribute('urlImagem')


      // -----------------------------------

  
      this.innerHTML = `

    
  <!-- Codigo -->

    <button class="btn btn-sm sm:btn-sm md:btn-md lg:btn-md btn-link normal-case text-xl relative"> 

    <dotlottie-player 

      id="animacaoLogo"

      src="https://lottie.host/3c8dae07-5c7c-4897-bb07-938685c6f550/5t2XsBd5Rg.json" 
      background="transparent" 
      speed="3" 
      direction="1" 
      mode="normal" 
      loop 
      autoplay 
      
      class="absolute left-0 w-20 z-20 hidden ">

    </dotlottie-player>
      
      <img class="h-full" src="${urlImagem}" alt="">

    </button>

    


  <!-- Codigo -->
          
  
        `;


      // Metodos

      const btn = this.querySelector('button')

      const animacao = this.querySelector('#animacaoLogo')

      btn.addEventListener('click',()=>{

        animacao.classList.remove('hidden')

        setTimeout(()=>{ animacao.classList.add('hidden') },3000)



      })
    


      // -----------------------------------


  }}
  
  customElements.define("logo-01", logo01);

  // ------------------------------------------------------

  



