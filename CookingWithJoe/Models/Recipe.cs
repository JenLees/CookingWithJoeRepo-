using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CookingWithJoe.Models
{
    public class Recipe
    {
        public int Id { get; set; }

        public string Image { get; set; }

        public string RecipeName { get; set; }

        public string Ingredients { get; set; }

        public string Directions { get; set; }

        public string Category  { get; set; }

    }
}