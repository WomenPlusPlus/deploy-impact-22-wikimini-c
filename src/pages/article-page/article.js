/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './article.css';

const ArticlePage = () => (
  <>
    <div className="topnav">
      <div className="logo" />
      <a href="/login" className="login-button">Login</a>
    </div>
    <div className="article-container">
      <form id="form-search" className="article-search-form">
        <input className="article-search-input" type="search" id="query" name="q" placeholder="Search in Wikimini..." />
        <button className="article-search-button" type="submit" label="none" />
      </form>
      <div className="small-description">Your result for “Acropolis of Athens” defined and explained to children by children</div>
      <div className="article-info-container">
        <div className="article-text-container">
          <h3>ACROPOLIS OF ATHENS</h3>
          <p>The Acropolis of Athens is the sacred hill of Athens. It measures 148m.</p>
          <h4>Story</h4>
          <div>
            It was built around - 3000, at the end of the
            Bronze Age but also at the beginning of history.
            In its early days, the Acropolis of Athens was a fortress.
            In -500, during the heyday of Athens, Pericles modified it to
            make it a sanctuary in which people came to make offerings, to
            honor the Greek gods of Olympus but also and above all Athena.
            But it was also the place where the Panathenaic procession ended
            which crossed the city and at the end of which everyone was going
            to make an offering to the goddess of the city, Athena.
          </div>
          <div className="chip-container">
            <div className="tag-chip">Architecture</div>
            <div className="tag-chip">Greek Mythology</div>
            <div className="tag-chip">History of Greece</div>
          </div>
          <div className="level-chip">Reading level: 9th grade</div>
        </div>
        <div className="article-image-container">
          <div className="image-box">
            <img src="Acropolis.jpg" alt="Acropolis on a mountain" />
            <p>In this photo we see the Acropolis in the background</p>
          </div>
        </div>
      </div>
      <div className="additional-info-container">
        <div className="images-container">
          <h4>VIEW ALSO...</h4>
          <div className="images-block">
            <div>
              <img src="greece.png" alt="Flag of greece" />
              <p>
                Greece: history and
                {' '}
                <br />
                flag of the country
              </p>
            </div>
            <div>
              <img src="parthenon.png" alt="Parthenon" />
              <p>
                The Parthenon
                {' '}
                <br />
                in Greece
              </p>
            </div>
            <div>
              <img src="alexander.png" alt="Statue of Alexander the Great" />
              <p>
                Monument to
                {' '}
                <br />
                Alexander the Great
                <br />
                in Greece
              </p>
            </div>
          </div>
          <div className="bubbles-container">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="actions-container">
          <h4>WHAT YOU CAN DO</h4>
          <div className="action-item">
            {' '}
            <img src="eye.png" alt="Eye" />
            <p>Add to my Watchlist</p>
          </div>
          <div className="action-item">
            {' '}
            <img src="champion.png" alt="Trophy" />
            <p>WikiChampions of the moment</p>
          </div>
          <div className="action-item">
            {' '}
            <img src="bell.png" alt="Bell" />
            <p>Most requested pages</p>
          </div>
          <div className="action-item">
            {' '}
            <img src="share.png" alt="Share icon" />
            <p>Share it</p>
          </div>
          <div className="action-item">
            {' '}
            <img src="policewoman.png" alt="Policewoman" />
            <p>Alert!</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ArticlePage;
