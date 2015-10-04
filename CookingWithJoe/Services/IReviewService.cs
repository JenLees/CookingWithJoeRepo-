using System.Collections.Generic;
using CookingWithJoe.Models;

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