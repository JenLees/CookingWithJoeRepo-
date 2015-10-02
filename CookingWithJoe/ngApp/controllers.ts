﻿namespace CookingWithJoe.Controllers {

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

    angular.module('CookingWithJoe').controller('RecipeAddController', RecipeAddController);

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
    angular.module('CookingWithJoe').controller('RecipeEditController', RecipeEditController);


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
    angular.module('CookingWithJoe').controller('RecipeDeleteController', RecipeDeleteController);

    class RecipeListController {
        public recipes

        constructor(recipeService: CookingWithJoe.Services.RecipeService) {
            this.recipes = recipeService.listRecipes();
        }
    }
    angular.module('CookingWithJoe').controller('RecipeListController', RecipeListController);

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


  
 

 
}
