
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

  import { 

    getFirestore ,
    collection, 
    addDoc
  
  
  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBcFj2qtIGz4dHaGPqgt9EUjl48ykscrrM",
    authDomain: "cashweb-b21a4.firebaseapp.com",
    projectId: "cashweb-b21a4",
    storageBucket: "cashweb-b21a4.appspot.com",
    messagingSenderId: "879580421181",
    appId: "1:879580421181:web:d0e43e51af0a46231a1e54"
  };


  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);


// =================================== FUNCOES =============================================== //


export async function cadastrarRegistro(nomeCol,obj){

  const col = collection(db, `${nomeCol}`)

  try{

    const docRef = await addDoc(col, obj);

    return true

  }

  catch(error){

    return error

  }


}
  
  
  
  
  
  