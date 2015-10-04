var CookingWithJoe;
(function (CookingWithJoe) {
    var Services;
    (function (Services) {
        var RecipeService = (function () {
            function RecipeService($resource) {
                this.RecipeResource = $resource('/api/recipes/:id');
            }
            RecipeService.prototype.listRecipes = function () {
                return this.RecipeResource.query();
            };
            RecipeService.prototype.getRecipe = function (id) {
                return this.RecipeResource.get({ id: id });
            };
            RecipeService.prototype.saveRecipe = function (recipe) {
                return this.RecipeResource.save(recipe).$promise;
            };
            RecipeService.prototype.deleteRecipe = function (id) {
                return this.RecipeResource.delete({ id: id }).$promise;
            };
            return RecipeService;
        })();
        Services.RecipeService = RecipeService;
        angular.module('CookingWithJoe').service('RecipeService', RecipeService);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        var ReviewService = (function () {
            function ReviewService($resource) {
                this.ReviewResource = $resource('/api/reviews/:id');
            }
            ReviewService.prototype.listReviews = function () {
                return this.ReviewResource.query();
            };
            ReviewService.prototype.getReview = function (id) {
                return this.ReviewResource.get({ id: id });
            };
            ReviewService.prototype.saveReview = function (review) {
                return this.ReviewResource.save(review).$promise;
            };
            ReviewService.prototype.deleteReview = function (id) {
                return this.ReviewResource.delete({ id: id }).$promise;
            };
            return ReviewService;
        })();
        Services.ReviewService = ReviewService;
        angular.module('CookingWithJoe').service('ReviewService', ReviewService);
    })(Services = CookingWithJoe.Services || (CookingWithJoe.Services = {}));
})(CookingWithJoe || (CookingWithJoe = {}));
;
//# sourceMappingURL=services.js.map