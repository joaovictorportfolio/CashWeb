


// =================================== FUNCOES =============================================== //


export function adicionarSkeleton(tags) {

  document.querySelectorAll(tags).forEach(element => {

    element.classList.add("skeleton2");

  })

  window.addEventListener('load', () => {

    document.querySelectorAll('.skeleton2').forEach(element => {
      element.classList.remove('skeleton2');

    });

  });

}


