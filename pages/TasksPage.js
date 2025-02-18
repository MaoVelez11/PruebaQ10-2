class TasksPage {
  constructor(page) {
    this.page = page;

    // Selectores
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
    this.radioButton = (name) => `input[type="radio"][name="radio"][value="${name}"]`;
    this.checkbox = (name) => `input[type="checkbox"][name="checkbox"][value="${name}"]`;
    this.dateInput = 'input[name="date"]'; // Selector corregido
    this.numberInput = 'input[name="number"]';
    this.submitButton = 'button[type="submit"]';
    this.retakeButton = 'a:has-text("Retomar Prueba")';
    this.codeMirrorEditor = '.CodeMirror';
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.clickButtonByValue = (name) => `button[type="button"][name="button_option"][onclick="button_click(this)"][class="grid_button"][value="${name}"]`;
    this.numberInput2 = 'input[name="modal_answer"]';
  }

  async navigate() {
    await this.page.goto('https://tasks.evalartapp.com/automatization/');
  }

  async login(username, password) {
    await this.page.click(this.usernameInput);
    await this.page.fill(this.usernameInput, username);
    await this.page.click(this.passwordInput);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async completeFirstSection() {
    await this.page.check(this.radioButton('9175'));
    
    await this.page.check(this.checkbox('126'));
    
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-01-14';
    });
    
    await this.page.fill(this.numberInput, '19');
   
    await this.page.click(this.submitButton);
    
  }

  async completeSecondSection() {
    
    await this.page.check(this.radioButton('1263331048'));
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-06-15';
    });
    await this.page.check(this.checkbox('160'));
    await this.page.check(this.checkbox('84'));
    await this.page.check(this.checkbox('164'));
    await this.page.fill(this.numberInput, '12');
    await this.page.click(this.submitButton);
  }

  async completeThirdSection() {
    await this.page.check(this.radioButton('-46374028'));
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-04-26';
    });
    await this.page.check(this.checkbox('32'));
    await this.page.check(this.checkbox('40'));
    await this.page.check(this.checkbox('160'));
    await this.page.fill(this.numberInput, '9');
    await this.page.click(this.submitButton);
  }

  async completeFourthSection() {
    await this.page.check(this.radioButton('2280649')); // Completar con el valor correcto
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2024-11-08'; // Fecha correcta
    });
    await this.page.check(this.checkbox('117')); 
    await this.page.check(this.checkbox('12'));
    await this.page.check(this.checkbox('126'));
    await this.page.check(this.checkbox('21'));
    await this.page.check(this.checkbox('81'));
    await this.page.check(this.checkbox('159'));
    await this.page.check(this.checkbox('153'));// Completar
    await this.page.fill(this.numberInput, '17'); // Completar
    
    await this.page.click(this.submitButton);
   
  }

  async completeFifthSection() {
    
    await this.page.check(this.radioButton('273'));
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-05-04';
    });
    await this.page.check(this.checkbox('153'));
    await this.page.check(this.checkbox('180'));
    await this.page.check(this.checkbox('198'));
    await this.page.check(this.checkbox('117'));
    await this.page.fill(this.numberInput, '12');
    await this.page.click(this.submitButton);
   
  }

  async completeSixthSection() {
    await this.page.check(this.radioButton('356111594'));
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-05-03';
    });
    await this.page.check(this.checkbox('172'));
    await this.page.check(this.checkbox('32'));
    await this.page.check(this.checkbox('28'));
    await this.page.check(this.checkbox('72'));
    await this.page.fill(this.numberInput, '19');
    await this.page.click(this.submitButton);
    
  }

  async completeSeventhSection() {
    await this.page.check(this.radioButton('65974'));
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-01-13';
    });
    await this.page.check(this.checkbox('100'));
    await this.page.check(this.checkbox('74'));
    await this.page.check(this.checkbox('178'));
    await this.page.check(this.checkbox('164'));
    await this.page.check(this.checkbox('126'));
    await this.page.check(this.checkbox('42'));
    await this.page.check(this.checkbox('152'));
    await this.page.check(this.checkbox('146'));
    await this.page.check(this.checkbox('192'));
    await this.page.check(this.checkbox('30'));
    await this.page.check(this.checkbox('56'));
    await this.page.check(this.checkbox('122'));
    await this.page.check(this.checkbox('116'));
    await this.page.fill(this.numberInput, '17');
    await this.page.click(this.submitButton);
    
  }

  async completeEighthSection() {
    await this.page.check(this.radioButton('11376'));
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-06-05';
    });
    await this.page.check(this.checkbox('77'));
    await this.page.check(this.checkbox('105'));
    await this.page.check(this.checkbox('161'));
    await this.page.fill(this.numberInput, '9');
    await this.page.click(this.submitButton);
    
  }

  async completeNinthSection() {
    await this.page.check(this.radioButton('3133731'));
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-05-23';
    });
    await this.page.check(this.checkbox('145'));
    await this.page.check(this.checkbox('165'));
    await this.page.check(this.checkbox('30'));
    await this.page.fill(this.numberInput, '16');
    await this.page.click(this.submitButton);
    
  }

  async completeTenthSection() {
    await this.page.check(this.radioButton('-1316745518'));
    await this.page.evaluate(() => {
      document.querySelector('input[name="date"]').value = '2025-03-23';
    });
    await this.page.check(this.checkbox('32'));
    await this.page.check(this.checkbox('34'));
    await this.page.check(this.checkbox('24'));
    await this.page.check(this.checkbox('20'));
    await this.page.check(this.checkbox('88'));
    await this.page.check(this.checkbox('148'));
    await this.page.check(this.checkbox('132'));
    await this.page.fill(this.numberInput, '9');
    await this.page.click(this.submitButton);
    await this.page.waitForTimeout(2000);
  }
  async validation(){
   // Navegar a una nueva página
   await this.page.goto('https://questionnaire.evalart.com/cuestionario/recover/w_SLASH_IwEAQJvZaUYIuI0k1Rr66GMYVQRNoKYJfdcGQtmls_EQUALS_');
   await this.page.waitForTimeout(2000);
   await this.page.click(this.retakeButton);
   await this.page.waitForTimeout(2000);
await this.page.goto('https://tasks.evalartapp.com/automatization/');
}

