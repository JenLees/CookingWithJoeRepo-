using System.Collections.Generic;
using CookingWithJoe.Models;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;

namespace CookingWithJoe.Services
{
    public interface IRecipeService
    {
        void CreateRecipe(Recipe recipe);
        void DeleteRecipe(int id);
        void EditRecipe(Recipe recipe);
        Recipe FindRecipe(int id);
        IList<Recipe> ListRecipes();
    }
}