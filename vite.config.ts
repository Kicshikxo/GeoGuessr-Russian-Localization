import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      input: {
        main: 'src/main.ts',
        inject: 'src/inject.ts',
      },
      output: {
        format: 'es',
        entryFileNames: 'js/[name].js',
        inlineDynamicImports: false,
      },
    },
  },
})
