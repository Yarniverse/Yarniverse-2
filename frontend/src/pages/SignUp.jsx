import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";

// Controlling the signup form is a good idea because we want to adde (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    if (!username || !password)
      return setErrorText("Missing username or password");
    if (!email) return setErrorText("Missing email address");
    if (!first_name || !setFirstName)
      return setError("Missing first name or last name");
    console.log();

    const [user, error] = await createUser({
      username,
      password,
      email,
      first_name,
      last_name,
    });
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "email") setEmail(value);
    if (name === "first_name") setFirstName(value);
    if (name === "last_name") setLastName(value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="w-2/4 h-1/6 py-12 px-12 bg-white rounded-2xl shadow-xl z-20"
      >
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Sign Up
          </h1>
        </div>
        <div className="space-y-4">
          <label htmlFor="username">Username</label>
          <input
            autoComplete="off"
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={username}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />

          <label htmlFor="password">Password</label>
          <input
            autoComplete="off"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />

          <label htmlFor="password">Email</label>
          <input
            autoComplete="off"
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={email}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />

          <label htmlFor="email">First Name</label>
          <input
            autoComplete="off"
            type="text"
            id="first_name"
            name="first_name"
            onChange={handleChange}
            value={first_name}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />

          <label htmlFor="password">Last Name</label>
          <input
            autoComplete="off"
            type="text"
            id="last_name"
            name="last_name"
            onChange={handleChange}
            value={last_name}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-6">
          <button className="py-3 w-full text-xl text-white bg-[#6aa096] rounded-2xl">
            Sign Up Now!
          </button>
        </div>
        <p className="mt-4 text-sm">
          Already have an account with us?{" "}
          <Link to="/login" className="underline cursor-pointer">
            Log in!
          </Link>
        </p>
      </form>
      {!!errorText && <p>{errorText}</p>}
    </>
  );
}
