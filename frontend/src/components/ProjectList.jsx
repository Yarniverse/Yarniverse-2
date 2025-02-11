import { useEffect, useState } from "react"; // probably using this
import { useParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import UserWelcome from "../components/UserWelcome";
const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const { user_id } = useParams();
  console.log(typeof user_id);
  useEffect(() => {
    async function doFetch() {
      const res = await fetch(`/api/projects/all/${Number(user_id)}`);
      const resData = await res.json();
      setProjects(resData);
    }
    doFetch();
  }, [setProjects]);

  return (
    <>
      <UserWelcome userInfo={user_id}></UserWelcome>
      <ul class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
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
