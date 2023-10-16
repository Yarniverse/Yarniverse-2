import { Avatar } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Button, Card } from "flowbite-react";

const UserProfileCard = ({ profile }) => {
  console.log(profile);

  return (
    <>
      <Card className=" block max-w-fit">
        {/* <Avatar
          rounded
          placeholderInitials={`${profile.first_name}${profile.last_name[0]}`}
          size="lg"
        /> */}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          @{profile.username}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {`${profile.first_name} ${profile.last_name}`}
        </span>

        <p>{profile.bio}</p>
        <Button pill>
          <HiOutlineArrowRight className="h-6 w-6" />
        </Button>
      </Card>
    </>
  );
  // Link to Profile
  //     - if you're on your profile already then the link is to the edit profile button
};

export default UserProfileCard;
