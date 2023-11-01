




// =================================== FUNCOES =============================================== //


export function alterarAba(nomeAba){

  //console.log(nomeAba)


  const section01 = document.getElementById('section01')
  const section02 = document.getElementById('section02')
  const section03 = document.getElementById('section03')

  const listaSection = [section01,section02,section03]

  //console.log(listaSection)

  switch (nomeAba) {

    case 'Histórico':

      listaSection.forEach((section)=>{ 
        
        if( section.id !== 'section01' ){ 

          section.classList.add('hidden');
          section.classList.remove('flex') 
        
        }
        
        else{ 

          section.classList.remove('hidden');
          section.classList.add('flex') 

            
        } 
      
      })
      
      break;

    case 'Cadastrar':

    listaSection.forEach((section)=>{ 
        
      if( section.id !== 'section02' ){ 

        section.classList.add('hidden');
        section.classList.remove('flex') 
      
      }
      
      else{ 

        section.classList.remove('hidden');
        section.classList.add('flex') 
          
      }  
    
    })
    
      break;

    case 'Relatório':

    listaSection.forEach((section)=>{ 
        
      if( section.id !== 'section03' ){ 

        section.classList.add('hidden');
        section.classList.remove('flex') 
      
      }
      
      else{ 

        section.classList.remove('hidden');
        section.classList.add('flex') 
          
      } 
    
    })
    
      break;
   
    default:
      break;
  }


 }


  
  
  
  
  
  