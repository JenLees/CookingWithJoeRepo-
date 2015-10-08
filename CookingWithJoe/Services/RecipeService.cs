using CookingWithJoe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;

namespace CookingWithJoe.Services
{
    public class RecipeService : IRecipeService
    {
        private IGenericRepository _repo;

        public RecipeService(IGenericRepository repo)
        {
            _repo = repo;
        }

        public IList<Recipe> ListRecipes()
        {
            return _repo.Query<Recipe>().ToList();
        }
        public Recipe FindRecipe(int id)
        {
            return _repo.Find<Recipe>(id);
        }
        public void CreateRecipe(Recipe recipe)
        {
            _repo.Add<Recipe>(recipe);
            _repo.SaveChanges();
        }
        public void EditRecipe(Recipe recipe)
        {
            var original = this.FindRecipe(recipe.Id);
            original.RecipeName = recipe.RecipeName;
        }
        public void DeleteRecipe(int id)
        {
            _repo.Delete<Recipe>(id);
            _repo.SaveChanges();

        }

    }
}
    