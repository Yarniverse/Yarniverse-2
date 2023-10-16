import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

// Sidebar has:
// - Home Link (Newsfeed)
// - Projects Link
// - Profile Link
// - Logout Link
export default function PageSidebar() {
  return (
    <Sidebar
      className="fixed top-53 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Default sidebar example"
    >
      <Sidebar.Items className="h-full pt-16 px-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Sidebar.ItemGroup className=" flex-col space-y-2 font-medium">
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <p>Home</p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <p>Projects</p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiInbox}
            label="3"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <p>Inbox</p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiUser}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <p>Profile</p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiArrowSmRight}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <p>Logout</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
