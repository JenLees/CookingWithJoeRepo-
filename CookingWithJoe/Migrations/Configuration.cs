namespace CookingWithJoe.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;

    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ApplicationDbContext context)
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
                            
                        
                           RecipeName ="Healthy Veggie Burritos",
                           Ingredients="Soy Chorizo, whole wheat tortillas, onions, zucchini, carrots, cheddar cheese, black beans, plain Greek yogurt, avocado",
                           Directions="Fry veggies, add chorizo, wrap in a tortilla and top with avocado, salsa, and yogurt.",
                           Category="Dinner"
                         }
                    };

                context.Recipes.AddOrUpdate(r => r.RecipeName, recipes);
            }

            {
                var userStore = new UserStore<ApplicationUser>(context);
                var userManager = new ApplicationUserManager(userStore);

                // Ensure Stephen
                var user = userManager.FindByName("Stephen.Walther@CoderCamps.com");
                if (user == null)
                {
                    // create user
                    user = new ApplicationUser
                    {
                        UserName = "Stephen.Walther@CoderCamps.com",
                        Email = "Stephen.Walther@CoderCamps.com"
                    };
                    userManager.Create(user, "Secret123!");

                    // add claims
                    userManager.AddClaim(user.Id, new Claim("CanEditPages", "true"));
                    userManager.AddClaim(user.Id, new Claim(ClaimTypes.DateOfBirth, "12/25/1966"));
                }
            }


        }
    }
}
