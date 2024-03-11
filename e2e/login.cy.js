describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click('');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Кнопка-забыли пароль', function () {
        cy.visit('https://login.qa.studio/');          
        cy.get('#forgotEmailButton').click('');            //Нажать «Забыли пароль»
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Присутствует надпись "Восстановите пароль"
        cy.get('#mailForgot').type('iLoveqagerman@dolnikovv.ru');  // Ввести любой имейл
        cy.get('#restoreEmailButton').click('');//Нажать «Отправить код»
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Присутствует надпись "Успешно отправили пароль на e-mail"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть кнопка крестика
})
    it('Правильный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');       
        cy.get('#mail').type('german@dolnikov.ru');  //Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio11');// Ввести НЕ правильный пароль
        cy.get('#loginButton').click('');// Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  //Присутствует надпись "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //есть кнопка крестика
}) 
it('НЕ равильный логин и правильный пароль', function () {
    cy.visit('https://login.qa.studio/');       
    cy.get('#mail').type('german@dolnikovv.ru');  //Ввести не правильный логин
    cy.get('#pass').type('iLoveqastudio1');// Ввести правильный пароль
    cy.get('#loginButton').click('');// Нажать войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');  //Присутствует надпись "Такого логина или пароля нет"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //есть кнопка крестика
}) 
it('Проверка логина на валидацию', function () {
    cy.visit('https://login.qa.studio/');       
    cy.get('#mail').type('germandolnikovv.ru');  //Ввести логин без @
    cy.get('#pass').type('iLoveqastudio1');// Ввести правильный пароль
    cy.get('#loginButton').click('');// Нажать войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  //Присутствует надпись "Нужно исправить проблему валидации"
}) 
it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');       
    cy.get('#mail').type('GerMan@Dolnikov.ru');  //Ввести логин GerMan@Dolnikov.ru
    cy.get('#pass').type('iLoveqastudio1');// Ввести правильный пароль
    cy.get('#loginButton').click('');// Нажать войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно');  //Авторизация прошла успешно"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})   
})   



//Ввести логин GerMan@Dolnikov.ru
// Ввести правильный пароль
//Нажать войти
//Проверить, что авторизация успешна (нужный текст и наличие кнопки крестик)
//Разработчик допустил баг и это не реализовал. Тест должен упасть — и это ок (то есть мы поймали баг, который допустил разработчик)



