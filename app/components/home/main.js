import HomeController from "./home-controller";
import HomeService from "./home-service";

let homeModule = angular.module("application.home")
  .controller('HomeController', HomeController)
  .factory('HomeService', HomeService);

exports default homeModule;
