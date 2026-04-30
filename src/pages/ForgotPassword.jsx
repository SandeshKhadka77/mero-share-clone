import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBriefcase, FiCalendar, FiMail, FiUser } from "react-icons/fi";
import Dropdown from "../components/Dropdown";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { depositoryParticipants } from "../data/depositoryParticipants";
import "../styles/forgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [dp, setDp] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  return (
    <div className="auth-page auth-page-forgot">
      <h1 className="auth-logo auth-logo-light auth-logo-top">
        MERO<span>SHARE</span>
      </h1>

      <div className="auth-card auth-card-light">
        <h2 className="forgot-title">Reset your Password</h2>
        <p className="forgot-subtitle">
          The verification email will be sent to your mailbox. Please check it.
        </p>

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
          label="Email"
          icon={<FiMail />}
          type="email"
          value={email}
          onChange={setEmail}
        />

        <InputField
          label="Date of Birth"
          icon={<FiCalendar />}
          type="date"
          value={dob}
          onChange={setDob}
          placeholder="MM/DD/YYYY"
        />

        <div className="auth-actions">
          <Button>Send</Button>
          <Button variant="secondary" onClick={() => navigate("/")}>Back</Button>
        </div>
      </div>

      <p className="auth-footer auth-footer-light">
        © 2026 CDS and Clearing Limited. All Rights Reserved
      </p>
    </div>
  );
}

export default ForgotPassword;
