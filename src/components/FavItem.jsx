import React from 'react'

const FavItem = (props) => {
    let {title, publisher, bookurl, image, isFavorite, handleAddToFavorites, handleRemoveFromFavorites} = props;

    return (
      <div className="mx-3 my-3 card" id="selected" >
      <img src= {image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-text">{publisher}</h6>
        <a href={bookurl} type="_blank" className="btn btn-primary mx-3">Read More</a>
        <button onClick={handleRemoveFromFavorites} className="btn btn-outline-success">Remove</button>

      </div>
    </div>
    )
}

export default FavItem
