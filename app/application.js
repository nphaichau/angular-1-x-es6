import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeModule from "./components/home/main";
import configApplication from "./route-config";

let application = angular.module('application', [uiRouter, HomeModule.name, 'app-html-templates']);

application.config(configApplication)
        .run(startApplication);

function startApplication() {
  
}