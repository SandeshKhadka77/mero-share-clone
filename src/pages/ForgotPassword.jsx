import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBriefcase, FiCalendar, FiMail, FiUser } from "react-icons/fi";
import Dropdown from "../components/Dropdown";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { depositoryParticipants } from "../data/depositoryParticipants";

function ForgotPassword() {
  const navigate = useNavigate();
  const [dp, setDp] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-[#373f65] p-4 pt-6 font-sans max-[560px]:pt-4.5">
      <h1 className="mb-1.5 text-center text-[28px] font-bold leading-none tracking-[0.4px] text-white max-[560px]:text-2xl">
        MERO<span className="text-[#d60303]">SHARE</span>
      </h1>

      <div className="mt-2.5 w-full max-w-125 rounded-lg bg-white px-6 py-6 shadow-[0_10px_24px_rgba(25,33,60,0.28)] max-[560px]:px-4 max-[560px]:py-4.5">
        <h2 className="text-xl font-bold text-[#1d2a44] max-[560px]:text-lg">Reset your Password</h2>
        <p className="mb-3.5 mt-1 text-xs text-[#7f879b] max-[560px]:mb-3 max-[560px]:text-[11px]">
          The verification email will be sent to your mailbox. Please check it.
        </p>

        <Dropdown
          label="Depository Participants"
          icon={<FiBriefcase />}
          placeholder="Select your DP"
          options={depositoryParticipants}
          value={dp}
          onChange={setDp}
          className="[&>label]:text-[#5b647b] [&>div]:border-[#d9dce5] [&>div]:bg-[#f4f5f7]"
        />

        <InputField
          label="Username"
          icon={<FiUser />}
          value={username}
          onChange={setUsername}
          className="[&>label]:text-[#5b647b] [&>input]:border-[#d9dce5] [&>input]:bg-[#f4f5f7]"
        />

        <InputField
          label="Email"
          icon={<FiMail />}
          type="email"
          value={email}
          onChange={setEmail}
          className="[&>label]:text-[#5b647b] [&>input]:border-[#d9dce5] [&>input]:bg-[#f4f5f7]"
        />

        <InputField
          label="Date of Birth"
          icon={<FiCalendar />}
          type="date"
          value={dob}
          onChange={setDob}
          placeholder="MM/DD/YYYY"
          className="[&>label]:text-[#5b647b] [&>input]:border-[#d9dce5] [&>input]:bg-[#f4f5f7]"
        />

        <div className="mt-3.5 grid gap-2.5">
          <Button variant="light">Send</Button>
          <Button variant="secondary" onClick={() => navigate("/")}>Back</Button>
        </div>
      </div>

      <p className="mt-5.5 text-center text-xs font-semibold text-white">
        © 2026 CDS and Clearing Limited. All Rights Reserved
      </p>
    </div>
  );
}

export default ForgotPassword;
