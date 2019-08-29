"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
const chai_1 = __importDefault(require("chai"));
const pageJenkins_1 = require("../pageObjects/pageJenkins");
const fs = __importStar(require("fs"));
var expect = chai_1.default.expect;
let objJenkins = new pageJenkins_1.pageJenkins();
cucumber_1.Given('I will navigate to {string} page', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "Jenkins") {
        yield protractor_1.browser.get(pageJenkins_1.jenkinsHome);
        yield protractor_1.browser.sleep(3000);
    }
}));
cucumber_1.When('I login into jenkins', () => __awaiter(this, void 0, void 0, function* () {
    yield objJenkins.userID.sendKeys("admin");
    yield objJenkins.password.sendKeys("admin");
    yield protractor_1.browser.sleep(3000);
    yield objJenkins.loginBtn.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('I will start machine with id from file {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield objJenkins.autoStartInstance.click();
    yield protractor_1.browser.sleep(5000);
    yield objJenkins.buildWithParametarsStart.click();
    yield protractor_1.browser.sleep(5000);
    // putanja do fajla (npr kod mene)
    let strSampleTextFile = yield string;
    // citanje file-a i smestanje u string varijablu (u async funkciji)
    let strReading = yield fs.readFileSync(strSampleTextFile).toString();
    yield protractor_1.browser.actions().mouseMove(objJenkins.idOfVMEditBox).click().sendKeys(strReading).perform();
    yield protractor_1.browser.sleep(5000);
    //await objJenkins.buildBtn.click();
    //await browser.sleep(1000);
}));
cucumber_1.Then('After {int} seconds job will return Succes', (int) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(int * 500);
    let num = yield objJenkins.buildHistory.count();
    let str1 = "";
    if (num >= 1) {
        str1 = yield objJenkins.buildHistory.get(0).getAttribute("title");
        yield protractor_1.browser.sleep(3000);
        yield console.log(str1);
    }
    let boolTestValue = yield str1.includes("Success");
    yield expect(boolTestValue).to.equal(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsdUNBQTRDO0FBQzVDLGdEQUF3QjtBQUN4Qiw0REFBa0U7QUFDbEUsdUNBQXlCO0FBRXpCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxVQUFVLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFakMsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ3hELG9FQUFvRTtJQUNwRSxJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQ3ZCO1FBQ0UsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBVyxDQUFDLENBQUM7UUFDL0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUUzQjtBQUNILENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsc0JBQXNCLEVBQUUsR0FBUSxFQUFFO0lBQ3JDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsTUFBTSxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsaURBQWlELEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUN0RSxNQUFNLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sVUFBVSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsa0NBQWtDO0lBQ2xDLElBQUksaUJBQWlCLEdBQVUsTUFBTSxNQUFNLENBQUE7SUFDM0MsbUVBQW1FO0lBQ25FLElBQUksVUFBVSxHQUFVLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTVFLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuRyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLG9DQUFvQztJQUNwQyw0QkFBNEI7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw0Q0FBNEMsRUFBRSxDQUFPLEdBQUcsRUFBQyxFQUFFO0lBRTlELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksR0FBRyxHQUFHLE1BQU0sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxJQUFHLEdBQUcsSUFBRSxDQUFDLEVBQ1Q7UUFDRSxJQUFJLEdBQUcsTUFBTSxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDeEI7SUFDRCxJQUFJLGFBQWEsR0FBVyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFMUQsTUFBTSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=