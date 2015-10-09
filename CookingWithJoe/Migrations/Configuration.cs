namespace CookingWithJoe.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CookingWithJoe.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CookingWithJoe.Models.ApplicationDbContext context)
        {
            var reviews = new Review[]
            {
                new Review
                {
                    ProductName="Pumpkin Beer",
                    ProductReview="Really yummy beer"
                }
            };

            context.Reviews.AddOrUpdate(p => p.ProductName, reviews);




            {

                var recipes = new Recipe[] {
                         new Recipe{
                            
                           Image="image src='https://drive.google.com/open?id=0B1tNMm9b9GKvcWlrNG5ZRjZEMWs'",
                           RecipeName ="Healthy Veggie Burritos",
                           Ingredients="Soy Chorizo, whole wheat tortillas, onions, zucchini, carrots, cheddar cheese, black beans, plain Greek yogurt, avocado",
                           Directions="Fry veggies, add chorizo, wrap in a tortilla and top with avocado, salsa, and yogurt.",
                           Category="Dinner"
                         }
                    };

                context.Recipes.AddOrUpdate(r => r.RecipeName, recipes);
            }




        }
    }
}
