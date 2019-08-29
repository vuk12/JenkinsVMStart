import { browser } from "protractor";
import { Given,When, Then } from "cucumber";
import chai from "chai";
import{jenkinsHome, pageJenkins} from "../pageObjects/pageJenkins"
import * as fs from "fs";

var expect = chai.expect;
let objJenkins = new pageJenkins();

  Given('I will navigate to {string} page', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    if (string == "Jenkins") 
    {
      await browser.get(jenkinsHome);
      await browser.sleep(3000);

    }
  });


  When('I login into jenkins', async ()=> {
    await objJenkins.userID.sendKeys("admin");
    await objJenkins.password.sendKeys("admin");
    await browser.sleep(3000);
    await objJenkins.loginBtn.click();
    await browser.sleep(5000);
  });


  When('I will start machine with id from file {string}', async (string)=> {
    await objJenkins.autoStartInstance.click();
    await browser.sleep(5000);
    await objJenkins.buildWithParametarsStart.click();
    await browser.sleep(5000);

    // putanja do fajla (npr kod mene)
    let strSampleTextFile:string = await string
    // citanje file-a i smestanje u string varijablu (u async funkciji)
    let strReading:string = await fs.readFileSync(strSampleTextFile).toString();

    await browser.actions().mouseMove(objJenkins.idOfVMEditBox).click().sendKeys(strReading).perform();
    await browser.sleep(5000);
    //await objJenkins.buildBtn.click();
    //await browser.sleep(1000);
  });


  Then('After {int} seconds job will return Succes', async (int)=> {

    await browser.sleep(int*500);
    let num = await objJenkins.buildHistory.count();
    let str1 = "";
    if(num>=1)
    {
      str1 = await objJenkins.buildHistory.get(0).getAttribute("title");
      await browser.sleep(3000);
      await console.log(str1)
    }
    let boolTestValue:Boolean = await str1.includes("Success")
    
    await expect(boolTestValue).to.equal(true);

  });