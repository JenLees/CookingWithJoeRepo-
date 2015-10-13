using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;
using System.ComponentModel.DataAnnotations;

namespace CookingWithJoe.Models
{
    public class Review
    {
        public int Id { get; set; }

        public string Image { get; set; }

        public string ProductName { get; set; }

        public string ProductReview { get; set; }
    }
}