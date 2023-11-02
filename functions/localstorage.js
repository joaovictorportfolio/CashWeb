




// =================================== FUNCOES =============================================== //


export function mostrarDadosLocais(){


  for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    const valor = localStorage.getItem(chave);
    console.log(`Chave: ${chave}, Valor: ${valor}`);
}


}






  
  
  
  
  
  