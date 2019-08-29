import { ElementFinder,element,by, ElementArrayFinder } from "protractor";
import { browser } from "protractor";


export class pageJenkins
{
userID;password;loginBtn;autoStartInstance;buildWithParametarsStart;idOfVMEditBox:ElementFinder;
buildHistory:ElementArrayFinder;



constructor()
{
    
    this.userID=element(by.css("[name='j_username']"));
    this.password=element(by.css("input[name='j_password']"));
    this.loginBtn=element(by.css("span button"));

    this.autoStartInstance=element(by.css("[href='job/auto-start-instance/']"));
    this.buildWithParametarsStart=element(by.css("a.task-link[href='/job/auto-start-instance/build?delay=0sec']"));
    this.idOfVMEditBox=element(by.css("[name='parameter'] input.setting-input[value='']"));
    //this.buildBtn=element(by.css("[action='build?delay=0sec'] button[type='button']"));
    this.buildHistory = element.all(by.css(".build-status-link img.icon-sm"));

    //ret = element(by.css("div.season-leaders")).all(by.css(""));

}

}

export const jenkinsHome = 'http://localhost:8080/login?from=%2F';
