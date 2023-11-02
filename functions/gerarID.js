




// =================================== FUNCOES =============================================== //


export function generateUID(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uid = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uid += characters.charAt(randomIndex);
  }

  return uid;
}

export function gerarId(){


  const idUsuario = localStorage.getItem('idUsuario')

  if( idUsuario==null ){ localStorage.setItem('idUsuario',generateUID(10)) }



}






  
  
  
  
  
  