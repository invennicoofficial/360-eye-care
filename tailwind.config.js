/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#28305F",
          darkBlue: "#034D76",
          lightBlue: "#A7D5F1",
          line: "#1F2655",
          btn: "#204060",
          subheader: "#204066",
        },
        primary: {
          100: "#E6F3FA",
          200: "#C0E1F2",
          300: "#80C9F0",
          400: "#40AEE9",
          500: "#007CC3",
          600: "#034D76",
          700: "#023A5A",
          800: "#01283F",
          900: "#001523",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          100: "#E6F9FF",
          200: "#C0EEFB",
          300: "#A7D5F1",
          400: "#77C5F0",
          500: "#49B4EC",
          600: "#2596CB",
          700: "#176D9A",
          800: "#0B4968",
          900: "#052437",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F5F8FA",
          300: "#EAEEF2",
          400: "#F6F7F5",
          500: "#888888",
          600: "#667085",
          700: "#4A5568",
          800: "#1F2937",
          900: "#101828",
        },
        accent: {
          100: "#FEF4EA",
          200: "#FCE7CE",
          300: "#F5BE86",
          400: "#F09E45",
          500: "#E67E22",
          600: "#C25E0A",
          700: "#9A4705",
          800: "#733403",
          900: "#4D2201",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        combination: {
          100: "#40BCC8",
          200: "#204060",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        heading: ["Montserrat", "Roboto", "sans-serif"],
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "1.16",
          },
        ],
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        button: "0 4px 10px rgba(0, 124, 195, 0.3)",
      },
      borderRadius: {
        none: "0",
        sm: "calc(var(--radius) - 4px)",
        DEFAULT: "0.25rem",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
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
        hero: "600px",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "pop-and-return": "popAndReturn 10s ease-in-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
  ],
};
