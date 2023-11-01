/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ["./components/**/*.{html,js}",'./index.html'],

  theme: {

    extend: {},

  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#fbbf24",
                
        "secondary": "#fde047",
                
        "accent": "#34d399",
                
        "neutral": "#292524",
                
        "base-100": "#ffff",
                
        "info": "#4da9ea",
                
        "success": "#1abca1",
                
        "warning": "#fde047",
                
        "error": "#ef4444",
        },

        mythemedark: {
          
          "primary": "#fbbf24",
                    
          "secondary": "#fde047",
                    
          "accent": "#34d399",
                    
          "neutral": "#e7e5e4",
                    
          "base-100": "#1f2937",
                    
          "info": "#4da9ea",
                    
          "success": "#1abca1",
                    
          "warning": "#fde047",
                    
          "error": "#ef4444",

          },
      },
    ],
  }

}

