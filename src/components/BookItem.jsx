import {React, useState} from 'react'

const BookItem = (props) => {
    let {title, publisher, bookurl, image, addToReadLater, handleAddToFavorites, bookId} = props;

    const [reviews, setReviews] = useState(() => {
      // Retrieve reviews from localStorage
      const savedReviews = localStorage.getItem(`reviews-${bookId}`);
      return savedReviews ? JSON.parse(savedReviews) : [];
    });
    
    const [newReview, setNewReview] = useState('');
  
    // Handle form submission for adding a review
    const handleReviewSubmit = (e) => {
      e.preventDefault();
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      setNewReview('');
  
      // Save reviews in localStorage
      localStorage.setItem(`reviews-${bookId}`, JSON.stringify(updatedReviews));
    };

  return (
    <div className="mx-3 my-3 card" id="books" >
    <img src= {image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-text">{publisher}</h6>
      <a href={bookurl} type="_blank" className="btn btn-info mx-2">View Book</a>
      <button onClick={addToReadLater} className="btn btn-secondary mx-3">Read Later</button>
      <button onClick={handleAddToFavorites} className="btn btn-success mx-2">Favorites</button>

    {/* Review Section */}
    <div className="review-section mt-3">
          <h6>Reviews</h6>
          <ul>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))
            ) : (
              <p>No reviews yet. Be the first to review!</p>
            )}
          </ul>

          {/* Form to submit a new review */}
          <form onSubmit={handleReviewSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className="form-control"
                placeholder="Write a review"
              />
            </div>
            <button type="submit" className="btn btn-primary my-3 mt-2">Add Review</button>
          </form>
        </div>
      </div>
      </div>

  )
}

export default BookItem
