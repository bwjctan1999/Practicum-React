import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-lg bg-gradient-to-r from-primaryGradient-start to-primaryGradient-start py-3 px-6 text-sm text-white"
      onClick={() => navigate("/Login")}
    >
      Login
    </button>
  );
}
