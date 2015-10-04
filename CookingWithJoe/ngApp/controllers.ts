namespace CookingWithJoe.Controllers {

    class RecipeAddController {
        public recipeToAdd

        public saveRecipe() {
            this.recipeService.saveRecipe(this.recipeToAdd).then(
                () => {
                    this.$location.path('/');
                }
            );
        }

        constructor
            (
            private recipeService: CookingWithJoe.Services.RecipeService,
            private $location: ng.ILocationService
            ) { }
    }

    angular.module('CookingWithJoe').controller('RecipeAddController', ['$http', function RecipeAddController($http) {
        var vm = this;
        $http.get('/api/recipes/').success(function (results) {
            vm.reviews = results;
        });
    }]);
}

    class RecipeEditController {
        public recipeToEdit

        public editRecipe() {
            this.recipeService.saveRecipe(this.recipeToEdit).then(
                () => {
                    this.$location.path('/');
                }
            );
        }

        constructor
            (
            private recipeService: CookingWithJoe.Services.RecipeService,
            $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService
            ) {
            let id = $routeParams['id'];
            this.recipeToEdit = recipeService.getRecipe(id);
        }
    }
  
    angular.module('CookingWithJoe').controller('RecipeEditController', ['$http', function RecipeEditController($http) {
        var vm = this;
        $http.get('/api/edit/').success(function (results) {
            vm.reviews = results;
        });
    }]);




    class RecipeDeleteController {
        public recipeToDelete

        public deleteRecipe() {
            this.recipeService.deleteRecipe(this.recipeToDelete.id).then(
                () => {
                    this.$location.path('/');
                }
            );
        }

        constructor
            (
            private recipeService: CookingWithJoe.Services.RecipeService,
            $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService
            ) {
            let id = $routeParams['id'];
            this.recipeToDelete = recipeService.getRecipe(id);
        }
    }
    angular.module('CookingWithJoe').controller('RecipeDeleteController', ['$http', function RecipeDeleteController($http) {
        var vm = this;
        $http.get('/api/delete/').success(function (results) {
            vm.reviews = results;
        });
    }]);


    class RecipeListController {
        public recipes

        constructor(recipeService: CookingWithJoe.Services.RecipeService) {
            this.recipes = recipeService.listRecipes();
        }
    }
    angular.module('CookingWithJoe').controller('RecipeListController', ['$http', function RecipeListController($http) {
        var vm = this;
        $http.get('/api/recipes/').success(function (results) {
        vm.recipes = results;
    });
}]);

   

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    class ReviewAddController {
        public reviewToAdd

        public saveReview() {
            this.reviewService.saveReview(this.reviewToAdd).then(
                () => {
                    this.$location.path('/');
                }
            );
        }

        constructor
            (
            private reviewService: CookingWithJoe.Services.ReviewService,
            private $location: ng.ILocationService
            ) { }
    }

    angular.module('CookingWithJoe').controller('ReviewAddController', ['$http', function ReviewAddController($http) {
        var vm = this;
        $http.get('/api/reviews/').success(function (results) {
            vm.reviews = results;
        });
    }]);


    class ReviewEditController {
        public reviewToEdit

        public editReview() {
            this.reviewService.saveReview(this.reviewToEdit).then(
                () => {
                    this.$location.path('/');
                }
            );
        }

        constructor
            (
            private reviewService: CookingWithJoe.Services.ReviewService,
            $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService
            ) {
            let id = $routeParams['id'];
            this.reviewToEdit = reviewService.getReview(id);
        }
    }
    angular.module('CookingWithJoe').controller('ReviewEditController', ReviewEditController);


    class ReviewDeleteController {
        public reviewToDelete

        public deleteReview() {
            this.reviewService.deleteReview(this.reviewToDelete.id).then(
                () => {
                    this.$location.path('/');
                }
            );
        }

        constructor
            (
            private reviewService: CookingWithJoe.Services.ReviewService,
            $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService
            ) {
            let id = $routeParams['id'];
            this.reviewToDelete = reviewService.getReview(id);
        }
    }
    angular.module('CookingWithJoe').controller('ReviewDeleteController', ReviewDeleteController);
    angular.module('CookingWithJoe').controller('RecipeDeleteController', ['$http', function RecipeDeleteController($http) {
        var vm = this;
        $http.get('/api/deletereview/').success(function (results) {
            vm.reviews = results;
        });
    }]);


    class ReviewListController {
        public reviews

        constructor(reviewService: CookingWithJoe.Services.ReviewService) {
            this.reviews = reviewService.listReviews();
        }
    }
    angular.module('CookingWithJoe').controller('ReviewListController', ['$http', function ReviewListController($http) {
        var vm = this;
        $http.get('/api/reviews/').success(function (results) {
            vm.reviews = results;
        });
    }]);
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const authenticateURL = '/Token';

    class AccountController {
        username: string
        password: string
        loginMessage: string
        newuser

        register() {
            this.$http.post("/api/Account/Register", this.newuser).success(() => {
                this.$location.path('/');
            });
        }

        login() {
 
            let data = "grant_type=password&username=" + this.username + "&password=" + this.password;
            this.$http.post(authenticateURL, data,
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success((result: any) => {
                    this.$window.sessionStorage.setItem('token', result.access_token);
                    this.$location.path('/');
                }).error(() => {
                    this.loginMessage = 'Invalid user name/password';
                });
        }

        logout() {
            this.$window.sessionStorage.removeItem('token');
            this.$location.path('/');
        }

        isLoggedIn() {
            return this.$window.sessionStorage.getItem('token');
        }

        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService, private $location: ng.ILocationService) { }
    }


    angular.module('CookingWithJoe').controller('AccountController', AccountController)


 
