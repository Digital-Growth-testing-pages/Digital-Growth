import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00f0ff',
        neonMagenta: '#ff2a6d',
        neonLime: '#39ff14',
        panelBg: '#1a1e24',
        panelBorder: '#2a2e36',
      },
    },
  },
  plugins: [],
}
export default config;