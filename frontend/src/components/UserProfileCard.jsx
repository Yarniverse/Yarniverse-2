import { Avatar } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Button, Card } from "flowbite-react";

const UserProfileCard = ({ profile }) => {
  console.log(profile);

  return (
    <>
      <div class="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
        <div class="pb-6">
          <div class="flex flex-wrap justify-center">
            <div class="flex justify-center w-full">
              <div class="relative">
                <div class="align-middle border-8 absolute w-[150px] h-[150px] overflow-hidden bg-[#6aa096] rounded-full dark:bg-gray-600 -m-16 -ml-18 lg:-ml-16"></div>
              </div>
            </div>
          </div>
          <div class="mt-2 mt-20 text-center">
            <h3 class="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
              {`${profile.first_name} ${profile.last_name}`}
            </h3>
            <div class="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
              <div class="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">
                @{profile.username}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
