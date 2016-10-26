(function() {
  var app = angular.module('site', []);

  var path = location.pathname;

  app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
    when(path, {
      templateUrl:'site/index.html',
      title: 'html2canvas - Screenshots with JavaScript'
    }).
    when(path + 'screenshots.html', {
      templateUrl:'site/screenshots.html',
      title: 'Test console'
    }).
    when(path + 'screenshots_beta.html', {
        templateUrl:'site/screenshots_beta.html',
        title: 'Test console'
    }).
    when(path + 'examples.html', {
      templateUrl:'site/examples.html',
      title: 'Examples for html2canvas'
    }).
    when(path + 'faq.html', {
      templateUrl:'site/faq.html',
      title: "FAQ"
    }).
    when(path + 'documentation.html', {
      templateUrl:'site/documentation.html',
      title: 'Documentation for html2canvas'
    }).
    when(path + 'LICENSE', {
      templateUrl:'/LICENSE'
    }).
    otherwise({
      redirectTo: path
    });
  });

  app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      if (current.$route) {
        $rootScope.title = current.$route.title;
      }
    });
  }]);

})();

function Navigation($scope, $location) {
  $scope.active = function (page) {
    var currentRoute = $location.path() || 'index';
    return page === currentRoute ? 'active' : '';
  };
}
