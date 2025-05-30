import React from "react";
import '../../styles/blog_cards.css';
import Advance_web_devimg from '../../assets/advwebdev.jpg';
import Web_dev_gamechangerimg from '../../assets/webdevgamechanger.jpg'
import Ninecuttingedgeimg from '../../assets/ninecuttingedge.jpg'

export const Advance_web_dev = () => {
  return (
    <div className="card" style={{
      backgroundImage: `url(${Advance_web_devimg})`,
      backgroundSize: 'cover',
    }}>
      <div className="card-content">
        <h2>
          Lorem, ipsum dolor.
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tenetur quibusdam quisquam numquam commodi ducimus! Nam dignissimos dicta nobis praesentium.</p>
        <a href="" className="button">learn more</a>
      </div>
    </div>
  );
}

export const Web_dev_gamechanger = () => {
  return (
    <div className="card" style={{
        backgroundImage: `url(${Web_dev_gamechangerimg})`,
        backgroundSize: 'cover',
    }}>
      <div className="card-content">
        <h2>
          Lorem, ipsum dolor.
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tenetur quibusdam quisquam numquam commodi ducimus! Nam dignissimos dicta nobis praesentium.</p>
        <a href="" className="button">learn more</a>
      </div>
    </div>
  );
}

export const Ninecuttingedge = () => {
  return (
    <div className="card" style={{
      backgroundImage: `url(${Ninecuttingedgeimg})`,
      backgroundSize: 'cover',
    }}>
      <div className="card-content">
        <h2>
          Lorem, ipsum dolor.
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tenetur quibusdam quisquam numquam commodi ducimus! Nam dignissimos dicta nobis praesentium.</p>
        <a href="" className="button">learn more</a>
      </div>
    </div>
  );
}