import device from "../imgs/device-pile.png";
import deviceVideo from "../imgs/video-devices.mp4";
import "./SectionThree.css";

function SectionThree() {
  return (
    <div className="section-three">
      <div className="container">
        <div className="row">
          <div className="content">
            <div className="text">
              <h1>Watch everywhere.</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </p>
            </div>
            <div className="video-container">
              <div className="video">
                <img src={device} alt="" />
                <video loop autoPlay muted src={deviceVideo}></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
