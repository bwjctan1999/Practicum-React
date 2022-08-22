import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-lg bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end py-3 px-6 text-btn text-white"
      onClick={() => navigate("/Login")}
    >
      Login
    </button>
  );
}
