import React from 'react'
import logo from './logo.svg';
 
function Layout(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> React Hook #4 - Perf Optimization </h1>
      </header>
      <main className="App-body">
      <img
          alt=""
          width={150}
          height={150}
          src="https://cdn1-production-images-kly.akamaized.net/jx9Ea9yp82NyX0gkBcNxgr7I2E8=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg"
        ></img>
        {props.children}
      </main>
      <footer className="App-footer">
        <div className="links">
          <a href="">
            <img
              alt=""
              width={24}
              height={24}
              src="https://img.icons8.com/color/50/000000/youtube-squared.png"
            ></img>
            Youtube
          </a>

          <a href="">
            <img
              width={24}
              height={24}
              src="https://img.icons8.com/metro/26/000000/github.png"
              alt=""
            ></img>
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout

