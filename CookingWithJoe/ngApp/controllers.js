var CookingWithJoe;
(function (CookingWithJoe) {
    var Controllers;
    (function (Controllers) {
        var RecipeAddController = (function () {
            function RecipeAddController(recipeService, $location) {
                this.recipeService = recipeService;
                this.$location = $location;
            }
            RecipeAddController.prototype.saveRecipe = function () {
                var _this = this;
                this.recipeService.saveRecipe(this.recipeToAdd).then(function () {
                    _this.$location.path('/');
                });
            };
            return RecipeAddController;
        })();
        angular.module('CookingWithJoe').controller('RecipeAddController', RecipeAddController);
        var RecipeEditController = (function () {
            function RecipeEditController(recipeService, $routeParams, $location) {
                this.recipeService = recipeService;
                this.$location = $location;
                var id = $routeParams['id'];
                this.recipeToEdit = recipeService.getRecipe(id);
            }
            RecipeEditController.prototype.editRecipe = function () {
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
            RecipeDeleteController.prototype.deleteRecipe = function () {
                var _this = this;
                this.recipeService.deleteRecipe(this.recipeToDelete.id).then(function () {
                    _this.$location.path('/');
                });
            };
            return RecipeDeleteController;
        })();
        angular.module('CookingWithJoe').controller('RecipeDeleteController', RecipeDeleteController);
        var RecipeListController = (function () {
            function RecipeListController(recipeService) {
                this.recipes = recipeService.listRecipes();
            }
            return RecipeListController;
        })();
        angular.module('CookingWithJoe').controller('RecipeListController', RecipeListController);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var ReviewAddController = (function () {
            function ReviewAddController(reviewService, $location) {
                this.reviewService = reviewService;
                this.$location = $location;
            }
            ReviewAddController.prototype.saveReview = function () {
                var _this = this;
                this.reviewService.saveReview(this.reviewToAdd).then(function () {
                    _this.$location.path('/');
                });
            };
            return ReviewAddController;
        })();
        angular.module('CookingWithJoe').controller('ReviewAddController', ReviewAddController);
        var ReviewEditController = (function () {
            function ReviewEditController(reviewService, $routeParams, $location) {
                this.reviewService = reviewService;
                this.$location = $location;
                var id = $routeParams['id'];
                this.reviewToEdit = reviewService.getReview(id);
            }
            ReviewEditController.prototype.editReview = function () {
                var _this = this;
                this.reviewService.saveReview(this.reviewToEdit).then(function () {
                    _this.$location.path('/');
                });
            };
            return ReviewEditController;
        })();
        angular.module('CookingWithJoe').controller('ReviewEditController', ReviewEditController);
        var ReviewDeleteController = (function () {
            function ReviewDeleteController(reviewService, $routeParams, $location) {
                this.reviewService = reviewService;
                this.$location = $location;
                var id = $routeParams['id'];
                this.reviewToDelete = reviewService.getReview(id);
            }
            ReviewDeleteController.prototype.deleteReview = function () {
                var _this = this;
                this.reviewService.deleteReview(this.reviewToDelete.id).then(function () {
                    _this.$location.path('/');
                });
            };
            return ReviewDeleteController;
        })();
        angular.module('CookingWithJoe').controller('ReviewDeleteController', ReviewDeleteController);
        var ReviewListController = (function () {
            function ReviewListController(reviewService) {
                this.reviews = reviewService.listReviews();
            }
            return ReviewListController;
        })();
        angular.module('CookingWithJoe').controller('ReviewListController', ReviewListController);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
                this.$location.path('/');
            };
            AccountController.prototype.isLoggedIn = function () {
                return this.$window.sessionStorage.getItem('token');
            };
            return AccountController;
        })();
        angular.module('CookingWithJoe').controller('AccountController', AccountController);
    })(Controllers = CookingWithJoe.Controllers || (CookingWithJoe.Controllers = {}));
})(CookingWithJoe || (CookingWithJoe = {}));
;
//# sourceMappingURL=controllers.js.map