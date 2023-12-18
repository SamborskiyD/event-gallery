import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./testSetup.js'],
    pool: 'forks',
    coverage: {
      provider: 'v8',
      reporter: ['html'],
      enabled: true,
      exclude: [
        'configs/**', 
        'actions/**',
        '.next/**',
        'app/api/**',
        'components/AuthProvider.jsx',
        'app/{.js, .css}'
      ]
    }
  },
})