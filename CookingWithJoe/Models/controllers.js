var CookingwithJoe;
(function (CookingwithJoe) {
    var Controllers;
    (function (Controllers) {
        var RecipesListController = (function () {
            function RecipesListController(recipeService) {
                this.recipes = recipeService.listRecipes();
            }
            return RecipesListController;
        })();
        angular.module('CookingWithJoe').controller('RecipesListController', RecipesListController);
    })(Controllers = CookingwithJoe.Controllers || (CookingwithJoe.Controllers = {}));
})(CookingwithJoe || (CookingwithJoe = {}));
var RecipeEditController = (function () {
    function RecipeEditController(recipeService, $routeParams, $location) {
        this.recipeService = recipeService;
        this.$location = $location;
        var id = $routeParams['id'];
        this.recipeToEdit = recipeService.getRecipe(id);
    }
    RecipeEditController.prototype.save = function () {
        var _this = this;
        this.recipeService.saveRecipe(this.recipeToEdit).then(function () {
            _this.$location.path('/');
        });
    };
    return RecipeEditController;
})();
angular.module('CookingWithJoe').controller('RecipeEditController', RecipeEditController);
var RecipeDeleteController = (function () {
    function RecipeDeleteController(recipeService, $routeParams, $location) {
        this.recipeService = recipeService;
        this.$location = $location;
        var id = $routeParams['id'];
        this.recipeToDelete = recipeService.getRecipe(id);
    }
    RecipeDeleteController.prototype.delete = function () {
        var _this = this;
        this.recipeService.deleteRecipe(this.recipeToDelete.id).then(function () {
            _this.$location.path('/');
        });
    };
    return RecipeDeleteController;
})();
angular.module('CookingWithJoe').controller('RecipeDeleteController', RecipeDeleteController);
var authenticateURL = '/Token';
var AccountController = (function () {
    function AccountController($http, $window, $location) {
        this.$http = $http;
        this.$window = $window;
        this.$location = $location;
    }
    AccountController.prototype.register = function () {
        var _this = this;
        this.$http.post("/api/Account/Register", this.newuser).success(function () {
            _this.$location.path('/');
        });
    };
    AccountController.prototype.login = function () {
        var _this = this;
        debugger;
        var data = "grant_type=password&username=" + this.username + "&password=" + this.password;
        this.$http.post(authenticateURL, data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function (result) {
            _this.$window.sessionStorage.setItem('token', result.access_token);
            _this.$location.path('/');
        }).error(function () {
            _this.loginMessage = 'Invalid user name/password';
        });
    };
    AccountController.prototype.logout = function () {
        this.$window.sessionStorage.removeItem('token');
    };
    AccountController.prototype.isLoggedIn = function () {
        return this.$window.sessionStorage.getItem('token');
    };
    return AccountController;
})();
angular.module('CookingWithJoe').controller('AccountController', AccountController);
