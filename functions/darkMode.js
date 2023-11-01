




// =================================== FUNCOES =============================================== //


export function toggleDarkMode() {

  const localDark = localStorage.getItem("darkMode")

  const labCheckDark = document.getElementById('labCheckDark')

  const CheckBoxDark = labCheckDark.querySelector('input[type="checkbox"]')

  const iconSun = labCheckDark.querySelector('#iconSun')
  const iconMoon = labCheckDark.querySelector('#iconMoon')

  const htmlElemento = document.querySelector('html')

  // -------------------------------

  localDark ? null : localStorage.setItem("darkMode",'false')  

  iconMoon.classList.remove('swap-on')
  iconMoon.classList.remove('swap-off')
  iconSun.classList.remove('swap-on')
  iconSun.classList.remove('swap-off')

  if( localDark === null || 'false' ){

    iconMoon.classList.add('swap-off')
    iconMoon.classList.remove('swap-on')

    iconSun.classList.remove('swap-off')
    iconSun.classList.add('swap-on')

    htmlElemento.setAttribute('data-theme','mytheme') 
    
  }

  if( localDark ==='true' ){

    iconSun.classList.add('swap-off')
    iconSun.classList.remove('swap-on')

    iconMoon.classList.remove('swap-off')
    iconMoon.classList.add('swap-on')

    htmlElemento.setAttribute('data-theme','mythemedark') 

  }

    // -------------------------------

    CheckBoxDark.addEventListener('change',()=>{

      const localDark2 = localStorage.getItem("darkMode")

      if( localDark2 === 'true' ) { 
        localStorage.setItem("darkMode",'false')
        htmlElemento.setAttribute('data-theme','mytheme')   
      }
      if( localDark2 === 'false' ) { 
        localStorage.setItem("darkMode",'true')
        htmlElemento.setAttribute('data-theme','mythemedark')   
      } 


    })


}




  
  
  
  
  
  