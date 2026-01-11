const { defineConfig } = require('vite');

module.exports = defineConfig({
  root: 'app',
  base: './',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
