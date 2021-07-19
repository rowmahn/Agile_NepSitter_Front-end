const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

// Given("Test registration functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/register");
//   await driver.findElement(By.id("Fullname")).sendKeys("test");
//   await driver.findElement(By.id("Email")).sendKeys("dipak@gmail.com");
//   await driver.findElement(By.id("Password")).sendKeys("test1234");
//   await driver.findElement(By.id("Location")).sendKeys("test");
//   await driver.findElement(By.id("Age")).sendKeys("40");
//   await driver.findElement(By.id("Gender")).sendKeys("Male");
//   await driver.findElement(By.id("Contact")).sendKeys("1234567890");
//   await driver.findElement(By.id("Citizenship")).sendKeys("33333333333");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("registerBtn")).click();

//   await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
//   // await driver.quit();
// });
// Given("Test login functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/login");
//   await driver.findElement(By.id("Email")).sendKeys("dulalroman@gmail.com");
//   await driver.findElement(By.id("Password")).sendKeys("qwerty1");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();

//   await driver.wait(until.elementLocated(By.id("logout")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("logout"))));
//   // await driver.quit();
// });

// Given("Test registration functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/applyforjob");
//   await driver.findElement(By.id("fname")).sendKeys("test");
//   await driver.findElement(By.id("lname")).sendKeys("dipak");
//   await driver.findElement(By.id("bdate")).sendKeys("2011-02-12");
//   await driver.findElement(By.id("phone")).sendKeys("1234567890");
//   await driver.findElement(By.id("email")).sendKeys("Male@gmail.com");
//   await driver.findElement(By.id("password")).sendKeys("Male1234");
//   await driver.findElement(By.id("address")).sendKeys("hbjdsj");
//   await driver.findElement(By.id("city")).sendKeys("jhhjb");
//   await driver.findElement(By.id("district")).sendKeys("test");
//   await driver.findElement(By.id("yourself")).sendKeys("dipak");
//   await driver.findElement(By.id("certificate")).sendKeys("hbjhbf");
//   await driver.findElement(By.id("gender")).sendKeys("Male");
//   await driver.findElement(By.id("province")).sendKeys("Province 1");
//   await driver.findElement(By.id("study")).sendKeys("Yes");
//   await driver.findElement(By.id("status")).sendKeys("Married");
//   await driver.findElement(By.id("smoke")).sendKeys("No");

//   await driver.findElement(By.id("drink")).sendKeys("Yes");
//   await driver.findElement(By.id("jobcategory")).sendKeys("Nanny");
//   await driver.findElement(By.id("availabilityMorning")).sendKeys("Wednesday");
//   await driver.findElement(By.id("availabilityAfternoon")).sendKeys("Tuesday");
//   await driver.findElement(By.id("availabilityEvening")).sendKeys("Monday");
//   await driver.findElement(By.id("availabilityNight")).sendKeys("Sunday");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("registerBtn")).click();


//   await driver.wait(until.elementLocated(By.id("logout")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("logout"))));
//   // await driver.quit();
// });

Given("Test Hire Worker functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/hireworker/60e736d56f782c17ef6dbfd5");
  await driver.findElement(By.id("location")).sendKeys("test");
  await driver.findElement(By.id("day")).sendKeys("Monday");
  
  await driver.findElement(By.id("exampleFormControlSelect1")).sendKeys("2 hr");
  await driver.findElement(By.id("package")).sendKeys("HOURLY");
  await driver.findElement(By.id("date")).sendKeys("12/12/2011");
  await driver.sleep(delay);
  await driver.findElement(By.id("registerBtn")).click();


  await driver.wait(until.elementLocated(By.id("logout")), 30000);
   expect(await driver.wait(until.elementLocated(By.id("logout"))));
//   // await driver.quit();
});

// Given("Test Booking Cancellation functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/hireworker");

//   await driver.findElement(By.id("registerBtn")).click();


//   await driver.wait(until.elementLocated(By.id("logout")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("logout"))));
//   // await driver.quit();
// });