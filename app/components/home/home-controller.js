export default class HomeController {
  /*@ngInject*/
  constructor($scope) {
    this.authorName = "Bobby Tables";
    $scope.$watch(() => this.authorName, (newValue) => {
      // Do whatever you want to do
    });
  }
}