async loginT(username, password) {
  await this.page.click(this.usernameInput);
  await this.page.fill(this.usernameInput, username);
  await this.page.click(this.passwordInput);
  await this.page.fill(this.passwordInput, password);
  await this.page.click(this.loginButton);
  
}
async loginT() {
  await this.page.goto('https://tasks.evalartapp.com/automatization/');
}

async loginT(username, password) {
  await this.page.fill('input[name="username"]', username);
  await this.page.fill('input[name="password"]', password);
  await this.page.click('button[type="submit"]');
  
}
async clickButtonAtCoordinates(coordinates) {
  await this.page.click(this.clickButtonByValue('49'));
  await this.page.fill(this.numberInput2, '1214');
  await this.page.click('button[type="submit"]');
}
async clickButtonAtCoordinates2(coordinates) {
  await this.page.click(this.clickButtonByValue('94'));
  await this.page.fill(this.numberInput2, '1240');
  await this.page.click('button[type="submit"]');
}
async clickButtonAtCoordinates3(coordinates) {
  await this.page.click(this.clickButtonByValue('174'));
  await this.page.fill(this.numberInput2, '977');
  await this.page.click('button[type="submit"]');
}
async clickButtonAtCoordinates4(coordinates) {
  await this.page.click(this.clickButtonByValue('36'));
  await this.page.fill(this.numberInput2, '1244');
  await this.page.click('button[type="submit"]');
}
async clickButtonAtCoordinates5(coordinates) {
  await this.page.click(this.clickButtonByValue('165'));
  await this.page.fill(this.numberInput2, '1335');
  await this.page.click('button[type="submit"]');
}
async clickButtonAtCoordinates6(coordinates) {
  await this.page.click(this.clickButtonByValue('91'));
  await this.page.fill(this.numberInput2, '1406');
  await this.page.click('button[type="submit"]');
}
async clickButtonAtCoordinates7(coordinates) {
  await this.page.click(this.clickButtonByValue('97'));
  await this.page.fill(this.numberInput2, '1484');
  await this.page.click('button[type="submit"]');
}
async clickButtonAtCoordinates8(coordinates) {
  await this.page.click(this.clickButtonByValue('192'));
  await this.page.fill(this.numberInput2, '1025');
  await this.page.click('button[type="submit"]');
}async clickButtonAtCoordinates9(coordinates) {
  await this.page.click(this.clickButtonByValue('103'));
  await this.page.fill(this.numberInput2, '1106');
  await this.page.click('button[type="submit"]');
}async clickButtonAtCoordinates10(coordinates) {
  await this.page.click(this.clickButtonByValue('119'));
  await this.page.fill(this.numberInput2, '1055');
  await this.page.click('button[type="submit"]');
}async clickButtonAtCoordinates11(coordinates) {
  await this.page.click(this.clickButtonByValue('5'));
  await this.page.fill(this.numberInput2, '1352');
  await this.page.click('button[type="submit"]');
}async clickButtonAtCoordinates12(coordinates) {
  await this.page.click(this.clickButtonByValue('172'));
  await this.page.waitForTimeout(2000);
  await this.page.fill(this.numberInput2, '1632');
  await this.page.click('button[type="submit"]');
  await this.page.waitForTimeout(2000);
}
async validation2(){
  // Navegar a una nueva página
  await this.page.goto('https://questionnaire.evalart.com/cuestionario/execute/');
  await this.page.waitForTimeout(5000);
}

}
module.exports = TasksPage;
