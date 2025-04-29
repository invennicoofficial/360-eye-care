/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from 360eyecare.ca - blue theme
        brand: {
          blue: "#28305F", // Main brand blue
          darkBlue: "#034D76", // Darker blue used in headers
          lightBlue: "#A7D5F1", // Light blue accent
          line: "#1F2655", // Combination color
          btn: "#204060",
          subheader: "#204066",
        },
        // Improved color palette
        primary: {
          100: "#E6F3FA",
          200: "#C0E1F2",
          300: "#80C9F0",
          400: "#40AEE9",
          500: "#007CC3", // Main blue from website
          600: "#034D76", // Darker blue from website
          700: "#023A5A",
          800: "#01283F",
          900: "#001523",
        },
        secondary: {
          100: "#E6F9FF",
          200: "#C0EEFB",
          300: "#A7D5F1", // Light blue accent from website
          400: "#77C5F0",
          500: "#49B4EC",
          600: "#2596CB",
          700: "#176D9A",
          800: "#0B4968",
          900: "#052437",
        },
        neutral: {
          100: "#FFFFFF", // Site uses pure white backgrounds
          200: "#F5F8FA", // Light gray background
          300: "#EAEEF2",
          400: "#F6F7F5",
          500: "#888888",
          600: "#667085",
          700: "#4A5568", // Text color
          800: "#1F2937", // Dark text
          900: "#101828", // Very dark text/headers
        },
        accent: {
          100: "#FEF4EA",
          200: "#FCE7CE",
          300: "#F5BE86",
          400: "#F09E45", // Orange accent from site
          500: "#E67E22", // Darker orange
          600: "#C25E0A",
          700: "#9A4705",
          800: "#733403",
          900: "#4D2201",
        },
        combination: {
          100: "#40BCC8",
          200: "#204060",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Primary font observed on site
        heading: ["Montserrat", "Roboto", "sans-serif"], // Used for headings
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.16" }], // Based on large headers on site
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)", // For service cards as seen on site
        button: "0 4px 10px rgba(0, 124, 195, 0.3)", // Blue shadow for buttons
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
        128: "32rem",
      },
      height: {
        hero: "600px", // Hero section height
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
