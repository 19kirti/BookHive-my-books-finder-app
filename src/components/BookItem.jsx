import React from 'react'

const BookItem = (props) => {
    let {title, publisher, bookurl, image, addToReadLater, handleAddToFavorites} = props;

  return (
    <div className="mx-3 my-3 card" id="books" >
    <img src= {image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-text">{publisher}</h6>
      <a href={bookurl} type="_blank" className="btn btn-primary mx-2">Read More</a>
      <button onClick={addToReadLater} className="btn btn-outline-success mx-3">Read Later</button>
      <button onClick={handleAddToFavorites} className="btn btn-outline-success mx-2">Favorites</button>
    </div>
  </div>
  )
}

export default BookItem
