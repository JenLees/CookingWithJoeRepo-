using CookingWithJoe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;

namespace CookingWithJoe.API
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReviewsController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();
    
        // GET: api/Reviews
        public IEnumerable<Review> Get()
        {
            return _db.Reviews.ToList();
        }

        // GET: api/Reviews/5
        public HttpResponseMessage Get(int id)
        {
            var review = _db.Reviews.Find(id);
            if (review == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            return Request.CreateResponse(HttpStatusCode.OK, review);

        }

        // POST: api/Reviews
        [Authorize]
        public HttpResponseMessage Post(Review review)
        {
            if (ModelState.IsValid)
            {
                if (review.Id == 0)
                {
                    _db.Reviews.Add(review);
                    _db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, review);
                }
                else
                {
                    var original = _db.Reviews.Find(review.Id);
                    original.Image = review.Image;
                    original.ProductName = review.ProductName;
                    original.ProductReview = review.ProductReview;
                    _db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, review);
                }
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, this.ModelState);
        }

        // PUT: api/Reviews/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

// DELETE: api/Reviews/5
[Authorize]
public HttpResponseMessage Delete(int id)
{
    var review = _db.Reviews.Find(id);
    if (review == null)
    {
        return Request.CreateResponse(HttpStatusCode.NotFound);
    }
    _db.Reviews.Remove(review);
    _db.SaveChanges();
    return Request.CreateResponse(HttpStatusCode.OK);
}
}
}