import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="logo">
          MERO<span>SHARE</span>
        </h1>

        <label>Depository Participants</label>
        <select>
          <option>Select your DP</option>
        </select>

        <label>Username</label>
        <input type="text" />

        <label>Password</label>
        <input type="password" />

        <button onClick={handleLogin}>Login</button>

        <p className="forgot">Forgot your password?</p>
      </div>

      <p className="footer">
        © 2026 CDS and Clearing Limited. All Rights Reserved
      </p>
    </div>
  );
}

export default Login;
