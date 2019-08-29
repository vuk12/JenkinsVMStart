"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class pageJenkins {
    constructor() {
        this.userID = protractor_1.element(protractor_1.by.css("[name='j_username']"));
        this.password = protractor_1.element(protractor_1.by.css("input[name='j_password']"));
        this.loginBtn = protractor_1.element(protractor_1.by.css("span button"));
        this.autoStartInstance = protractor_1.element(protractor_1.by.css("[href='job/auto-start-instance/']"));
        this.buildWithParametarsStart = protractor_1.element(protractor_1.by.css("a.task-link[href='/job/auto-start-instance/build?delay=0sec']"));
        this.idOfVMEditBox = protractor_1.element(protractor_1.by.css("[name='parameter'] input.setting-input[value='']"));
        //this.buildBtn=element(by.css("[action='build?delay=0sec'] button[type='button']"));
        this.buildHistory = protractor_1.element.all(protractor_1.by.css(".build-status-link img.icon-sm"));
        //ret = element(by.css("div.season-leaders")).all(by.css(""));
    }
}
exports.pageJenkins = pageJenkins;
exports.jenkinsHome = 'http://localhost:8080/login?from=%2F';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUplbmtpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9wYWdlSmVua2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwRTtBQUkxRSxNQUFhLFdBQVc7SUFPeEI7UUFHSSxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLHdCQUF3QixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrREFBK0QsQ0FBQyxDQUFDLENBQUM7UUFDL0csSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLHFGQUFxRjtRQUNyRixJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBRTFFLDhEQUE4RDtJQUVsRSxDQUFDO0NBRUE7QUF4QkQsa0NBd0JDO0FBRVksUUFBQSxXQUFXLEdBQUcsc0NBQXNDLENBQUMifQ==