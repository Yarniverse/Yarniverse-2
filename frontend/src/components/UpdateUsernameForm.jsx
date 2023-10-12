import { useNavigate } from "react-router-dom";
import { updateProfile } from "../adapters/user-adapter";

export default function UpdateProfileForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const [user, error] = await updateProfile(Object.fromEntries(formData.entries()));
    // If our user isn't who they say they are
    // (an auth error on update) log them out
    if (error?.status > 400 && error?.status < 500) {
      setCurrentUser(null);
      return navigate('/');
    }

    setCurrentUser(user);
    event.target.reset();
  };

  return <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">New Username</label>
        <input type="text" id="username" name="username" />
      </div>

      <div>
        <label htmlFor="password">New Password</label>
        <input type="password" id="password" name="password" />
      </div>

      <div>
        <label htmlFor="bio">New Bio</label>
        <input type="text" id="bio" name="bio" />
      </div>

      <input type="hidden" name="id" value={currentUser.id} />
      <button type="submit">Update Profile</button>
  </form>;
}
