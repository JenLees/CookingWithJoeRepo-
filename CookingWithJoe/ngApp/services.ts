namespace CookingWithJoe.Services {

    export class RecipeService {
        private RecipeResource

        public listRecipes() {
            return this.RecipeResource.query();
        }

        public getRecipe(id) {
            return this.RecipeResource.get({ id: id });
        }

        public saveRecipe(recipe) {
            return this.RecipeResource.save(recipe).$promise;
        }

        public deleteRecipe(id) {

            return this.RecipeResource.delete({ id: id }).$promise;
        }

        constructor($resource: ng.resource.IResourceService) {
            this.RecipeResource = $resource('/api/recipes/:id');
        }

    }

    angular.module('CookingWithJoe').service('RecipeService', RecipeService);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    
        export class ReviewService {
            private ReviewResource

            public listReviews() {
                return this.ReviewResource.query();
            }

            public getReview(id) {
                return this.ReviewResource.get({ id: id });
            }

            public saveReview(review) {
                return this.ReviewResource.save(review).$promise;
            }

            public deleteReview(id) {

                return this.ReviewResource.delete({ id: id }).$promise;
            }

            constructor($resource: ng.resource.IResourceService) {
                this.ReviewResource = $resource('/api/reviews/:id');
            }

        }

        angular.module('CookingWithJoe').service('ReviewService', ReviewService);

    };
