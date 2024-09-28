import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">BookHive</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#books">All Books</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#readlater">Read Later Books</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#favorite">Favorite Books</a>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/history">History</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/society">Society</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/economics">Economics</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/business">Business</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/technology">Technology</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/fantasy">Fantasy</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/fiction">Fiction</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/horror">Horror</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/poetry">Poetry</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/literature">Literature</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/philosophy">Philosophy</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/travel">Travel</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
