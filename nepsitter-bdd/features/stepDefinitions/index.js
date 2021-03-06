const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

// Given("Test registration functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/register");
//   await driver.findElement(By.id("Fullname")).sendKeys("cyco");
//   await driver.findElement(By.id("Email")).sendKeys("path123@gmail.com");
//   await driver.findElement(By.id("Password")).sendKeys("path123");
//   await driver.findElement(By.id("Location")).sendKeys("path");
//   await driver.findElement(By.id("Age")).sendKeys("12");
//   await driver.findElement(By.id("Gender")).sendKeys("Female");
//   await driver.findElement(By.id("Contact")).sendKeys("1111111111");
//   await driver.findElement(By.id("Citizenship")).sendKeys("1111111111");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("registerBtn")).click();

//   await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
// });




Given("Test Employerlogin functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/login");
  await driver.findElement(By.id("Email")).sendKeys("wwww@gmail.com");
  await driver.findElement(By.id("Password")).sendKeys("wwwwww");
  await driver.sleep(delay);
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("employerdashboard")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("employerdashboard"))));
  // await driver.quit();
});


Given("Test Workerlogin functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/workerlogin");
  await driver.findElement(By.id("email")).sendKeys("path123@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("path123");
  await driver.sleep(delay);
  await driver.findElement(By.id("workerloginbtn")).click();
  await driver.sleep(delay);
  await driver.wait(until.elementLocated(By.id("workerdashboard")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("workerdashboard"))));
  // await driver.quit();
});



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

// Given("Test Hire Worker functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/hireworker/60e736d56f782c17ef6dbfd5");
//   await driver.findElement(By.id("location")).sendKeys("test");
//   await driver.findElement(By.id("day")).sendKeys("Monday");
  
//   await driver.findElement(By.id("exampleFormControlSelect1")).sendKeys("2 hr");
//   await driver.findElement(By.id("package")).sendKeys("HOURLY");
//   await driver.findElement(By.id("date")).sendKeys("12/12/2011");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("registerBtn")).click();


//   await driver.wait(until.elementLocated(By.id("logout")), 30000);
//    expect(await driver.wait(until.elementLocated(By.id("logout"))));
// //   // await driver.quit();
// });

// Given("Test Booking Cancellation functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/hireworker");

//   await driver.findElement(By.id("registerBtn")).click();


//   await driver.wait(until.elementLocated(By.id("logout")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("logout"))));
//   // await driver.quit();
// });