import React, { useState } from 'react';
import Politicy from './Politicy';
import './SiteHead.css';
import Technology from './Technology';
import Sport from './Sport';
import Ecology from './Ecology';
import LogIn from './LogIn';

function SiteHead() {
  const [showTechnology, setShowTechnology] = useState(false);
  const [showPoliticy, setShowPolitics] = useState(false);
  const [showSport, setShowSport] = useState(false);
  const [showEcology, setShowEcology] = useState(false);
  const [showLogIn, setshowLogIn] = useState(false);
  const [showSiteHead, setshowSiteHead] = useState(true);

  const handleTechnologyClick = () => {
    setShowTechnology(true);
    setShowPolitics(false);
    setShowSport(false);
    setShowEcology(false);
    setshowLogIn(false);
  }

  const handlePoliticsClick = () => {
    setShowTechnology(false);
    setShowPolitics(true);
    setShowSport(false);
    setShowEcology(false);
    setshowLogIn(false);
  }

  const handleSportClick = () => {
    setShowTechnology(false);
    setShowPolitics(false);
    setShowSport(true);
    setShowEcology(false);
    setshowLogIn(false);
  }

  const handleEcologyClick = () => {
    setShowTechnology(false);
    setShowPolitics(false);
    setShowSport(false);
    setShowEcology(true);
    setshowLogIn(false);
  }

  const handleLogInClick = () => {
    setShowTechnology(false);
    setShowPolitics(false);
    setShowSport(false);
    setShowEcology(false);
    setshowLogIn(true);
  }

  return (
    <div className="parent-Header">
      <header className="header">
      <a target="_blank" href="https://edition.cnn.com/"><svg fill='#fff' className="main-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g id="Logos"><g id="CNN"><path d="M12,23h2.61a.38.38,0,0,0,.39-.39V15.73a2.73,2.73,0,0,1,5.09-1.35L23,19.47V15.73a2.73,2.73,0,0,1,5.09-1.35L31,19.47V13h1.67V24.28a.39.39,0,0,1-.73.2l-5.3-9.28a1.08,1.08,0,0,0-.91-.53,1.06,1.06,0,0,0-1.06,1.06v8.55a.39.39,0,0,1-.73.2l-5.3-9.28a1.08,1.08,0,0,0-.91-.53,1.06,1.06,0,0,0-1.06,1.06v8.55a.39.39,0,0,1-.39.39H12a4.67,4.67,0,0,1,0-9.33h2.34V17H12a3,3,0,0,0,0,6Z"/><path d="M35,13V24.28a2.72,2.72,0,0,1-5.08,1.35L27,20.53v3.75a2.72,2.72,0,0,1-5.08,1.35L19,20.53v3.75A2.72,2.72,0,0,1,16.28,27H12a7,7,0,0,1,0-14h2.34v1.67H12a5.34,5.34,0,0,0,0,10.67h4.28a1.07,1.07,0,0,0,1.06-1.06V15.73a.39.39,0,0,1,.72-.2l5.3,9.28a1.08,1.08,0,0,0,1.45.39,1.1,1.1,0,0,0,.53-.92V15.73a.39.39,0,0,1,.72-.2l5.3,9.28a1.08,1.08,0,0,0,1.45.39,1.1,1.1,0,0,0,.53-.92V13Z"/></g></g></svg></a>
        <nav className="App-nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#" className="link" onClick={handleTechnologyClick}>
                Technology
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="link" onClick={handlePoliticsClick}>
                Politics
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="link" onClick={handleSportClick}>
                Sport
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="link" onClick={handleEcologyClick}>
                Ecology
              </a>
            </li>
            <a className="log-in" href="#"  onClick={handleLogInClick}>
              Log In
            </a>
          </ul>
        </nav>
      </header>
      {showTechnology && <Technology />}
      {showPoliticy && <Politicy />}
      {showSport && <Sport />}
      {showEcology && <Ecology />}
      {showLogIn === true ? <LogIn /> : <SiteHead/>}
    </div>
  );
}

export default SiteHead;