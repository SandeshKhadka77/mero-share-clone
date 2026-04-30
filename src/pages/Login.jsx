import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBriefcase, FiLock, FiUser } from "react-icons/fi";
import Dropdown from "../components/Dropdown";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { depositoryParticipants } from "../data/depositoryParticipants";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [dp, setDp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="auth-page auth-page-dark">
      <div className="auth-card auth-card-dark">
        <h1 className="auth-logo auth-logo-light">
          MERO<span>SHARE</span>
        </h1>

        <Dropdown
          label="Depository Participants"
          icon={<FiBriefcase />}
          placeholder="Select your DP"
          options={depositoryParticipants}
          value={dp}
          onChange={setDp}
        />

        <InputField
          label="Username"
          icon={<FiUser />}
          value={username}
          onChange={setUsername}
        />

        <InputField
          label="Password"
          icon={<FiLock />}
          type="password"
          value={password}
          onChange={setPassword}
        />

        <Button onClick={handleLogin}>Login</Button>

        <p className="auth-link" onClick={() => navigate("/forgot-password")}>
          Forgot your password?
        </p>
      </div>

      <p className="auth-footer auth-footer-light">
        © 2026 CDS and Clearing Limited. All Rights Reserved
      </p>
    </div>
  );
}

export default Login;
