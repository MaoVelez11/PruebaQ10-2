const { test, expect } = require('@playwright/test');
const TasksPage = require('../pages/TasksPage'); // Importa la clase TasksPage

test.describe('Automatización de tareas en Evalart', () => {
  let tasksPage;

  test.beforeEach(async ({ page }) => {
    tasksPage = new TasksPage(page); // Inicializa la clase TasksPage
    await tasksPage.navigate(); // Navega a la página
  });

  test('Completar todas las secciones de tareas', async () => {
    // Credenciales de usuario
    
    const USERNAME = '1005399';
    const PASSWORD = '10df2f32286b7120Mi00LTk5MzUwMDE=30e0c83e6c29f1c3';
    const username = '1005399';
    const password = '10df2f32286b7120My0zLTk5MzUwMDE=30e0c83e6c29f1c3';
    const coordinates = [
      [13,6], [-6,2], [6,2], [-7,-4], [-6,2]
    ];
    // Iniciar sesión
    await tasksPage.login(USERNAME, PASSWORD);

    // Completar las 10 secciones
    await tasksPage.completeFirstSection();
    await tasksPage.completeSecondSection();
    await tasksPage.completeThirdSection();
    await tasksPage.completeFourthSection();
    await tasksPage.completeFifthSection();
    await tasksPage.completeSixthSection();
    await tasksPage.completeSeventhSection();
    await tasksPage.completeEighthSection();
    await tasksPage.completeNinthSection();
    await tasksPage.completeTenthSection();

    //validar prueba correcta
    await tasksPage.validation();

    //iniciar sesión segunda prueba 
    await tasksPage.loginT(username, password);

    // Completar la sección de la matriz de botones
    await tasksPage.clickButtonAtCoordinates(coordinates);
    await tasksPage.clickButtonAtCoordinates2(coordinates);
    await tasksPage.clickButtonAtCoordinates3(coordinates);
    await tasksPage.clickButtonAtCoordinates4(coordinates);
    await tasksPage.clickButtonAtCoordinates5(coordinates);
    await tasksPage.clickButtonAtCoordinates6(coordinates);
    await tasksPage.clickButtonAtCoordinates7(coordinates);
    await tasksPage.clickButtonAtCoordinates8(coordinates);
    await tasksPage.clickButtonAtCoordinates9(coordinates);
    await tasksPage.clickButtonAtCoordinates10(coordinates);
    await tasksPage.clickButtonAtCoordinates11(coordinates);
    await tasksPage.clickButtonAtCoordinates12(coordinates);

    //validar prueba correcta #2
    await tasksPage.validation2();
  });
});
