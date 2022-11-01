/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './home.css';

const HomePage = () => (

  <div className="container">
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
          <p className="title">Welcome to Wikimini!</p>
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
      </div>
    </div>

  </div>

);

export default HomePage;
