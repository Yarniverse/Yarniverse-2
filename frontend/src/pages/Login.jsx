import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(
      Object.fromEntries(formData.entries())
    );
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };
  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-1/4 py-12 px-12 bg-white rounded-2xl shadow-xl z-20"
      >
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Login
          </h1>
        </div>
        <div className="space-y-4">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            autoComplete="username"
            id="username"
            name="username"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            id="password"
            name="password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-6">
          <button className="py-3 w-full text-xl text-white bg-[#6aa096] rounded-2xl">
            Log in!
          </button>
        </div>
      </form>
      {!!errorText && <p>{errorText}</p>}
    </>
  );
}
