var newTodo = angular.module("Authentication", ["ngRoute"]);

lastGroup.config([
    "$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/",
            {
                templateUrl: "App/login.html",
                controller: "loginController"
            })
            .when("/home",
            {
                templateUrl: "App/home.html",
                controller: "homeController"
            });

    }
])

lastGroup.run(["$http", function ($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;

}
]);