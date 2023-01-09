/** @type {import('tailwindcss').Config} */

function withOpacity(color) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${color}), ${opacityValue})`
    }
    return `rgb(var(${color}))`
  }
}

module.exports = {
  content: [
    `./pages/**/*.{js,ts,jsx,tsx}`,
    `./components/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: `var(--color-text-base)`,
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity(`--color-fill`),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity(`--color-fill`),
        },
      },
    },
  },
  plugins: [],
}
