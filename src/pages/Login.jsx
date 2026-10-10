import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBriefcase, FiLock, FiUser } from "react-icons/fi";
import Dropdown from "../components/Dropdown";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { depositoryParticipants } from "../data/depositoryParticipants";

function Login() {
  const navigate = useNavigate();
  const [dp, setDp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#373f65] p-4 font-sans">
      <div className="w-full max-w-105 rounded-lg bg-[#384267] px-6 py-6 shadow-[0_10px_24px_rgba(25,33,60,0.35)]">
        <h1 className="mb-4.5 text-center text-[28px] font-bold leading-none tracking-[0.4px] text-white max-[560px]:text-2xl">
          MERO<span className="text-[#d60303]">SHARE</span>
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

        <p className="mt-4 cursor-pointer text-center text-[13px] font-semibold text-[#f0f4ff] hover:underline max-[560px]:text-xs" onClick={() => navigate("/forgot-password")}>
          Forgot your password?
        </p>
      </div>

      <p className="mt-5.5 text-center text-xs font-semibold text-white">
        © 2026 CDS and Clearing Limited. All Rights Reserved
      </p>
    </div>
  );
}

export default Login;
