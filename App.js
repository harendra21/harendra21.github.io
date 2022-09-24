(() => {
  "use strict";
  const App = angular.module("App", [
    "App.controllers",
    "ngRoute"
  ]);

  App.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "view/home.html",
      })
      .when("/experiance", {
        templateUrl: "view/experiance.html",
      })
      .when("/skills", {
        templateUrl: "view/skills.html",
      })
      .when("/education", {
        templateUrl: "view/education.html",
      })
      .when("/projects", {
        templateUrl: "view/projects.html",
      })
      .when("/contact-me", {
        templateUrl: "view/contact-me.html",
      })
      .otherwise({ redirectTo: "/" });
  });
})();
