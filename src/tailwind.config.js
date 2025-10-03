module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trust and agricultural heritage foundation
        primary: {
          DEFAULT: "#2E7D32", // green-800
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#388E3C", // green-700
          800: "#2E7D32", // green-800
          900: "#1B5E20", // green-900
        },
        // Secondary Colors - Innovation and fresh growth energy
        secondary: {
          DEFAULT: "#4CAF50", // green-500
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#388E3C", // green-700
          800: "#2E7D32", // green-800
          900: "#1B5E20", // green-900
        },
        // Accent Colors - Harvest celebration and warm encouragement
        accent: {
          DEFAULT: "#FF9800", // orange-500
          50: "#FFF3E0", // orange-50
          100: "#FFE0B2", // orange-100
          200: "#FFCC80", // orange-200
          300: "#FFB74D", // orange-300
          400: "#FFA726", // orange-400
          500: "#FF9800", // orange-500
          600: "#FB8C00", // orange-600
          700: "#F57C00", // orange-700
          800: "#EF6C00", // orange-800
          900: "#E65100", // orange-900
        },
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#1B1B1B", // gray-900
          secondary: "#666666", // gray-600
        },
        // Status Colors
        success: "#4CAF50", // green-500
        warning: "#FF9800", // orange-500
        error: "#D32F2F", // red-700
        // Border Colors
        border: {
          DEFAULT: "#E0E0E0", // gray-300
          light: "#F5F5F5", // gray-100
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'hover': '0 6px 16px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'grow': 'grow 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        grow: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.05)',
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}