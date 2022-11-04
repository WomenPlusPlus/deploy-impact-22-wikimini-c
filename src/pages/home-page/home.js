/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './home.css';

const HomePage = () => (

  <div className="container">
    <div className="grass" />
    <div className="cloud-one" />
    <div className="cloud-two" />
    <div className="cloud-three" />
    <div className="sky-container">
      <form id="form-search" className="search-form">
        <input className="search-input" type="search" id="query" name="q" placeholder="Search in Wikimini..." />
        <button className="search-button" type="submit" label="none" />
      </form>
      <div className="description-container">
        <div className="description-box">
          <h1>Welcome to Wikimini!</h1>
          <p>
            Wikimini is an online encyclopaedia written by children and teenagers,
            with the help of older people.
            It is free and currently has articles and Wikiminauts!
            In the classroom or at home, everyone can participate
            in this great collective adventure.
          </p>
        </div>
        <div className="image-child" />
        <div className="image-item" />
        <div className="rocks" />
        <div className="grass" />
      </div>
    </div>
    <div className="category-container">
      <p className="title">SEARCH BY CATEGORY</p>
      <div className="grid-container">
        <div className="category-card">
          <img className="category-image" src="Atlas_Of_The_World.png" alt="category" />
          <p>Atlas of the world</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="artsandsports.png" alt="category" />
          <p>Arts, leisure and sports</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="Geography.png" alt="category" />
          <p>History and geography</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="Information.png" alt="category" />
          <p>Information and documentation</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="Languages.png" alt="category" />
          <p>Languages</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="LifeInSociety.png" alt="category" />
          <p>Life in society</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="Mind.png" alt="category" />
          <p>Thought and mind</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="Religions.png" alt="category" />
          <p>Beliefs and religions</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="Science.png" alt="category" />
          <p>Science and mathematics</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="Theater.png" alt="category" />
          <p>Literature and theater</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="TechnologyandHealth.png" alt="category" />
          <p>Technology and health</p>
        </div>
        <div className="category-card">
          <img className="category-image" src="Question.png" alt="category" />
          <p>Quiz</p>
        </div>

      </div>
    </div>
    <div className="info-container">
      <div>
        <img className="about-us-image" src="ImageAboutUs.png" alt="people" />

      </div>
      <div>
        <p className="title">ABOUT US</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel dolor commodo,
          condimentum lacus vel, interdum nisi. Quisque eu magna quis nisi accumsan molestie
          eget at elit. Sed maximus ligula et libero ornare semper. Phasellus ac efficitur
          sem, cursus feugiat tortor. Aenean condimentum sit amet lacus eu varius.
          Pellentesque ultricies non urna et vehicula. Nulla nec laoreet velit, et aliquam
          est.
          {' '}

        </p>
      </div>
    </div>
    <div className="info-container">
      <div>
        <p className="title">FOR PARENTS</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel dolor commodo,
          condimentum lacus vel, interdum nisi. Quisque eu magna quis nisi accumsan molestie
          eget at elit. Sed maximus ligula et libero ornare semper. Phasellus ac efficitur
          sem, cursus feugiat tortor. Aenean condimentum sit amet lacus eu varius.
          Pellentesque ultricies non urna et vehicula. Nulla nec laoreet velit, et aliquam
          est.
          {' '}

        </p>
      </div>
      <div>
        <img className="about-us-image" src="ImageForParents.png" alt="people" />

      </div>
    </div>
    <div className="info-container">
      <div>
        <img className="about-us-image" src="ImageForTeachers.png" alt="people" />

      </div>
      <div>
        <p className="title">FOR TEACHERS</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel dolor commodo,
          condimentum lacus vel, interdum nisi. Quisque eu magna quis nisi accumsan molestie
          eget at elit. Sed maximus ligula et libero ornare semper. Phasellus ac efficitur
          sem, cursus feugiat tortor. Aenean condimentum sit amet lacus eu varius.
          Pellentesque ultricies non urna et vehicula. Nulla nec laoreet velit, et aliquam
          est.
          {' '}

        </p>
      </div>
    </div>

  </div>

);

export default HomePage;
