module.exports = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx}", 
    "./src/components/**/*.{html,js,ts,jsx,tsx}"],
  
    theme: {
    extend: { padding: { "fluid-video": "56.25%" } },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#389ccb",
          "secondary": "#dc3d91",
          "accent": "#ffcc29",
          "neutral": "#191D24",
          "base-100": "#f3f4f6",
          "info": "#00a859",
          "success": "#36D399",
          "warning": "#f58634",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}








