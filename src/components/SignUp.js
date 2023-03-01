import "./SignUp.css";

function SignUp() {
  return (
    <form>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="register">
        <input className="input" type="email" placeholder="Email Address" />
        <button>
          <span>Get Started</span> <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </form>
  );
}

export default SignUp;
