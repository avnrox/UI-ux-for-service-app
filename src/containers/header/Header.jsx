import React from 'react';
//import hoomans from '../../assets/humans.png';
import comunity from '../../assets/comunity2.png';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleOnClick = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
    navigate('/userhomesearch');
  };

  return (
    <div className="seva__header section__padding" id="home">
      <div className="seva__header-content">
        <h1 className="gradient__text">
          Give back to the Local community and help develop the city{" "}
        </h1>
        <p>
          From basic repairs to expert work we offer all kinds of services
          through our portal here. Using our web app you not only get cheap
          competitive prices but also help boost the local businesses.
        </p>

        <div className="seva__header-content__input">
          <select>
            <option value="Cleaning">Cleaning</option>
            <option value="Baby sitting">Baby sitting</option>
            <option value="Pest control">Pest control</option>
            <option value="Electrical Repair">Electrical Repair</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Beauty">Beauty</option>
          </select>
          <select>
            <option value="Southampton1">Southampton Central</option>
            <option value="Southampton2">Area 2</option>
            <option value="Southampton3">Area 3</option>
          </select>
          <button type="button" onClick={handleOnClick}>
            Search
          </button>
        </div>
      </div>

      <div className="seva__header-image">
        <img src={comunity} alt="connecting people" />
      </div>
    </div>
  );
};

export default Header;
