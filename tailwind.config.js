/** @type {import('tailwindcss').Config} */
export default {
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#EAECF5",
            100: "#D3D6E3",
            200: "#B8BDD1",
            300: "#9EA5C0",
            400: "#838DAF",
            500: "#6B76A0",
            600: "#536090",
            700: "#3B4A81",
            800: "#2B3760",
            900: "#1D2540",
            DEFAULT: "#3B4A81" // ค่า default ของ primary
          },
          secondary: {
            50: "#F0EBF5",
            100: "#DED1E8",
            200: "#C5B9CE",
            300: "#ADA2B5",
            400: "#938B9A",
            500: "#7D7582",
            600: "#65606A",
            700: "#504B54",
            800: "#3B373E",
            900: "#28252A",
            DEFAULT: "#DED1E8" // ค่า default ของ secondary
          }
        }
      }
    }
  };