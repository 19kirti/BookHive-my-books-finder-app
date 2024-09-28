import React from 'react';

const About = ({showProgress}) => {
  return (
    <div className="about-container">
      <section>
        <h1>About BookHive</h1>
        <p>
          BookHive is your ultimate destination for discovering and organizing books from all over the world. 
          Whether you're looking for your next great read or creating your personal library, we are here to 
          make the experience seamless, enjoyable, and personalized.
        </p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          At BookHive, our mission is to empower readers by providing an easy-to-use platform where they can 
          discover new books, organize their favorites, and engage with a community of book lovers. We aim to 
          enhance your reading experience by curating a collection of books that speak to your interests and 
          offer a platform to share your thoughts through reviews.
        </p>
      </section>

      <section>
        <h2>Why Choose BookHive?</h2>
        <ul>
          <li>
            <strong>Vast Collection:</strong> Access millions of books across different genres, languages, 
            and cultures, making it easy to find your next read.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Get personalized book suggestions based on your 
            reading habits and interests, so you always have something new to explore.
          </li>
          <li>
            <strong>Community Engagement:</strong> Read reviews, share your thoughts, and connect with other 
            readers who share your love for books.
          </li>
          <li>
            <strong>Seamless Organization:</strong> Organize your reading list effortlessly with our favorites 
            and read-later features, ensuring you never lose track of books that catch your eye.
          </li>
        </ul>
      </section>

      <section>
        <h2>Join the BookHive Community</h2>
        <p>
          Become a part of a global community that celebrates the joy of reading. At BookHive, every reader’s 
          journey is unique, and we are committed to helping you discover, share, and immerse yourself in the 
          world of books.
        </p>
      </section>
    </div>
  );
};

export default About;
