import React, {useEffect, useState} from 'react'
import BookItem from './BookItem'
import ReadLaterItem from './ReadLaterItem';
import FavItem from './FavItem';

const BooksInfo = (props) => {

const [items, setItems] = useState([]);
const [search, setSearch] = useState("");
//const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);

const [readLaterBooks, setReadLaterBooks] = useState(() => {
  const savedReadLaterBooks = localStorage.getItem('readLaterBooks');
  return savedReadLaterBooks ? JSON.parse(savedReadLaterBooks) : [];
});

const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem('favoriteBooks');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
});


//const [category, setCategory] = useState([technology, wildlife, mankind, development])

useEffect(()=>{
  fetchData(currentPage);
}, [props.category]
)

const fetchData = async (page) => {

  const startIndex = (page - 1) * props.maxResults;

  props.showProgress(10);
  let url = `https://www.googleapis.com/books/v1/volumes?q=${props.category}&startIndex=${startIndex}&key=AIzaSyCh-CadW3Vs1uIvEIYQjnOhOI1d2r52Xxw&maxResults=${props.maxResults}`;
  props.showProgress(30);
  let data = await fetch(url);
  props.showProgress(50);
  let parsedData = await data.json();
  props.showProgress(70);
  setItems(parsedData.items);
  props.showProgress(100);
  console.log(parsedData);
}

const handleChange = (event) => {

    console.log("Change is happening");
    setSearch(event.target.value);

}  

const handleClick = async (event) => {
    event.preventDefault();

    props.showProgress(10);
    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCh-CadW3Vs1uIvEIYQjnOhOI1d2r52Xxw&maxResults=${props.maxResults}`
    
    let data = await fetch(url);
    props.showProgress(30);
    let parsedData = await data.json();
    props.showProgress(50);
    setItems(parsedData.items);
    console.log(parsedData);
    props.showProgress(100);
        
}

const addToReadLater = (book) => {
  setReadLaterBooks((prevReadLaterBooks) => {
    const updatedList = [...prevReadLaterBooks, book];
    localStorage.setItem('readLaterBooks', JSON.stringify(updatedList));
    return updatedList;
  });
};

const removeFromReadLater = (bookId) => {
  setReadLaterBooks((prevReadLaterBooks) => {
    const updatedList = prevReadLaterBooks.filter((book) => book.id !== bookId);
    localStorage.setItem('readLaterBooks', JSON.stringify(updatedList));
    return updatedList;
  });
};

const handlePrevClick = () => {
if(currentPage>1){
setCurrentPage((prevPage) => prevPage - 1);
fetchData(currentPage - 1);
}
      
}

const handleNextClick = () => {

setCurrentPage((prevPage) => prevPage + 1);
fetchData(currentPage + 1);

}

const addToFavorites = (book) => {
  setFavorites((prevFavorites) => {
    const updatedFavorites = [...prevFavorites, book];
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
    return updatedFavorites;
  });
};

const removeFromFavorites = (bookId) => {
  setFavorites((prevFavorites) => {
    const updatedFavorites = prevFavorites.filter((book) => book.id !== bookId);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
    return updatedFavorites;
  });
};


  return (

    <div>

    <form className="d-flex my-3 mx-3" role="search">
        <input className="form-control me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handleClick} className="btn btn-outline-danger" type="submit">Search</button>
    </form>

    <h2>All Books</h2>
    <div className='row'>
        {
        items.map((elements) => {
            return <div className='col-md-4 my-3' key={elements.id}>
            <BookItem title={elements.volumeInfo.title} publisher={elements.volumeInfo.publisher} bookurl={elements.volumeInfo.infoLink} image={elements.volumeInfo.imageLinks.thumbnail} addToReadLater={() => addToReadLater(elements)} 
              isFavorite={favorites.some((fav) => fav.id === elements.id)}
              handleAddToFavorites={() => addToFavorites(elements)}
              bookId={elements.id}
               />
            </div>
        })}

    </div>

    <h2>Read Later Section</h2>
      <div className="row">
        {readLaterBooks.map((elements) => (
          <div className="col-md-4 my-3" key={elements.id}>
            <ReadLaterItem
              title={elements.volumeInfo.title}
              publisher={elements.volumeInfo.publisher} 
              bookurl={elements.volumeInfo.infoLink} 
              image={elements.volumeInfo.imageLinks.thumbnail}
              removeFromReadLater={() => removeFromReadLater(elements.id)}
              isFavorite={favorites.some((fav) => fav.id === elements.id)}
              handleAddToFavorites={() => addToFavorites(elements)}
              bookId={elements.id} />
          </div>
        ))}
      </div>

      <h2>Your Favorite Books</h2>
      <div className="row">
        {favorites.map((elements) => (
          <div className="col-md-4 my-3" key={elements.id}>
            <FavItem
              title={elements.volumeInfo.title}
              publisher={elements.volumeInfo.publisher}
              bookurl={elements.volumeInfo.infoLink}
              image={elements.volumeInfo.imageLinks?.thumbnail}
              isFavorite={true}
              handleRemoveFromFavorites={() => removeFromFavorites(elements.id)}
              addToReadLater={() => addToReadLater(elements)}
              bookId={elements.id}
            />
          </div>
        ))}
      </div>

      <div className="container my-3 d-flex justify-content-between">
        <button type="button" onClick={handlePrevClick} disabled={currentPage===1} class="btn btn-dark"> &larr; Previous</button>
        <button type="button" onClick={handleNextClick} disabled={items.length < props.maxResults} class="btn btn-dark">Next &rarr; </button>
        </div>

    </div>
  )
}

export default BooksInfo
