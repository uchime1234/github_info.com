/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
   primary: 'rgb(0, 243, 0)',
   prime: ' rgb(14, 230, 14)',
      },

      spacing: {
     'left-mid' : '50%',
      },

      screens:{
        phones: "466px",
       meds: "671px",
       medss: "690px",
       legs: "795px",
       desktop: "1230px",
       desktopx: "1330px",
       Max640: {max: '640'}, 

      },

      height: {
        small: "1.5em",
        big: "45px",
        issues: "641px",
        longing: "500px",
        adjust: "510px"
      },

      width: {
        small: "1.5em",
        big: "45px",
        settle: "420px",
        increase: "480px",
        increasing: "520px",
        devs: "210px",
        devsop: "310px",
        devsopo: "350px",
        hundread: "100%",
        eighty: "80%"
      },

   fontSize: {
    minor: "1.43em",
    meduim: "1.56em",
    bigg: "2em",
   },

   borderRadius: {
   round: "5px"
   },


    },
  },
  plugins: [],
}

