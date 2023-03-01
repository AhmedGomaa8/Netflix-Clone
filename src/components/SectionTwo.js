import mobileImg from "../imgs/mobile-0819.jpg";
import boxShot from "../imgs/boxshot.png";
import "./SectionTwo.css";

function SectionTwo() {
  return (
    <div className="section-two">
      <div className="container">
        <div className="row">
          <div className="content">
            <div className="download-img">
              <img src={mobileImg} alt="" />
              <div className="downloading">
                <img src={boxShot} alt="" />
                <div className="downloading-text">
                  <span>Stranger Things</span>
                  <span>Downloading...</span>
                </div>
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
            <div className="download-text">
              <h1>Download your shows to watch offline.</h1>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionTwo;
