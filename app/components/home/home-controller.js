export default class HomeController {
  /*@ngInject*/
  constructor($scope) {
    this.name = "Bobby Tables";
    $scope.$watch(() => this.name, (newValue) => {
      // Do whatever you want to do
    });
  }
}