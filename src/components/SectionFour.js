import kidsImg from "../imgs/kids.png";
import "./SectionFour.css";

function SectionFour() {
  return (
    <div className="section-four">
      <div className="container">
        <div className="row">
          <div className="content">
            <img src={kidsImg} alt="" />
            <div className="text">
              <h1>Create profiles for kids.</h1>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionFour;
