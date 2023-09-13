'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hero.scss';
import { faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react";
import boba1 from "../../../public/assets/animation/boba1.json";
import boba2 from "../../../public/assets/animation/boba2.json";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="wrapContainer">
        <div className="boxPrimary">
          <div className="colLeft">
            <h1>Bubuk Minuman Premium untuk Bisnis Anda</h1>
            <h3>Dapatkan rasa yang luar biasa dalam setiap gelas minuman. Kami adalah pilihan utama untuk bisnis minuman Anda."</h3>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <p>Rating on google</p>
            </div>
            <button className="btnCta"><FontAwesomeIcon icon={faPhone} />Konsultasi Gratis</button>
          </div>
          <div className="colRight">
            <div className="boxRight boxRight1">
              boxRight1
            </div>
            <div className="boxRight boxRight2">
              <Lottie animationData={boba1} loop={true} className='animationBoba1' />
            </div>
            <div className="boxRight boxRight3">
              <Lottie animationData={boba2} loop={true} className='animationBoba2' />
            </div>
            <div className="boxRight boxRight4">BoxRight4</div>
            <div className="boxRight boxRight5">BoxRight5</div>
          </div>
        </div>
        <div className="boxSecondary">
          <div className="box box1">box1</div>
          <div className="box box2">box2</div>
          <div className="box box3">Box 3</div>
          <div className="box box4">box4</div>
          <div className="box box5">box5</div>
          {/* <div className="box box6">box6</div>
          <div className="box box7">box7</div>
          <div className="box box8">box8</div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;