require("dotenv").config();
import {Builder, By, Key, until, WebElement} from "selenium-webdriver";
import { orbxLimiter } from "./limiter";

// - options: firefox, chrome, other browsers?? 

// Selenium driver build.
export async function automateRndr(browser: string, numberToUpload?: number): Promise<void> {
    
    const orbxFiles = orbxLimiter(process.cwd());
    
    // grab user config from .env 
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    console.log(email, password);

// build driver
    let driver = await new Builder()
        .forBrowser(`${browser}`)
        .build();  

    console.log("starting up RNDR automation...");
// TRYCATCH RNDR DRIVER
    try {
    // get rndr website
    driver.wait(() => {
        return driver.get("https://rndr.otoy.com");
    }, 20 * 1000);

// find login
    const emailField: WebElement = await driver
        .findElement(By.id("session_email"));

    const passwordField = await driver
        .findElement(By.id("session_password"));
    
    const loginButton = await driver
        .findElement(By.name("commit"));

// input user login
    console.log("filling in user info...");
    await emailField.sendKeys(`${email}`);
    await passwordField.sendKeys(`${password}`);
    await loginButton.click();


// start upload

// finish ONLY after files are done loading
    driver.quit();
    console.log("finished uploading");      
    }
    catch (e) {
        console.log(e);
    }   
}
