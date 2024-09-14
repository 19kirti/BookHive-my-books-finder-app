import React, {useEffect, useState} from 'react'
import BookItem from './BookItem'
import SelectedItem from './SelectedItem';

const BooksInfo = (props) => {

const [items, setItems] = useState([]);
const [search, setSearch] = useState("");
//const [loading, setLoading] = useState(false);
const [selectedBook, setSelectedBook] = useState([]);

//const [category, setCategory] = useState([technology, wildlife, mankind, development])

useEffect(()=>{
  fetchData()
}, [props.category]
)

const fetchData = async () => {

  props.showProgress(10);
  let url = `https://www.googleapis.com/books/v1/volumes?q=${props.category}&key=AIzaSyCh-CadW3Vs1uIvEIYQjnOhOI1d2r52Xxw`;
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
    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCh-CadW3Vs1uIvEIYQjnOhOI1d2r52Xxw`
    
    let data = await fetch(url);
    props.showProgress(30);
    let parsedData = await data.json();
    props.showProgress(50);
    setItems(parsedData.items);
    console.log(parsedData);
    props.showProgress(100);
        
}

const handleSelect = (book) => {
    setSelectedBook((prevSelectedBooks)=>[...prevSelectedBooks, book]
    );
}

const handleDeSelect = (book) => {
setSelectedBook((prevSelectedBooks)=>prevSelectedBooks.filter((selected)=>selected.id!==book.id))
}

  return (

    <div>

    <form className="d-flex my-3 mx-3" role="search">
        <input className="form-control me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handleClick} className="btn btn-outline-success" type="submit">Search</button>
    </form>

    <h2>All Books</h2>
    <div className='row'>
        {
        items.map((elements) => {
            return <div className='col-md-4 my-3' key={elements.id}>
            <BookItem title={elements.volumeInfo.title} publisher={elements.volumeInfo.publisher} bookurl={elements.volumeInfo.infoLink} image={elements.volumeInfo.imageLinks.thumbnail} handleSelect={()=>handleSelect(elements)}/>
            </div>
        })}

    </div>

    <h2>Selected Books</h2>
      <div className="row">
        {selectedBook.map((elements) => (
          <div className="col-md-4 my-3" key={elements.id}>
            <SelectedItem
              title={elements.volumeInfo.title}
              publisher={elements.volumeInfo.publisher} 
              bookurl={elements.volumeInfo.infoLink} 
              image={elements.volumeInfo.imageLinks.thumbnail}
              handleDeSelect={() => handleDeSelect(elements)} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default BooksInfo
