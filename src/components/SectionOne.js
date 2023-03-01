import "./SectionOne.css";

import tvPng from "../imgs/tv.png";
import tvVideo from "../imgs/video-tv-0819.m4v";
function SectionOne() {
  return (
    <div className="section-one">
      <div className="container">
        <div className="row content">
          <div className="col-lg-6 col-12">
            <div className="text">
              <h1>Enjoy on your TV.</h1>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-0">
            <div className="tv-video">
              <img src={tvPng} alt="" />
              <video src={tvVideo} muted autoPlay loop></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionOne;
