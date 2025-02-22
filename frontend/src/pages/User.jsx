import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateProfileForm from "../components/UpdateUsernameForm";
import UserProfileCard from "../components/UserProfileCard";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState([]);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id); //checkng to see if the current user is the person whose session this is
  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.statusText);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);
  console.log(id);
  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate("/");
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;
  const profileEmail = isCurrentUserProfile
    ? currentUser.email
    : userProfile.email;
  const profileName = isCurrentUserProfile
    ? `${currentUser.first_name} ${currentUser.last_name}`
    : `${userProfile.first_name} ${userProfile.last_name}`;
  const profileBio = isCurrentUserProfile ? currentUser.bio : userProfile.bio;

  return (
    <>
      <div
        className="container block overflow-visible;
"
      >
        <UserProfileCard
          className=" flex"
          profile={userProfile}
        ></UserProfileCard>
        {!!isCurrentUserProfile && (
          <UpdateProfileForm
            className="flex"
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}
        {!!isCurrentUserProfile && (
          <button
            onClick={handleLogout}
            className="py-3 w-full text-xl text-white bg-[#6aa096] rounded-2xl"
          >
            Log Out
          </button>
        )}
      </div>
    </>
  );
}
