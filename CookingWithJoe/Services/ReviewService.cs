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
    public class ReviewService : IReviewService
    {
        private IGenericRepository _repo;

        public ReviewService(IGenericRepository repo)
        {
            _repo = repo;
        }

        public IList<Review> ListReviews()
        {
            return _repo.Query<Review>().ToList();
        }
        public Review FindReview(int id)
        {
            return _repo.Find<Review>(id);
        }
        public void CreateReview(Review review)
        {
            _repo.Add<Review>(review);
            _repo.SaveChanges();
        }
        public void EditReview(Review review)
        {
            var original = this.FindReview(review.Id);
            original.ProductName = review.ProductName;
        }
        public void DeleteReview(int id)
        {
            _repo.Delete<Review>(id);
            _repo.SaveChanges();

        }

    }
}