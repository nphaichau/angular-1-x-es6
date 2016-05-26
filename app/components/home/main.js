import HomeController from "./home-controller";
import HomeService from "./home-service";

export default angular.module("application.home", [])
  .controller('HomeController', HomeController)
  .factory('HomeService', HomeService);
