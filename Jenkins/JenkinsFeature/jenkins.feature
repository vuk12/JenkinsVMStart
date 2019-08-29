Feature: I am going to start virtual machine with Jenkins


    Scenario: Start Virtual machine

        Given I will navigate to "Jenkins" page
        When I login into jenkins
        And I will start machine with id from file "C:\Users\PSG-Gushter4\Desktop\Visual Code\JenkinsShutDown\MachineNmb.txt"
        Then After 30 seconds job will return Succes