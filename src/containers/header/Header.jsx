import React from 'react';
import hoomans from '../../assets/humans.png';
import comunity from '../../assets/comunity2.png';
import './header.css';

const Header = () => (
  <div className="seva__header section__padding" id="home">
    <div className="seva__header-content">
      <h1 className="gradient__text">Give back to the Local comumunity and help devolop the city </h1>
      <p>From basic reparirs to expert work we offer all kinds of services through our portal here. Using our web app you not only get cheap competative prices but also help boost the local businesses.</p>

      <div className="seva__header-content__input">
        <select>
        <option value="Cleaning">Cleaning</option>
        <option value="Baby sitting">Baby sitting</option>
        <option value="Pest control">Pest control</option>
        <option value="Electrical Repair">Electrical Repair</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Beuty">Beuty</option>
        </select>
        <button type="button">Search</button>
      </div>
    </div>
    <div className="gpt3__header-content__people">
      <img src={hoomans} alt='people'/>
      <p>1,600 people requested access a visit in last 24 hours</p>
    </div>

    <div className="seva__header-image">
      <img src={comunity} alt='connecting people'/>
    </div>
  </div>
);

export default Header;
