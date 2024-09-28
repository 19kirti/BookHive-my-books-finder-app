import React from 'react';

const Home = ({ showProgress }) => {
  return (
    <div className="home-container">
      <section>
        <h1>Welcome to BookHive</h1>
        <p>
            
            Discover, Explore, and Elevate Your Reading Journey!</p>
      </section>

      <section>
        <h2>At BookHive</h2>
        <p>

          We believe every book has a story waiting to be discovered. Whether you're a curious reader, 
          an avid bibliophile, or simply searching for your next great read, our app is designed to 
          bring the vast world of literature right to your fingertips.
        </p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Search Seamlessly:</strong> Find books from a wide range of genres, authors, 
            and categories using our smart search functionality powered by the Google Books API.
          </li>
          <li>
            <strong>Organize Your Reads:</strong> Create personalized lists, mark your favorites, 
            and save books to read later. Your perfect library is just a click away!
          </li>
          <li>
            <strong>Engage with Reviews:</strong> See what others are saying about the books you love 
            and contribute your own thoughts.
          </li>
          <li>
            <strong>Explore Categories:</strong> From Fiction to Fantasy, History to Science, 
            dive into a world of books tailored to your preferences.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
