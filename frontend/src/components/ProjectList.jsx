import { useEffect, useState } from "react"; // probably using this
import { useParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import UserWelcome from "../components/UserWelcome";
const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const { user_id } = useParams();

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(`/api/projects/all/${Number(user_id)}`);
      const resData = await res.json();
      setProjects(resData);
    }
    doFetch();
  }, [setProjects]);

  // get the information about the current user;
  // hold the id of that user in a variable
  // do a fetch call to the project api and get all user projects based on that variable;

  return (
    <>
      <UserWelcome userInfo={user_id}></UserWelcome>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, i) => (
          <li key={i}>
            <ProjectCard key={project.id} project={project}></ProjectCard>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectList;
