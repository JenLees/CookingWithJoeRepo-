using System.Collections.Generic;
using CookingWithJoe.Models;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;

namespace CookingWithJoe.Services
{
    public interface IReviewService
    {
        void CreateReview(Review review);
        void DeleteReview(int id);
        void EditReview(Review review);
        Review FindReview(int id);
        IList<Review> ListReviews();
    }
}