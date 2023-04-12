import React from "react";


function Main(){

   return(
      <main className="App-main">
        <div className="App-banner">
          <p className="App-banner-title">Full-width banner image</p>
          <img className="App-bannerimg"></img>
        </div>
        <div className="App-main-content">
          <div className="App-blog-container">
            <p className="App-blog-title">Blog</p>
            <ul className="App-blog-list">
              <li className="App-blog-item"></li>
              <li className="App-blog-item"></li>
              <li className="App-blog-item"></li>
              <li className="App-blog-item"></li>
            </ul>
          </div>
          <article className="App-news">
            <p className="App-news-title">News</p>
            <ul className="App-news-list">
            <li className="App-news-item"></li>
            <li className="App-news-item"></li>
            <li className="App-news-item"></li>
            </ul>
          </article>
        </div>
      </main>
   )
}

export default Main;