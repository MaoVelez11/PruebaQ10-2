const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  
  testDir: './test', // Asegúrate de que apunte a la carpeta correcta
  
  timeout: 80000,    // Aumenta el tiempo de espera si es necesario
  retries: 0,
  reporter: 'list',
  use: {
    headless: false, // Ejecuta en modo headed para ver el navegador
    channel: 'chrome',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
